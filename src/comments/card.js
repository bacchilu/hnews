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

const Carousel = function ({id, comments}) {
    const carousel = React.useRef(null);
    React.useEffect(function () {
        $(carousel.current).carousel({pause: true, interval: false});

        return function () {
            $(carousel.current).carousel('dispose');
        };
    }, []);

    const items = comments.map(function (item, index) {
        return (
            <div key={item['id']} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <h6 className="d-block w-100 card-subtitle m-2 text-muted">{item['by']}</h6>
                <p className="card-text" dangerouslySetInnerHTML={{__html: item['text']}}></p>
            </div>
        );
    });

    return (
        <div className="card mb-1">
            <div className="card-body">
                <div ref={carousel} id={`carousel-${id}`} className="carousel slide">
                    <div className="carousel-inner">{items}</div>
                    <a className="carousel-control-prev" href={`#carousel-${id}`} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={`#carousel-${id}`} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export const CommentCard = function ({id, items}) {
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
            {/* <Carousel id={id} comments={comments} /> */}
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
