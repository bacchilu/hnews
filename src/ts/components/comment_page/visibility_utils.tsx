import React from 'react';
import {useTrackVisibility} from 'react-intersection-observer-hook';

const useVisible = function () {
    const [ref, {isVisible, wasEverVisible}] = useTrackVisibility();
    return {ref, isVisible, wasEverVisible};
};

export const VisibilityContainer = function ({spinner, children}) {
    const {ref, isVisible, wasEverVisible} = useVisible();

    return (
        <span ref={ref}>
            {!isVisible && !wasEverVisible && spinner}
            {(isVisible || wasEverVisible) && children}
        </span>
    );
};
