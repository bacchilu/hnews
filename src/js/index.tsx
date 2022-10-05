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

const Auth = function () {
    const user = useUser();

    return <LoginButton user={user} />;
};

const NavBar = function () {
    const id = 'navbarCollapse';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <strong style={{color: '#ff6600'}}>HN</strong>ews <sub>{version}</sub>
                </a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target={`#${id}`}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id={id}>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
                    <form className="d-flex">
                        <Auth />
                    </form>
                </div>
            </div>
        </nav>
    );
};

const App = function () {
    return (
        <>
            <NavBar />
            <div className="container" style={{paddingTop: '1em'}}>
                <Router>
                    <Routes>
                        <Route path="/:commentId" element={<CommentPage />}></Route>
                        <Route path="/" element={<Main />}></Route>
                    </Routes>
                </Router>
            </div>
        </>
    );
};

createRoot(document.getElementById('app')!).render(<App />);
