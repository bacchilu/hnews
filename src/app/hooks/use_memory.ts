import React from 'react';

import {CopyHistoryStorage} from '../copy_history';

interface UseMemoryResult {
    isCopied: boolean;
    toggleCopied: () => void;
}

const getServerSnapshot = function () {
    return false;
};

export const useMemory = function (itemId: string | number): UseMemoryResult {
    const getSnapshot = React.useCallback(
        function () {
            return CopyHistoryStorage.has(itemId);
        },
        [itemId]
    );
    const toggleCopied = React.useCallback(
        function () {
            CopyHistoryStorage.toggle(itemId);
        },
        [itemId]
    );
    const isCopied = React.useSyncExternalStore(CopyHistoryStorage.subscribe, getSnapshot, getServerSnapshot);

    return {isCopied, toggleCopied};
};
