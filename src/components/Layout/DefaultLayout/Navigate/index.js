import './Navigate.css';
import logo from '../../../../svg/2xlogo.svg';

function Navigate() {
    return (
        <nav className="navbarItems">
            <ul>
                <li>
                    <a>Donate</a>
                </li>
                <li>
                    <a>Projects</a>
                </li>
                <li>
                    <a>Achievements</a>
                </li>
                <li>
                    <a href="#aboutUs">About us</a>
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
