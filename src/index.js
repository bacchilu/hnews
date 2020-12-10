import React from 'react';
import ReactDOM from 'react-dom';

import {Card} from './card.js';

const ajaxGet = async function (start, end, hitsPerPage) {
    const url = `https://hn.algolia.com/api/v1/search?query=&numericFilters=created_at_i>${start},created_at_i<=${end},points>=100&hitsPerPage=${hitsPerPage}`;
    return await (await fetch(url)).json();
};

const getData = async function () {
    const NOW = new Date() / 1000;
    const DAY = 60 * 60 * 24;
    const start = NOW - 3 * DAY;
    const end = NOW;
    const res = await ajaxGet(start, end, 0);
    return (await ajaxGet(start, end, res['nbHits']))['hits'];
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

ReactDOM.render(<App />, document.getElementById('app'));
