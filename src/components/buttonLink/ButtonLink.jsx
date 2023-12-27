import React from 'react';
import './ButtonLink.css';

const ButtonLink = ({ href, children }) => {
    return (
        <a href={href} className="btn-link">{children}</a>
    )
}

export default ButtonLink
