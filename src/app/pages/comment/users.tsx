import React from 'react';

import {SpinnerGrow} from '../../components/bootstrap';
import {useHNItem2} from './hooks';
import {VisibilityContainer} from './visibility_utils';

const UserBadge = function ({item, isItemSelected, setSelected}) {
    const {data, error} = useHNItem2(item);

    if (error !== undefined) return <span className="badge rounded-pill bg-danger">error</span>;
    if (data === undefined) return <SpinnerGrow />;

    const onClick = function (e) {
        e.preventDefault();
        setSelected();
    };

    return !isItemSelected ? (
        <a
            href={`https://news.ycombinator.com/item?id=${item}`}
            className="badge rounded-pill bg-light text-dark"
            onClick={onClick}
        >
            {data.by}
        </a>
    ) : (
        <span className="badge rounded-pill bg-secondary">{data.by}</span>
    );
};

export const CommentersList = function ({kids, selectComment}) {
    const [selectedKid, setSelectedKid] = React.useState<number | null>(null);

    const items = kids.map(function (item: number) {
        const setSelected = function () {
            setSelectedKid(item);
            selectComment(item);
        };

        return (
            <VisibilityContainer key={item} spinner={<SpinnerGrow />}>
                <UserBadge item={item} isItemSelected={item === selectedKid} setSelected={setSelected} />
            </VisibilityContainer>
        );
    });

    return (
        <div className="text-muted" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
            {items}
        </div>
    );
};
