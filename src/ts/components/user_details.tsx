import {Popover} from 'bootstrap';
import React from 'react';
import {z} from 'zod';

import {relativeTime, toLocaleString} from '../utils';

const UserDetailsParser = z.object({
    created: z
        .number()
        .int()
        .positive()
        .transform((v) => new Date(v * 1000)),
    about: z.string().optional(),
});
type UserDetailsTypeInput = z.input<typeof UserDetailsParser>;
type UserDetailsType = z.infer<typeof UserDetailsParser>;

const UserDetails = (function () {
    const cache = {} as {[id: string]: UserDetailsType};
    return {
        get: async function (id: string) {
            if (cache[id] !== undefined) return cache[id];
            const res = (await (
                await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
            ).json()) as UserDetailsTypeInput;
            cache[id] = UserDetailsParser.parse(res);
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
                        <em title=${toLocaleString(res.created)}>${relativeTime(res.created)}</em>
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
