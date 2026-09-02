import React from 'react';

import {CopyHistoryStorage} from '../copy_history';

interface UseMemoryResult {
    isCopied: boolean;
    markCopied: () => void;
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
    const markCopied = React.useCallback(
        function () {
            CopyHistoryStorage.add(itemId);
        },
        [itemId]
    );
    const isCopied = React.useSyncExternalStore(CopyHistoryStorage.subscribe, getSnapshot, getServerSnapshot);

    return {isCopied, markCopied};
};
