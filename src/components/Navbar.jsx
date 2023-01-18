import { Link } from 'react-router-dom';
import logo1 from '../assets/logo-1.png';
import logo2 from '../assets/logo-2.png';

const Navbar = () => {
    return (
        <header>
            <Link to={'/'}>
                <div className="brand-logo d-flex-center">
                    <img className="logo-1" src={logo1}></img>
                    <img className="logo-2" src={logo2}></img>
                </div>
            </Link>
            <ul className="d-flex-center">
                <li className="d-flex-center">
                    <p>Acerca De</p>
                </li>
                <li className="d-flex-center">
                    <p>Requisitos para PC</p>
                </li>
                <li className="d-flex-center">
                    <p>Multimedia</p>
                </li>
                <li className="d-flex-center">
                    <p>Novedades</p>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
