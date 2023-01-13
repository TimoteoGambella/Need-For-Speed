import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseApiContext } from '../context/ApiContext';
import Game from './Game';
import GameOpened from '../components/GameOpened';

const GamesList = () => {
    const { allGamesInOrder } = useContext(UseApiContext);
    const [games, setGames] = useState([]);
    const [gameSelected, setGameSelected] = useState([]);
    const { idGame } = useParams();

    useEffect(() => {
        if (idGame) {
            allGamesInOrder().then((games) => {
                const list = games.filter((game) => game.id !== idGame);
                const game = games.find((game) => game.id === idGame);
                setGames(list);
                setGameSelected(game);
            });
        } else {
            allGamesInOrder().then((games) => setGames(games));
        }
    }, [idGame]);

    return (
        <>  
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
            {idGame && <GameOpened gameSelected={gameSelected}/>}
            <section className="gamesList d-flex-center">
                {games.map((game) => (
                    <Game
                        key={game.id}
                        id={game.id}
                        bannerImg={game['banner-img']}
                        mainImg={game['main-img']}
                        gameName={game['game-name']}
                    />
                ))}
            </section>
        </>
    );
};

export default GamesList;
