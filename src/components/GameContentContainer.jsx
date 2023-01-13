import GameContent from './GameContent';
import img1 from '../assets/foto-detail-1.png';
import img2 from '../assets/foto-detail-2.png';
import img3 from '../assets/foto-detail-3.png';

const GameContentContainer = ({ game }) => {
    return (
        <section className="gameContentContainer">
            {console.log(game)}
            <div className="gameContentHeader d-flex-center d-flex-column">
                <h4>{game['sub-header-title']}</h4>
                <p>{game['sub-header-description']}</p>
            </div>
            <article className="gameContentArticle">
                <GameContent title={game['title-text-1']} text={game['description-text-1']} img={img1} />
                <GameContent title={game['title-text-2']} text={game['description-text-2']} img={img2} />
                <GameContent title={game['title-text-3']} text={game['description-text-3']} img={img1} imgNone={true}/>
                <GameContent title={game['title-text-4']} text={game['description-text-4']} img={img3} />
                <div className="gameContentFooter d-flex-center d-flex-column">
                    <h4>{game['sub-footer-title']}</h4>
                    <p>{game['sub-footer-description']}</p>
                </div>
                <div className="eaPlay d-flex-center">
                    <p>SE INCLUYE CON EA PLAY</p>
                    <button className="red-button">Unete ya</button>
                </div>
            </article>
        </section>
    );
};

export default GameContentContainer;
