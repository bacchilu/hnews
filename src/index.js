import React from 'react';
import ReactDOM from 'react-dom';
import hdate from 'human-date';

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

const relativeTime = function (createdAt) {
    return hdate.relativeTime(new Date(createdAt));
};

const toLocaleString = function (createdAt) {
    return new Date(createdAt).toLocaleString('en-US', {hour12: false});
};

const getColor = function (points) {
    if (points >= 3200) return 'danger';
    if (points >= 1600) return 'warning';
    if (points >= 800) return 'success';
    if (points >= 400) return 'primary';
    if (points >= 200) return 'info';
    return 'secondary';
};

const CardText = function ({item}) {
    if (item['story_text'] !== null) return <em dangerouslySetInnerHTML={{__html: item['story_text']}}></em>;
    return (
        <p className="card-text">
            <a href={item['url']} target="_blank">
                {item['url']}
            </a>
        </p>
    );
};

const Items = function ({items}) {
    if (items === null)
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    return items.map(function (item) {
        return (
            <div key={item['objectID']} className="card border-dark bg-light m-3">
                <div className="card-body">
                    <h5 className="card-title">{item['title']}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {item['author']}
                        <em className="float-right" title={toLocaleString(item['created_at'])}>
                            {relativeTime(item['created_at'])}
                        </em>
                    </h6>
                    <CardText item={item} />
                    <span className={`badge badge-${getColor(item['points'])}`}>{item['points']}</span>
                    <a
                        href={`https://news.ycombinator.com/item?id=${item['objectID']}`}
                        className="card-link float-right"
                        target="_black"
                    >
                        {item['num_comments']} Comments
                    </a>
                </div>
            </div>
        );
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
