import { createContext} from "react";
import { initializeApp } from "firebase/app";
import {getFirestore,getDocs, query, collection} from "firebase/firestore";

export const UseApiContext = createContext();

export const ApiContext = ({children}) => {

    const firebaseConfig = {
      apiKey: "AIzaSyBPKOLvCWALG_XUxqgUzeBMx4AhI3iZG5w",
      authDomain: "needforspeed-179f5.firebaseapp.com",
      databaseURL: "https://needforspeed-179f5-default-rtdb.firebaseio.com",
      projectId: "needforspeed-179f5",
      storageBucket: "needforspeed-179f5.appspot.com",
      messagingSenderId: "226480081846",
      appId: "1:226480081846:web:6612ff7bf3a29ed1158f17",
      measurementId: "G-FXY12XRKVN"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    

    const allGames=async()=>{

    // LLAMADA SIMPLE PARA OBTENER TODOS LOS GAMES DE LA BASE DE DATOS
      var gamesNFS = await getDocs(query(collection(db,"GamesNFS")));
      const games = gamesNFS.docs.map(doc=>{return{id:doc.id,...doc.data()}})
      return(games) 
    }

    const allGamesInOrder=async()=>{
      // REVISAR EN LA DOCUMENTACION DE FIREBASE COMO LLAMAR DOCUMENTOS POR ORDEN DE UN PARAMETRO.

      // var gamesNFS = await getDocs(query(collection(db,"GamesNFS")));
      // const games = gamesNFS.docs.map(doc=>{return{id:doc.id,...doc.data()}})
      // return(games) 
    }

    const gameById = async(id) => {
      // REVISAR EN LA DOCUMENTACION DE FIREBASE COMO LLAMAR UN DOCUMENTO POR ID.

      // const gameRef =  "...";
      // const game = await getDoc(gameRef);
      // return game.data();
    }

    const carousel = async(id) => {
      // GENERAR EL LLAMADO A LA COLECCION "Carousel" de FIREBASE.

      // var carouselImages = ;
      // const carouselData = 
      // return(carouselData) 
    }


    return(
        <UseApiContext.Provider value={{allGames,allGamesInOrder,gameById,carousel}}>
            {children}
        </UseApiContext.Provider>
    )
}
