import { createContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, query, collection, orderBy, getDoc, doc } from 'firebase/firestore';

export const UseApiContext = createContext();

export const ApiContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [scroll, setScroll] = useState(false);

    const firebaseConfig = {
        apiKey: '',
        authDomain: 'needforspeed-179f5.firebaseapp.com',
        databaseURL: 'https://needforspeed-179f5-default-rtdb.firebaseio.com',
        projectId: 'needforspeed-179f5',
        storageBucket: 'needforspeed-179f5.appspot.com',
        messagingSenderId: '226480081846',
        appId: '1:226480081846:web:6612ff7bf3a29ed1158f17',
        measurementId: 'G-FXY12XRKVN',
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const allGamesInOrder = async () => {
        // REVISAR EN LA DOCUMENTACION DE FIREBASE COMO LLAMAR DOCUMENTOS POR ORDEN DE UN PARAMETRO.
        const gamesNFS = await getDocs(query(collection(db, 'GamesNFS'), orderBy('number-game')));
        const games = gamesNFS.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return games;
    };

    const gameById = async (id) => {
        // REVISAR EN LA DOCUMENTACION DE FIREBASE COMO LLAMAR UN DOCUMENTO POR ID.
        const gameRef = await getDoc(doc(db, 'GamesNFS', id));
        return gameRef.data();
    };

    const carousel = async () => {
        // GENERAR EL LLAMADO A LA COLECCION "Carousel" de FIREBASE.
        const carouselImages = await getDocs(query(collection(db, 'Carousel')));
        const carouselData = carouselImages.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return carouselData;
    };

    return (
        <UseApiContext.Provider
            value={{ loading, setLoading, scroll, setScroll, allGamesInOrder, gameById, carousel }}
        >
            {children}
        </UseApiContext.Provider>
    );
};
