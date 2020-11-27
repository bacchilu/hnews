import React from 'react';
import ReactDOM from 'react-dom';

const getData = function (hitsPerPage = 20) {
    const NOW = new Date() / 1000;
    const DAY = 60 * 60 * 24;
    const start = NOW - 3 * DAY;
    const end = NOW;
    const url = `https://hn.algolia.com/api/v1/search?query=&numericFilters=created_at_i>${start},created_at_i<=${end},points>=100&hitsPerPage=${hitsPerPage}`;
    return fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            if (res['nbHits'] > res['hitsPerPage']) return getData(res['nbHits']);
            return res['hits'];
        });
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
                    <h5 className="card-title">
                        {item['title']}
                        <span className="badge badge-info float-right">{item['points']}</span>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {item['author']}
                        <em className="float-right">
                            {new Date(item['created_at']).toLocaleString('en-US', {hour12: false})}
                        </em>
                    </h6>
                    <CardText item={item} />
                    <a
                        href={`https://news.ycombinator.com/item?id=${item['objectID']}`}
                        className="card-link"
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
        const res = await getData();
        setItems(res);
    }, []);

    return <Items items={items} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
