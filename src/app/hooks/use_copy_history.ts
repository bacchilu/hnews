import React from 'react';

import {CopyHistoryStorage} from '../copy_history';

interface UseCopyHistoryResult {
    isCopied: boolean;
    markCopied: () => void;
}

const getServerSnapshot = function () {
    return false;
};

export const useCopyHistory = function (itemId: string | number): UseCopyHistoryResult {
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
