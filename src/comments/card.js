import React, {PureComponent} from 'react';

const fetchComments = function (items) {
    const controller = new AbortController();
    return [
        controller,
        Promise.all(
            items.map(async function (id) {
                const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
                    signal: controller.signal,
                });
                return await res.json();
            })
        ),
    ];
};

export const CommentCard = function ({items}) {
    if (items.length === 0) return null;

    const [comments, setComments] = React.useState(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    React.useEffect(
        function () {
            setComments(null);
            setCurrentIndex(0);
            const [controller, pComments] = fetchComments(items);
            (async function () {
                setComments(await pComments);
            })();

            return function () {
                controller.abort();
            };
        },
        [items]
    );

    if (comments === null)
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );

    const userBadges = comments.map(function (e, index) {
        const onClick = function (e) {
            e.preventDefault();
            setCurrentIndex(index);
        };

        return index === currentIndex ? (
            <span key={e['id']} className="badge badge-pill badge-secondary">
                {e['by']}
            </span>
        ) : (
            <a key={e['id']} href="#" className="badge badge-pill badge-light" onClick={onClick}>
                {e['by']}
            </a>
        );
    });

    return (
        <React.Fragment>
            <div className="card mb-1">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                        {userBadges}
                    </h6>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: comments[currentIndex]['text']}}></p>
                </div>
            </div>
            {comments[currentIndex]['kids'] !== undefined && <CommentCard items={comments[currentIndex]['kids']} />}
        </React.Fragment>
    );
};
