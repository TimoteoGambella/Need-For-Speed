import { useState } from 'react';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import GamesList from '../components/GamesList';
import Footer from '../components/Footer';

const Home = () => {
    const [gameId, setGameId] = useState('');

    return (
        <motion.section
            className="home-container"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.25 }}
        >
            <Banner setGameId={setGameId} />
            <GamesList gameId={gameId} setGameId={setGameId} />
            <Footer gameId={gameId} setGameId={setGameId} />
        </motion.section>
    );
};

export default Home;
