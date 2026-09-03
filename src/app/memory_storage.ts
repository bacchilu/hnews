export type MemoryState = 'bookmarked' | 'copied';

type MemoryValue = {date: string};
type MemoryEntry = Partial<Record<MemoryState, MemoryValue>>;
type Memory = Record<string, MemoryEntry>;

const storageKey = 'hnews:memory';
const changeEvent = 'hnews:memory-change';
const retentionTime = 7 * 24 * 60 * 60 * 1000;

const isMemoryValue = function (value: unknown): value is MemoryValue {
    return typeof value === 'object' && value !== null && 'date' in value && typeof value.date === 'string';
};

const parseMemory = function (value: unknown): Memory {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) return {};

    return Object.fromEntries(
        Object.entries(value).flatMap(function ([itemId, entry]) {
            if (typeof entry !== 'object' || entry === null || Array.isArray(entry)) return [];

            const memoryEntry: MemoryEntry = {};
            if ('copied' in entry && isMemoryValue(entry.copied)) memoryEntry.copied = entry.copied;
            if ('bookmarked' in entry && isMemoryValue(entry.bookmarked)) memoryEntry.bookmarked = entry.bookmarked;

            return Object.keys(memoryEntry).length === 0 ? [] : [[itemId, memoryEntry]];
        })
    );
};

const read = function (): Memory {
    try {
        const value = localStorage.getItem(storageKey);
        if (value === null) return {};

        return parseMemory(JSON.parse(value));
    } catch (error) {
        console.error('Failed to read the memory', error);
        return {};
    }
};

const write = function (memory: Memory) {
    if (Object.keys(memory).length === 0) localStorage.removeItem(storageKey);
    else localStorage.setItem(storageKey, JSON.stringify(memory));
};

const removeOldItems = function () {
    try {
        const memory: Memory = read();
        const entries = Object.entries(memory);
        const now: number = Date.now();
        let isChanged = false;
        const currentEntries = entries.flatMap(function ([itemId, entry]) {
            const currentEntry: MemoryEntry = {};

            if (entry.bookmarked !== undefined) currentEntry.bookmarked = entry.bookmarked;
            if (entry.copied !== undefined) {
                const date: number = Date.parse(entry.copied.date);
                if (!Number.isNaN(date) && now - date <= retentionTime) currentEntry.copied = entry.copied;
                else isChanged = true;
            }

            return Object.keys(currentEntry).length === 0 ? [] : [[itemId, currentEntry] as const];
        });

        if (!isChanged) return;

        write(Object.fromEntries(currentEntries));
    } catch (error) {
        console.error('Failed to remove old memory items', error);
    }
};

removeOldItems();

export const MemoryStorage = {
    toggle: function (itemId: number, state: MemoryState) {
        try {
            const memory: Memory = read();
            const key = String(itemId);
            const entry: MemoryEntry = memory[key] ?? {};

            if (entry[state] === undefined) entry[state] = {date: new Date().toISOString()};
            else delete entry[state];

            if (Object.keys(entry).length === 0) delete memory[key];
            else memory[key] = entry;

            write(memory);

            window.dispatchEvent(new Event(changeEvent));
        } catch (error) {
            console.error('Failed to update the memory', error);
        }
    },
    has: function (itemId: number, state: MemoryState): boolean {
        return read()[String(itemId)]?.[state] !== undefined;
    },
    subscribe: function (listener: () => void) {
        const handleStorage = function (event: StorageEvent) {
            if (event.key === storageKey) listener();
        };

        window.addEventListener(changeEvent, listener);
        window.addEventListener('storage', handleStorage);

        return function () {
            window.removeEventListener(changeEvent, listener);
            window.removeEventListener('storage', handleStorage);
        };
    },
};
