import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loading-icons';
import { motion } from 'framer-motion';
import { UseApiContext } from '../context/ApiContext';
import Navbar from '../components/Navbar';
import GameOpened from '../components/GameOpened';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import GameContentContainer from '../components/GameContentContainer';

const GameDetail = () => {
    const { gameById, loading, setLoading } = useContext(UseApiContext);
    const [game, setGame] = useState([]);
    const { idGame } = useParams();

    useEffect(() => {
        !loading && setLoading(true);
        gameById(idGame)
            .then((game) => setGame(game))
            .catch((err) => console.log(err))
            .finally(
                setTimeout(() => {
                    setLoading(false);
                }, 800)
            );
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.25 }}
        >
            <Navbar />
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
                <>
                    <GameOpened gameSelected={game} gameDetailPage={true} />
                    <Carousel />
                    <GameContentContainer game={game} />
                    <Footer />
                </>
            )}
        </motion.div>
    );
};

export default GameDetail;
