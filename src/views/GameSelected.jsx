import Banner from '../components/Banner';
import Footer from '../components/Footer';
import GamesList from '../components/GamesList';

const GameSelected = () => {
    return (
        <section>
            <Banner />
            <GamesList />
            <Footer />
        </section>
    );
};

export default GameSelected;
