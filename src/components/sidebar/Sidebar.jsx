import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '/logo-afm.svg';
import { menus } from '../../data/data';

const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <aside className={`aside ${toggle && "show-menu"}`}>
                <a href="#home" className="nav__logo">
                    <img src={Logo} alt="Logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            {menus.map((menu) => (
                                <li className="nav__item" key={menu.id}>
                                    <a href={menu.link} className="nav__link">
                                        <i className={menu.icon}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright">
                        &copy; 2024 AFM
                    </span>
                </div>
            </aside >

            <div onClick={() => setToggle(!toggle)} className={`nav__toggle ${toggle && "nav__toggle-open"}`}>
                <i className="icon-menu" ></i>
            </div >
        </>
    )
}

export default Sidebar;