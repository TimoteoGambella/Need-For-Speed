import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseApiContext } from '../context/ApiContext';
import Navbar from '../components/Navbar';
import GameOpened from '../components/GameOpened';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import GameContentContainer from '../components/GameContentContainer';

const GameDetail = () => {
    const { gameById } = useContext(UseApiContext);
    const [game, setGame] = useState([]);
    const { idGame } = useParams();

    useEffect(() => {
        gameById(idGame).then((game) => setGame(game));
    }, []);

    return (
        <>
            <Navbar />
            <GameOpened gameSelected={game} />
            <Carousel />
            <GameContentContainer game={game} />
            <Footer />
        </>
    );
};

export default GameDetail;
