import {Popover} from 'bootstrap';
import React from 'react';

import {relativeTime, toLocaleString} from '../utils';

const UserDetails = (function () {
    const cache = {};
    return {
        get: async function (id: string) {
            if (cache[id] !== undefined) return cache[id];
            cache[id] = await (await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)).json();
            return cache[id];
        },
    };
})();

export const useRefUserDetails = function (user: string | undefined) {
    const domEl = React.useRef<HTMLElement | null>(null);
    React.useEffect(function () {
        if (user === undefined) return;
        const popover = new Popover(domEl.current!, {
            content: `
                <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            `,
            html: true,
            placement: 'auto',
            trigger: 'click hover',
        });
        const listener = async function () {
            const res = await UserDetails.get(user);
            const t = `
                <p class="fw-lighter">
                    <small>
                        <em title=${toLocaleString(res.created * 1000)}>${relativeTime(res.created * 1000)}</em>
                        <br />
                        ${res.about !== undefined ? res.about : ''}
                    </small>
                </p>
            `;
            // if (popover['tip'] !== null) popover.setContent({'.popover-header': 'another title', '.popover-body': t});
            if (popover['tip'] !== null) popover['tip'].getElementsByClassName('popover-body')[0].innerHTML = t;
        };
        domEl.current!.addEventListener('inserted.bs.popover', listener);

        return function () {
            // domEl.current.removeEventListener('inserted.bs.popover', listener);
            popover.dispose();
        };
    }, []);

    return domEl;
};
