import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {CommentPage} from './comment_page';

import {Card} from './card.js';
import {useUser, LoginButton, Spinner, Badge} from './utils.js';
import {useItems} from './fetcher.js';

const Items = function ({items}) {
    return items.map(function (item) {
        return <Card key={item['objectID']} item={item} inModal={false} />;
    });
};

const Main = function (props) {
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

const App = function (props) {
    return (
        <Router>
            <Routes>
                <Route path="/:commentId" element={<CommentPage />}></Route>
                <Route path="/" element={<Main />}></Route>
            </Routes>
        </Router>
    );
};

const Auth = function (props) {
    const user = useUser();

    return <LoginButton user={user} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Auth />, document.getElementById('auth'));
