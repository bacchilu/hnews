import React from 'react';
import ReactDOM from 'react-dom';

import {Card} from './card.js';
import {useUser, LoginButton} from './utils.js';
import {useItems} from './fetcher.js';

const Spinner = function (props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

const Items = function ({items}) {
    return items.map(function (item) {
        return <Card key={item['objectID']} item={item} inModal={false} />;
    });
};

const App = function (props) {
    const items = useItems();

    if (items === null) return <Spinner />;
    return <Items items={items} />;
};

const Auth = function (props) {
    const user = useUser();

    return <LoginButton user={user} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Auth />, document.getElementById('auth'));
