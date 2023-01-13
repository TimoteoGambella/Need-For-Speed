import nfsLogo from '../assets/logo-2-black.png';
import twitter from '../assets/logo-twitter.png';
import facebook from '../assets/logo-facebook.png';
import instagram from '../assets/logo-instagram.png';
import youtube from '../assets/logo-youtube.png';
import eaLogo from '../assets/logo-ea-color.png';

const Footer = () => {
    const workTeam = [
        {
            id: '1',
            name: 'Valentino Lorenti',
            rol: 'UX / UI Designer',
            linkedin: '#',
            color: '#818C86',
        },
        {
            id: '2',
            name: 'Timoteo Gambella',
            rol: 'Developer',
            linkedin: '#',
            color: '#62A368',
        },
        {
            id: '3',
            name: 'Gaston Avogadro',
            rol: 'Developer',
            linkedin: '#',
            color: '#AD3F3F',
        },
    ];
    return (
        <footer className="footerContainer">
            <div className="footerTop">
                <div className="footerBrand d-flex-center">
                    <img src={nfsLogo} alt="Need For Speed"></img>
                </div>
                <div className="footerLine d-flex-center">
                    <div></div>
                </div>
                <div className="footerButtons d-flex-center">
                    <button className="red-button">Inicio</button>
                    <button className="red-button">Foros</button>
                    <button className="red-button">Comprar Ya</button>
                </div>
            </div>
            <div className="footerMiddle">
                <div className="footerMiddle-blur d-flex-center d-flex-column">
                    <div className="d-flex-center">
                        <p>MAS SOBRE NEED FOR SPEED</p>
                    </div>
                    <div className="socialMedia d-flex-center">
                        <ul className="d-flex-center">
                            <li>
                                <img src={twitter} alt="twitter"></img>
                            </li>
                            <li>
                                <img src={facebook} alt="facebook"></img>
                            </li>
                            <li>
                                <img src={instagram} alt="instagram"></img>
                            </li>
                            <li>
                                <img src={youtube} alt="youtube"></img>
                            </li>
                        </ul>
                    </div>
                    <div className="footerMenu d-flex-center">
                        <p>Explorar Juegos</p>
                        <p>Ultimas Noticias</p>
                        <p>Centro de Ayuda</p>
                    </div>
                    <div className="footerLegals d-flex-center">
                        <img src={eaLogo} alt="EA logo"></img>
                        <p>Privacidad y avisos legales</p>
                        <p>Servicios Online</p>
                        <p>Acuerdo de usuario</p>
                        <p>Política de privacidad y directiva de cookies</p>
                    </div>
                    <div className="footerCopyright">
                        <span>© 2022 Electronic Arts Inc.</span>
                    </div>
                </div>
            </div>
            <div className="footerBottom d-flex-center">
                <div className="workTeamContainer d-flex-center d-flex-column">
                    <div className="d-flex-center">
                        <h4>Work Team</h4>
                    </div>
                    <div className="footerLine d-flex-center">
                        <div></div>
                    </div>
                    <div className="workTeam d-flex-center">
                        {workTeam.map((person) => (
                            <div className="collaborator d-flex-center d-flex-column" key={person.id}>
                                <div
                                    className="collaborator-logo"
                                    style={{ background: `${person.color}` }}
                                ></div>
                                <div className="collaborator-info">
                                    <h3>{person.name}</h3>
                                    <p>{person.rol}</p>
                                </div>
                                <a href={person.linkedin} className="collaborator-linkedin d-flex-center">
                                    <p>Linkedin Profile</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
