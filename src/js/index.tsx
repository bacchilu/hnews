import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {createRoot} from 'react-dom/client';
import {Route, HashRouter as Router, Routes} from 'react-router-dom';

import {CommentPage} from './components/comment_page';
import {Main} from './components/main';
import {NavBar} from './components/navbar';

const App = function () {
    const groupByDate = React.useState(false);
    const limit = React.useState(false);

    return (
        <>
            <NavBar />
            <div className="container pt-3">
                <Router>
                    <Routes>
                        <Route path="/:commentId" element={<CommentPage />}></Route>
                        <Route path="/" element={<Main groupByDate={groupByDate} limit={limit} />}></Route>
                    </Routes>
                </Router>
            </div>
        </>
    );
};

createRoot(document.getElementById('app')!).render(<App />);
