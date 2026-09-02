type CopyHistory = Record<string, {date: string}>;

const storageKey = 'hnews:copy-history';
const changeEvent = 'hnews:copy-history-change';
const retentionTime = 7 * 24 * 60 * 60 * 1000;

const isCopyHistoryEntry = function (value: unknown): value is CopyHistory[string] {
    return typeof value === 'object' && value !== null && 'date' in value && typeof value.date === 'string';
};

const read = function (): CopyHistory {
    try {
        const value = localStorage.getItem(storageKey);
        if (value === null) return {};

        const parsed: unknown = JSON.parse(value);
        return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed) ? (parsed as CopyHistory) : {};
    } catch (error) {
        console.error('Failed to read the copy history', error);
        return {};
    }
};

const removeOldItems = function () {
    try {
        const history: CopyHistory = read();
        const entries = Object.entries(history);
        const now: number = Date.now();
        const currentEntries = entries.filter(function ([, entry]) {
            if (!isCopyHistoryEntry(entry)) return false;

            const date: number = Date.parse(entry.date);
            return !Number.isNaN(date) && now - date <= retentionTime;
        });

        if (currentEntries.length === entries.length) return;

        if (currentEntries.length === 0) localStorage.removeItem(storageKey);
        else localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(currentEntries)));
    } catch (error) {
        console.error('Failed to remove old copy history items', error);
    }
};

removeOldItems();

export const CopyHistoryStorage = {
    add: function (itemId: string | number) {
        try {
            const history: CopyHistory = read();
            history[String(itemId)] = {date: new Date().toISOString()};
            localStorage.setItem(storageKey, JSON.stringify(history));
            window.dispatchEvent(new Event(changeEvent));
        } catch (error) {
            console.error('Failed to save the copy history', error);
        }
    },
    has: function (itemId: string | number) {
        const entry: unknown = read()[String(itemId)];
        return isCopyHistoryEntry(entry);
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
