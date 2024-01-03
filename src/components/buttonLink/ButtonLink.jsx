import React from 'react';
import './ButtonLink.css';

const ButtonLink = ({ href, target, rel, children, download }) => {
    return (
        <a href={href} target={target} rel={rel} className="btn-link" download={download}>{children}</a>
    )
}

export default ButtonLink
