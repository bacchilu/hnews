import React from 'react';
import ReactDOM from 'react-dom';

import {Card} from './card.js';
import {useUser, LoginButton} from './utils.js';

// const ajaxGet = async function (start, end, hitsPerPage) {
//     const searchParams = new URLSearchParams({
//         query: '',
//         numericFilters: `created_at_i>${start},created_at_i<=${end},points>=100`,
//         hitsPerPage: hitsPerPage,
//     });
//     const url = `https://hn.algolia.com/api/v1/search?${searchParams.toString()}`;
//     return await (await fetch(url)).json();
// };

// const getData = async function () {
//     const NOW = new Date() / 1000;
//     const DAY = 60 * 60 * 24;
//     const start = NOW - 3 * DAY;
//     const end = NOW;
//     const res = await ajaxGet(start, end, 0);
//     return (await ajaxGet(start, end, res['nbHits']))['hits'];
// };

const ajaxGet = async function (start, end, hitsPerPage) {
    const searchParams = new URLSearchParams({
        query: '',
        numericFilters: `created_at_i>${start},created_at_i<=${end}`,
        hitsPerPage: hitsPerPage,
    });
    const url = `https://hn.algolia.com/api/v1/search?${searchParams.toString()}`;
    return await (await fetch(url)).json();
};

const getDaysData = async function (start, end, n) {
    return (await ajaxGet(start, end, n))['hits'];
};

const getData = async function () {
    const NOW = new Date() / 1000;
    const DAY = 60 * 60 * 24;

    const res = await Promise.all([
        getDaysData(NOW - 7 * DAY, NOW - 6 * DAY, 1),
        getDaysData(NOW - 6 * DAY, NOW - 5 * DAY, 2),
        getDaysData(NOW - 5 * DAY, NOW - 4 * DAY, 4),
        getDaysData(NOW - 4 * DAY, NOW - 3 * DAY, 8),
        getDaysData(NOW - 3 * DAY, NOW - 2 * DAY, 16),
        getDaysData(NOW - 2 * DAY, NOW - 1 * DAY, 32),
        getDaysData(NOW - 1 * DAY, NOW - 0 * DAY, 64),
    ]);
    const r = [...res[0], ...res[1], ...res[2], ...res[3], ...res[4], ...res[5], ...res[6]];
    return r.sort(function (a, b) {
        if (a['points'] < b['points']) return 1;
        if (a['points'] > b['points']) return -1;
        return 0;
    });
};

const Items = function ({items}) {
    if (items === null)
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    return items.map(function (item) {
        return <Card key={item['objectID']} item={item} inModal={false} />;
    });
};

const App = function (props) {
    const [items, setItems] = React.useState(null);
    React.useEffect(async function () {
        setItems(await getData());
    }, []);

    return <Items items={items} />;
};

const Auth = function (props) {
    const user = useUser();

    return <LoginButton user={user} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Auth />, document.getElementById('auth'));
