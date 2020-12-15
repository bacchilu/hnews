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
