import { motion } from 'framer-motion';

const Game = ({ id, bannerImg, mainImg, gameName, setIdGame }) => {
    const handleScroll = () => {
        const section = document.querySelector('#headerText');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <motion.div
            className="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="game-name d-flex-center">
                <h2>{gameName}</h2>
            </div>
            <img className="game-bannerImg" src={bannerImg} alt={gameName} />
            <img className="game-mainImg" src={mainImg} alt={gameName} />
            <button
                onClick={() => {
                    setIdGame(id);
                    setTimeout(()=>handleScroll(), 0);
                    //handleScroll();
                }}
                className="gray-button"
            >
                Comprar
            </button>
        </motion.div>
    );
};

export default Game;
