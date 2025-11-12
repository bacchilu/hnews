import React from 'react';


export const Spinner: React.FC = function () {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};
