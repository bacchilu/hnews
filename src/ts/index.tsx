import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter, Route, Routes} from 'react-router-dom';

import {Container} from './components/bootstrap';
import {CommentPage} from './components/comment_page';
import {Main} from './components/main';
import {NavBar} from './components/navbar';

const App = function () {
    const groupByDate = React.useState(false);
    const limit = React.useState(false);
    const reversed = React.useState(false);

    return (
        <>
            <NavBar />
            <Container>
                <HashRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
                    <Routes>
                        <Route path="/:commentId" element={<CommentPage />}></Route>
                        <Route
                            path="/"
                            element={<Main groupByDate={groupByDate} limit={limit} reversed={reversed} />}
                        ></Route>
                    </Routes>
                </HashRouter>
            </Container>
        </>
    );
};

createRoot(document.getElementById('app')!).render(<App />);
