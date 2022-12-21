import logo1 from '../assets/logo-1.png';
import logo2 from '../assets/logo-2.png';

const Header = () => {
    return (
        <>
            <div className="banner-top d-flex-row">
                <div className="brand-logo d-flex-center">
                    <img className="logo-1" src={logo1}></img>
                    <img className="logo-2" src={logo2}></img>
                </div>
                <button className="red-button">Más información</button>
                <button className="transparent-button">Comprar ya</button>
            </div>
            <div className="header-text d-flex-column d-flex-center">
                <h3>LLEVA TU VELOCIDAD AL LIMITE</h3>
                <p>
                    Pisa el acelerador y destroza las carreteras en esta serie legendaria de acción y
                    conducción. Lleva al límite a tu supercoche y haz que tus rivales muerdan el polvo o
                    líbrate de la poli en una persecución policial a gran escala. Todo está en tus manos.
                    Retoma la persecución en Need for Speed Hot Pursuit Remastered, no pares por el día y
                    arriésgalo todo por la noche en Need for Speed Heat o ve a toda velocidad en otro
                    juego de Need for Speed.
                </p>
            </div>
        </>
    );
};

export default Header;
