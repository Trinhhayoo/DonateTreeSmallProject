import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Navigate.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../../svg/2xlogo.svg';

const cx = classNames.bind(styles);

function Navigate() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className={cx('navbarItems')}>
            <div className={cx('container')}>
                {/* Logo Page */}
                <div>
                    <a href="#header" className={cx('logo')}>
                        <div className={cx('logo-icon')}>
                            <img id="logo" alt="" src={logo} />
                        </div>
                        <h2 className={cx('logo-name')}>GreenGrow</h2>
                    </a>
                </div>

                {/* Hamburger */}
                <div className={cx('menu-icon')} onClick={handleShowNavbar}>
                    <img style={{ width: '30px' }} alt="" src={logo} />
                </div>

                {/* // ${showNavbar && }` */}
                <div className={cx('itemContainer', 'active')}>
                    <ul className={cx('itemList')}>
                        <li className={cx('item')}>
                            <a href="#aboutUs">About us</a>
                        </li>
                        <li className={cx('item')}>
                            <a href="#achievements">Achievements</a>
                        </li>
                        <li className={cx('item')}>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className={cx('item')}>
                            <a href="#form">Donate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navigate;
