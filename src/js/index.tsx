import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {createRoot} from 'react-dom/client';
import {Route, HashRouter as Router, Routes} from 'react-router-dom';

import {version} from '../../package.json';
import {Card} from './components/card';
import {CommentPage} from './components/comment_page';
import {LoginButton} from './components/login_button';
import {Spinner} from './components/spinner';
import {useHNItems} from './hooks/hn_hook';
import {useUser} from './hooks/use_user';

const ErrorAlert: React.FC<{message: string}> = function ({message}) {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    );
};

const Main = function () {
    const {data, error} = useHNItems();

    if (error !== undefined) return <ErrorAlert message={error.message} />;
    if (data === undefined) return <Spinner />;

    return data.map((item) => <Card key={item.objectID} item={item} />);
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
            <div className="container pt-3">
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
