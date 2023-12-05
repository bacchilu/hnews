import React from 'react';

enum COLOR {
    DANGER = 'danger',
    WARNING = 'warning',
    SUCCESS = 'success',
    PRIMARY = 'primary',
    INFO = 'info',
    SECONDARY = 'secondary',
}

export const Badge: React.FC<{score: number}> = function ({score}) {
    const getColor = function (points: number) {
        if (points >= 3200) return COLOR.DANGER;
        if (points >= 1600) return COLOR.WARNING;
        if (points >= 800) return COLOR.SUCCESS;
        if (points >= 400) return COLOR.PRIMARY;
        if (points >= 200) return COLOR.INFO;
        return COLOR.SECONDARY;
    };

    return <span className={`badge bg-${getColor(score)}`}>{score}</span>;
};
