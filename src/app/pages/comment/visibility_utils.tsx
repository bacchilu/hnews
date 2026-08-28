import type {ReactNode} from 'react';
import {useTrackVisibility} from 'react-intersection-observer-hook';

const useVisible = function () {
    const [ref, {isVisible}] = useTrackVisibility({once: true});
    return {ref, isVisible};
};

export const VisibilityContainer = function ({spinner, children}: {spinner: ReactNode; children: ReactNode}) {
    const {ref, isVisible} = useVisible();

    return (
        <span ref={ref}>
            {!isVisible && spinner}
            {isVisible && children}
        </span>
    );
};
