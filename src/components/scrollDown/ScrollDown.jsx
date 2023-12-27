import React from 'react';
import './ScrollDown.css';

const ScrollDown = () => {
    return (
        <div className="scroll-down">
            <a href="#about" className="mouse_wrapper">
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
                <span className="scroll-name">Scroll Down</span>
            </a>
        </div>
    )
}

export default ScrollDown
