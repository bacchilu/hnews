import {Popover} from 'bootstrap';
import React from 'react';
import * as z from 'zod';

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
    React.useEffect(
        function () {
            if (user === undefined || domEl.current === null) return;

            const element = domEl.current;
            const popover = new Popover(element, {
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
                popover.setContent({'.popover-body': t});
            };
            element.addEventListener('inserted.bs.popover', listener);

            return function () {
                element.removeEventListener('inserted.bs.popover', listener);
                popover.dispose();
            };
        },
        [user]
    );

    return domEl;
};
