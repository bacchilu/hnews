import React from 'react';

import {CopyHistoryStorage} from '../copy_history';

const getServerSnapshot = function () {
    return false;
};

export const useIsCopied = function (itemId: string | number): boolean {
    const getSnapshot = React.useCallback(
        function () {
            return CopyHistoryStorage.has(itemId);
        },
        [itemId]
    );

    return React.useSyncExternalStore(CopyHistoryStorage.subscribe, getSnapshot, getServerSnapshot);
};
