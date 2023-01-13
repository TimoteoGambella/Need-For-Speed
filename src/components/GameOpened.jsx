import { Link, useLocation } from 'react-router-dom';
import arrowUp from '../assets/arrow-up.png';
import logoXbox from '../assets/button-xbox.png';
import logoEa from '../assets/logo-ea.png';
import logoPs from '../assets/button-ps.png';
import logoSwitch from '../assets/button-switch.png';
import logoSteam from '../assets/button-steam.png';
import logoStellar from '../assets/logo-stellar.png';
import logoCriterion from '../assets/logo-criterion.png';
import logoEsrb from '../assets/logo-esrb.png';

const GameOpened = ({ gameSelected, gameDetailPage, setIdGame }) => {
    const location = useLocation();

    return (
        <section className="gameOpened d-flex-center d-flex-column">
            <div className="gameSelected d-flex-center">
                <div className="d-flex-center d-flex-column">
                    <p>Compra Need for Speed™</p>
                    <h2>{gameSelected['game-name']}</h2>
                    <p>Selecciona una plataforma</p>
                    <span></span>
                </div>
                <div className="game">
                    <div className="game-name d-flex-center">
                        <h2>{gameSelected['game-name']}</h2>
                    </div>
                    <img
                        className="game-bannerImg"
                        src={gameSelected['banner-img']}
                        alt={gameSelected['game-name']}
                    />
                    <img
                        className="game-mainImg"
                        src={gameSelected['main-img']}
                        alt={gameSelected['game-name']}
                    />
                    <button className="gray-button" onClick={()=>setIdGame("")}>
                        <div className="d-flex-center">
                            <img src={arrowUp}></img>
                            <p>Comprar</p>
                            <img src={arrowUp}></img>
                        </div>
                    </button>
                </div>
            </div>
            {gameDetailPage===undefined && (
                <div className="gameSelectedPlatforms">
                    <div className="gameSelectedPlatforms-blur d-flex-center d-flex-column">
                        <ul className="d-flex-center">
                            <li className="d-flex-center">
                                <Link to={`/gameDetail/${gameSelected.id}`}>
                                    <img src={logoXbox} alt={logoXbox} />
                                </Link>
                            </li>
                            <li className="d-flex-center">
                                <Link to={`/gameDetail/${gameSelected.id}`}>
                                    <img src={logoEa} alt={logoEa} />
                                </Link>
                            </li>
                            <li className="d-flex-center">
                                <Link to={`/gameDetail/${gameSelected.id}`}>
                                    <img src={logoPs} alt={logoPs} />
                                </Link>
                            </li>
                            <li className="d-flex-center">
                                <Link to={`/gameDetail/${gameSelected.id}`}>
                                    <img src={logoSwitch} alt={logoSwitch} />
                                </Link>
                            </li>
                            <li className="d-flex-center">
                                <Link to={`/gameDetail/${gameSelected.id}`}>
                                    <img src={logoSteam} alt={logoSteam} />
                                </Link>
                            </li>
                        </ul>
                        <div className="eaPlay d-flex-center">
                            <p>SE INCLUYE CON EA PLAY</p>
                            <button className="red-button">Unete ya</button>
                        </div>
                        <div className="gameSelectedButtons d-flex-center">
                            <button className="black-button">Acerca De</button>
                            <button className="black-button">Requisitos para PC</button>
                            <button className="black-button">Multimedia</button>
                            <button className="black-button">Novedades</button>
                        </div>
                        <div className="gameSelectedFooter">
                            <div className="d-flex-center">
                                <img src={logoStellar} alt={logoStellar} />
                                <img src={logoCriterion} alt={logoCriterion} />
                            </div>
                            <div className="esrbSection d-flex-center">
                                <div className="d-flex-center">
                                    <img src={logoEsrb} alt={logoEsrb}></img>
                                </div>
                                <div className="d-flex-center d-flex-column">
                                    <p>Violencia moderada, Letras moderadas</p>
                                    <span></span>
                                    <p>Interacción de usuarios</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GameOpened;
