import React from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

import {version} from '../../package.json';
import {Card} from './card';
import {CommentPage} from './comment_page';
import {useHNItems} from './fetcher.js';
import {LoginButton, Spinner, useUser} from './utils';

export interface Item {
    objectID: string;
    author: string;
    title: string;
    points: number;
    created_at: string;
    story_text: string;
    url: string;
}

const Items = function ({items}: {items: Item[]}) {
    const res = items.map(function (item) {
        return <Card key={item.objectID} item={item} inModal={false} />;
    });
    return <>{res}</>;
};

const Main = function () {
    const {data, error} = useHNItems();

    if (error !== undefined)
        return (
            <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
        );
    if (data === undefined) return <Spinner />;

    return <Items items={data} />;
};

const Version = function () {
    return (
        <div style={{position: 'fixed', bottom: '0.1rem', left: '0.1rem'}} className="font-monospace">
            {version}
        </div>
    );
};

const App = function () {
    return (
        <Router>
            <Routes>
                <Route path="/:commentId" element={<CommentPage />}></Route>
                <Route path="/" element={<Main />}></Route>
            </Routes>
        </Router>
    );
};

const Auth = function () {
    const user = useUser();

    return <LoginButton user={user} />;
};

createRoot(document.getElementById('app')!).render(
    <>
        <App />
        <Version />
    </>
);
createRoot(document.getElementById('auth')!).render(<Auth />);
