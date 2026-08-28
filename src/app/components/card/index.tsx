import React from 'react';

import type {HNItem} from '../../hooks/entities';
import CardTemplate, {
    Footer as CardFooter,
    SubTitle as CardSubTitle,
    CardText,
    Title as CardTitle,
} from '../bootstrap/card';

export const Card: React.FC<{item: HNItem}> = function ({item}) {
    return (
        <CardTemplate>
            <CardTitle item={item} />
            <CardSubTitle item={item} />
            <CardText item={item} />
            <CardFooter item={item} />
        </CardTemplate>
    );
};
