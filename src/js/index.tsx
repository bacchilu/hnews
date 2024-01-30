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

const Main: React.FC<{recents: boolean; setRecents: (v: boolean) => void}> = function ({recents, setRecents}) {
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
    const [recents, setRecents] = React.useState(false);

    return (
        <>
            <NavBar />
            <div className="container pt-3">
                <Router>
                    <Routes>
                        <Route path="/:commentId" element={<CommentPage />}></Route>
                        <Route path="/" element={<Main recents={recents} setRecents={setRecents} />}></Route>
                    </Routes>
                </Router>
            </div>
        </>
    );
};

createRoot(document.getElementById('app')!).render(<App />);
