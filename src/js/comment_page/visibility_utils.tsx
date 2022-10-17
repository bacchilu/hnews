import React from 'react';
import {useIntersectionObserver} from 'react-intersection-observer-hook';

const useVisible = function () {
    const [ref, {entry}] = useIntersectionObserver();
    return {ref, isVisible: entry === undefined ? undefined : entry.isIntersecting};
};

const visitedKeys = {};
const useVisited = function (key: number, isVisible: boolean | undefined) {
    React.useEffect(
        function () {
            const v: boolean | undefined = visitedKeys[key];
            if (v === true) return;
            visitedKeys[key] = isVisible === true;
        },
        [isVisible]
    );

    const v: boolean | undefined = visitedKeys[key];
    return v;
};

export const VisibilityContainer = function ({spinner, key2, children}) {
    const {ref, isVisible} = useVisible();
    const isVisited = useVisited(key2, isVisible);

    const visible = isVisible !== undefined && isVisible;
    const visited = isVisited === undefined ? false : isVisited;

    return (
        <span ref={ref}>
            {!visible && !visited && spinner}
            {(visible || visited) && children}
        </span>
    );
};
