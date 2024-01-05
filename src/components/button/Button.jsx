import React from 'react';
import './Button.css';

const Button = ({ type, disabled, children }) => {
    return (
        <button type={type} disabled={disabled} className="btn">{children}</button>
    )
}

export default Button
