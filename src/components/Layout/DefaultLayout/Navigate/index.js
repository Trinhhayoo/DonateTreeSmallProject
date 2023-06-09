import { useEffect } from 'react';
import { useState } from 'react';
import './Navigate.css';
import logo from '../../../../svg/2xlogo.svg';

function Navigate() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbarItems">
            <div className="container">
                <div className="logo">
                    <a href="#header">
                        <img id="logo" src={logo} />
                        <> </>GreenGrow
                    </a>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <img style={{ width: '30px' }} src={logo} />
                </div>
                <div className={`itemContainer  ${showNavbar && 'active'}`}>
                    <ul className="itemList">
                        <li className="item">
                            <a href="#aboutUs">About us</a>
                        </li>
                        <li className="item">
                            <a href="#achievements">Achievements</a>
                        </li>
                        <li className="item">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="item">
                            <a href="#form">Donate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navigate;
