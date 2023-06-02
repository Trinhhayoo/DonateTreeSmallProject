import {useEffect} from 'react';
import './Navigate.css';
import logo from '../../../../svg/2xlogo.svg';

function Navigate() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <nav className="navbarItems">
            <ul>
                <li>
                    <a onClick={() => {
          window.scrollTo({top: 1400, behavior: 'smooth'});
        }}
                    >Donate</a>
                </li>
                <li>
                    <a onClick={() => {
          window.scrollTo({top: 3500, behavior: 'smooth'});
        }}
                    >
                        Projects</a>
                </li>
                <li>
                    <a onClick={() => {
          window.scrollTo({top: 2800, behavior: 'smooth'});
        }}
                    >Achievements</a>
                </li>
                <li>
                    <a onClick={() => {
          window.scrollTo({top: 850, behavior: 'smooth'});
        }}
                    >About us</a>
                </li>
                <li style={{ float: 'left' }}>
                    <a>
                        <img id="logo" src={logo} />
                        <> </>GreenGrow
                    </a>
                </li>
            </ul>
        </nav>
    );
}
export default Navigate;
