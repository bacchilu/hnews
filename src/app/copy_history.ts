type CopyHistory = Record<string, {date: string}>;

const storageKey = 'hnews:copy-history';
const changeEvent = 'hnews:copy-history-change';

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
        return typeof entry === 'object' && entry !== null && 'date' in entry && typeof entry.date === 'string';
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
