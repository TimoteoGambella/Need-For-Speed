import { useContext, useEffect, useState } from 'react';
import { UseApiContext } from '../context/ApiContext';
import Game from './Game';

const GamesList = () => {
    const { allGamesInOrder } = useContext(UseApiContext);
    const [games, setGames] = useState([]);

    useEffect(() => {
        allGamesInOrder().then((games) => setGames(games));
    }, []);

    return (
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
    );
};

export default GamesList;
