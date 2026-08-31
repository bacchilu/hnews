import hdate from 'human-date';

export const relativeTime = function (createdAt: Date) {
    return hdate.relativeTime(createdAt);
};

export const toLocaleString = function (createdAt: Date) {
    return createdAt.toLocaleString(navigator.language, {hour12: false});
};
