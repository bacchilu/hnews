import React from 'react';

import {MemoryStorage} from '../memory_storage';

interface UseMemoryResult {
    isCopied: boolean;
    toggleCopied: () => void;
    isBookmarked: boolean;
    toggleBookmarked: () => void;
}

const getServerSnapshot = function () {
    return false;
};

export const useMemory = function (itemId: number): UseMemoryResult {
    const getCopiedSnapshot = React.useCallback(
        function () {
            return MemoryStorage.has(itemId, 'copied');
        },
        [itemId]
    );
    const toggleCopied = React.useCallback(
        function () {
            MemoryStorage.toggle(itemId, 'copied');
        },
        [itemId]
    );
    const isCopied = React.useSyncExternalStore(MemoryStorage.subscribe, getCopiedSnapshot, getServerSnapshot);

    const getBookmarkedSnapshot = React.useCallback(
        function () {
            return MemoryStorage.has(itemId, 'bookmarked');
        },
        [itemId]
    );
    const toggleBookmarked = React.useCallback(
        function () {
            MemoryStorage.toggle(itemId, 'bookmarked');
        },
        [itemId]
    );
    const isBookmarked = React.useSyncExternalStore(MemoryStorage.subscribe, getBookmarkedSnapshot, getServerSnapshot);

    return {isCopied, toggleCopied, isBookmarked, toggleBookmarked};
};
