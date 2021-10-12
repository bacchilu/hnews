import React from 'react';

export const ProgressBar = function ({i, total}) {
    return (
        <div className="progress" style={{height: '1px', width: '100%'}}>
            <div
                className="progress-bar"
                role="progressbar"
                style={{width: `${(100 * i) / total}%`}}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
    );
};
