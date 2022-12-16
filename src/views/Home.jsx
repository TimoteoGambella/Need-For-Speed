import { useContext, useEffect } from 'react';
import { UseApiContext } from '../context/ApiContext';
import Banner from '../components/Banner/Banner';

const Home = () => {
    // const {allGames, allGamesInOrder, gameById, carousel}=useContext(UseApiContext)

    // // LLAMADO DE TODOS LOS GAMES
    // useEffect(() => {
    //     allGames().then((res)=>{
    //         console.log("all games", res)
    //     })
    // }, []);

    // // LLAMADO DE TODOS LOS GAMES POR ORDEN
    // useEffect(() => {
    //     allGamesInOrder().then((res)=>{
    //         console.log("all games in order", res)
    //     })
    // }, []);

    // // LLAMADO DE UN GAME POR ID
    // useEffect(() => {
    //     gameById("R74Y8ExxIeTfSEjOnCiy").then((res)=>{
    //         console.log("game by id", res)
    //     })
    // }, []);

    // // LLAMADO DEL CAROUSEL
    // useEffect(() => {
    //     carousel().then((res)=>{
    //         console.log("carousel", res)
    //     })
    // }, []);

    return (
        <section className="home-container">
            <Banner />
        </section>
    );
};

export default Home;
