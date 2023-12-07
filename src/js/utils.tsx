import hdate from 'human-date';

export {useRefUserDetails} from './components/user_details';

export const relativeTime = function (createdAt: string | number, isEpoch = false) {
    let d: Date;
    if (isEpoch) {
        d = new Date(0);
        d.setUTCSeconds(createdAt as number);
    } else d = new Date(createdAt);
    return hdate.relativeTime(d);
};

export const toLocaleString = function (createdAt: string | number, isEpoch = false) {
    let d: Date;
    if (isEpoch) {
        d = new Date(0);
        d.setUTCSeconds(createdAt as number);
    } else d = new Date(createdAt);
    return d.toLocaleString('en-US', {hour12: false});
};
