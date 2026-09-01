import {CssBaseline} from '@mui/material';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter, Route, Routes} from 'react-router-dom';

import {Container, Spinner} from './components/mui';
import {NavBar} from './components/navbar';
import {Main} from './pages/main';

const CommentPage = React.lazy(() => import('./pages/comment').then(({CommentPage: Page}) => ({default: Page})));

const Router: React.FC<{
    groupByDate: [boolean, (v: boolean) => void];
    limit: [boolean, (v: boolean) => void];
    reversed: [boolean, (v: boolean) => void];
}> = function ({groupByDate, limit, reversed}) {
    return (
        <HashRouter>
            <React.Suspense fallback={<Spinner />}>
                <Routes>
                    <Route
                        path="/"
                        element={<Main groupByDate={groupByDate} limit={limit} reversed={reversed} />}
                    ></Route>
                    <Route path="/:commentId" element={<CommentPage />}></Route>
                </Routes>
            </React.Suspense>
        </HashRouter>
    );
};

const App = function () {
    const groupByDate = React.useState<boolean>(false);
    const limit = React.useState<boolean>(false);
    const reversed = React.useState<boolean>(false);

    return (
        <>
            <CssBaseline />
            <NavBar />
            <Container>
                <Router groupByDate={groupByDate} limit={limit} reversed={reversed} />
            </Container>
        </>
    );
};

createRoot(document.getElementById('app')!).render(<App />);
