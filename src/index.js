import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import useSWR from 'swr';

import {Card} from './card.js';
import {useUser, LoginButton, Spinner, Badge} from './utils.js';
import {useItems} from './fetcher.js';

const Items = function ({items}) {
    return items.map(function (item) {
        return <Card key={item['objectID']} item={item} inModal={false} />;
    });
};

const Main = function (props) {
    const {data, error} = useItems();

    if (error !== undefined)
        return (
            <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
        );
    if (data === undefined) return <Spinner />;

    return <Items items={data} />;
};

const CardText = function ({item}) {
    if (item['text'] !== undefined) return <em dangerouslySetInnerHTML={{__html: item['text']}}></em>;
    return (
        <p className="card-text text-truncate">
            <a href={item['url']} target="_blank">
                {item['url']}
            </a>
        </p>
    );
};

const Comment = function (props) {
    const {commentId} = useParams();
    const {data, error} = useSWR(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`);

    if (error !== undefined)
        return (
            <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
        );
    if (data === undefined) return <Spinner />;

    return (
        <React.Fragment>
            <h1>#{data.id}</h1>
            <h2>{data.title}</h2>
            <CardText item={data} />
            <p>
                <Badge score={data['score']} />
                <a href={`https://news.ycombinator.com/item?id=${data['id']}`} target="_blank" className="float-end">
                    {data['descendants']} Comments
                </a>
            </p>
            <p className="text-muted" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                <span className="badge rounded-pill bg-secondary">luca</span>{' '}
                <a href="#" className="badge rounded-pill bg-light text-dark">
                    matteo
                </a>
            </p>
        </React.Fragment>
    );
};

const App = function (props) {
    return (
        <Router>
            <Switch>
                <Route path="/:commentId">
                    <Comment />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </Router>
    );
};

const Auth = function (props) {
    const user = useUser();

    return <LoginButton user={user} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Auth />, document.getElementById('auth'));
