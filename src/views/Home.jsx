import Banner from '../components/Banner';
import GamesList from '../components/GamesList';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <section className="home-container">
            <Banner />
            <GamesList />
            <Footer />
        </section>
    );
};

export default Home;
