import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {createRoot} from 'react-dom/client';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {CommentPage} from './components/comment_page';
import {Main} from './components/main';
import {NavBar} from './components/navbar';

const App = function () {
    const groupByDate = React.useState(true);
    const limit = React.useState(true);

    return (
        <>
            <NavBar />
            <div className="container pt-3">
                <BrowserRouter>
                    <Routes>
                        <Route path="/:commentId" element={<CommentPage />}></Route>
                        <Route path="/" element={<Main groupByDate={groupByDate} limit={limit} />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

createRoot(document.getElementById('app')!).render(<App />);
