import React from 'react';

import {useHNItems} from '../hooks/hn_hook';
import {Card} from './card';
import {Spinner} from './spinner';

const ErrorAlert: React.FC<{message: string}> = function ({message}) {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    );
};

export const Main: React.FC<{recents: boolean; setRecents: (v: boolean) => void}> = function ({recents, setRecents}) {
    const {data, error} = useHNItems(recents ? 1 : 7);

    const changeRecents = function (e: React.ChangeEvent<HTMLInputElement>) {
        setRecents(e.target.checked);
    };

    if (error !== undefined) return <ErrorAlert message={error.message} />;
    if (data === undefined) return <Spinner />;

    const items = data.map((item) => <Card key={item.objectID} item={item} />);
    return (
        <>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked={recents}
                    onChange={changeRecents}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Recents only
                </label>
            </div>
            {items}
        </>
    );
};
