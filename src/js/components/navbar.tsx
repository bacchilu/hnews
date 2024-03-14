import React from 'react';

import {version} from '../../../package.json';
import {useUser} from '../hooks/use_user';
import {LoginButton} from './login_button';

const Auth = function () {
    const user = useUser();

    return <LoginButton user={user} />;
};

export const NavBar = function () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/hnews">
                    <strong style={{color: '#ff6600'}}>HN</strong>ews <sub>{version}</sub>
                </a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
                    <form className="d-flex">
                        <Auth />
                    </form>
                </div>
            </div>
        </nav>
    );
};
