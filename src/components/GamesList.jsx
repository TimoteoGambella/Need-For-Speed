import { useContext, useEffect, useState } from 'react';
import { Oval } from 'react-loading-icons';
import { motion } from 'framer-motion';
import { UseApiContext } from '../context/ApiContext';
import Game from './Game';
import GameOpened from '../components/GameOpened';

const GamesList = ({ gameId, setGameId }) => {
    const { allGamesInOrder, loading, setLoading } = useContext(UseApiContext);
    const [games, setGames] = useState([]);

    useEffect(() => {
        !loading && setLoading(true);
        allGamesInOrder()
            .then((games) => setGames(games))
            .catch((err) => console.log(err))
            .finally(
                setTimeout(() => {
                    setLoading(false);
                }, 800)
            );
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {loading ? (
                <motion.div
                    className="wheelLoader d-flex-center"
                    initial={{ opacity: 0, x: -800 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Oval width={7} strokeWidth={700} />
                </motion.div>
            ) : (
                <div>
                    <motion.div
                        className="header-text d-flex-column d-flex-center"
                        id="headerText"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3>LLEVA TU VELOCIDAD AL LIMITE</h3>
                        <p>
                            Pisa el acelerador y destroza las carreteras en esta serie legendaria de
                            acción y conducción. Lleva al límite a tu supercoche y haz que tus rivales
                            muerdan el polvo o líbrate de la poli en una persecución policial a gran
                            escala. Todo está en tus manos. Retoma la persecución en Need for Speed Hot
                            Pursuit Remastered, no pares por el día y arriésgalo todo por la noche en
                            Need for Speed Heat o ve a toda velocidad en otro juego de Need for Speed.
                        </p>
                    </motion.div>
                    {games.map((game) => (
                        <>
                            {gameId === game.id && (
                                <GameOpened gameSelected={game} setGameId={setGameId} />
                            )}
                        </>
                    ))}
                    <section className="gamesList d-flex-center">
                        {games.map((game) => (
                            <>
                                {gameId !== game.id && (
                                    <Game
                                        key={game.id}
                                        id={game.id}
                                        bannerImg={game['banner-img']}
                                        mainImg={game['main-img']}
                                        gameName={game['game-name']}
                                        setIdGame={setGameId}
                                    />
                                )}
                            </>
                        ))}
                    </section>
                </div>
            )}
        </>
    );
};

export default GamesList;
