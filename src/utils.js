import React from 'react';
import hdate from 'human-date';

export const relativeTime = function (createdAt, isEpoch = false) {
    let d;
    if (isEpoch) {
        d = new Date(0);
        d.setUTCSeconds(createdAt);
    } else d = new Date(createdAt);
    return hdate.relativeTime(d);
};

export const toLocaleString = function (createdAt, isEpoch = false) {
    let d;
    if (isEpoch) {
        d = new Date(0);
        d.setUTCSeconds(createdAt);
    } else d = new Date(createdAt);
    return d.toLocaleString('en-US', {hour12: false});
};

export const Badge = function ({score}) {
    const getColor = function (points) {
        if (points >= 3200) return 'danger';
        if (points >= 1600) return 'warning';
        if (points >= 800) return 'success';
        if (points >= 400) return 'primary';
        if (points >= 200) return 'info';
        return 'secondary';
    };

    return <span className={`badge bg-${getColor(score)}`}>{score}</span>;
};
