import React from 'react';

export const Container: React.FC<{children: React.ReactNode}> = function ({children}) {
    return <div className="container pt-3">{children}</div>;
};

export const Row: React.FC<{children: React.ReactNode}> = function ({children}) {
    return <div className="row">{children}</div>;
};

export const Col: React.FC<{children: React.ReactNode}> = function ({children}) {
    return <div className="col">{children}</div>;
};

export const FloatEnd: React.FC<{children: React.ReactNode}> = function ({children}) {
    return <div className="float-end">{children}</div>;
};

export const Switch: React.FC<{title: string; value: boolean; onChange: (value: boolean) => void}> = function ({
    title,
    value,
    onChange,
}) {
    const id = React.useId();

    const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        onChange(e.target.checked);
    };

    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id={id} checked={value} onChange={handleChange} />
            <label className="form-check-label" htmlFor={id}>
                {title}
            </label>
        </div>
    );
};

export const DangerAlert: React.FC<{message: string}> = function ({message}) {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    );
};

export const Spinner = function () {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export const SpinnerGrow = function () {
    return <div className="spinner-grow spinner-grow-sm me-5"></div>;
};

export const Separator: React.FC<{show?: boolean}> = function ({show = true}) {
    return show ? <hr style={{margin: '2rem'}} /> : null;
};
