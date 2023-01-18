import { Link } from 'react-router-dom';
import logo1 from '../assets/logo-1.png';
import logo2 from '../assets/logo-2.png';

const Banner = ({ setGameId }) => {
    return (
        <>
            <div className="banner-top d-flex-row">
                <Link
                    to={'./'}
                    onClick={() => {
                        setGameId('');
                    }}
                >
                    <div className="brand-logo d-flex-center">
                        <img className="logo-1" src={logo1}></img>
                        <img className="logo-2" src={logo2}></img>
                    </div>
                </Link>
                <button className="red-button">Más información</button>
                <button className="transparent-button">Comprar ya</button>
            </div>
        </>
    );
};

export default Banner;
