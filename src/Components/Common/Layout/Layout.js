import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import style from './Layout.module.css';

function Layout() {
    const location = useLocation();
    const [currentURL, setCurrentURL] = useState(null);

    const menuItems = [
        { path: '/about', label: 'About me' },
        { path: '/projects', label: 'My projects' },
        { path: '/contacts', label: 'Contacts' }
    ];

    useEffect(() => {
        setCurrentURL(location.pathname);
    }, [location.pathname]);

    const getLiClassName = (pathname) => {
        return pathname === currentURL ? style.active : "";
    };

    return (
        <>
            <header>
                <ul className={style.container}>
                    <li className={style.logo}><Link to={'/'}><img src={'./logo.png'} alt="Logo" /></Link></li>
                    {menuItems.map((menuItem, index) => (
                        <li key={index}>
                            <Link to={menuItem.path} className={getLiClassName(menuItem.path)}>
                                {menuItem.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </header>
            <main className={style.container}>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;