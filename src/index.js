import React from 'react';
import ReactDOM from 'react-dom';

import {Card} from './card.js';
import {useUser, LoginButton, Spinner} from './utils.js';
import {useItems} from './fetcher.js';

const Items = function ({items}) {
    return items.map(function (item) {
        return <Card key={item['objectID']} item={item} inModal={false} />;
    });
};

const App = function (props) {
    const {data, error} = useItems();

    if (error !== undefined)
        return (
            <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
        );
    if (data === undefined) return <Spinner />;

    return <Items items={data} />;
};

const Auth = function (props) {
    const user = useUser();

    return <LoginButton user={user} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Auth />, document.getElementById('auth'));
