import { createContext} from "react";

export const UseApiContext = createContext();

export const ApiContext = ({children}) => {

    const keyApiMarvel = "ae8aa38451b4cc9abc698da16728d4fe"

    // LLAMADO A MARVEL API
    const apiFetch1=async(url)=>{
      await fetch(
          `${url}`
        )
          .then((response) => response.json())
          .then((data) => {
            return(data)
          })
          .catch((error) => {
            console.log(error);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
    }

    // // LLAMADO A SUPERHERO API
    // const apiFetch2=async(name)=>{
    //   await fetch(
    //       `https://superheroapi.com/api/5651474918252451/${name}`
    //     )
    //       .then((response) => response.json())
    //       .then((data) => {
    //         return(data)
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    //       .catch((error) => {
    //         console.error("Error:", error);
    //       });
    // }

    return(
        <UseApiContext.Provider value={{apiFetch1,keyApiMarvel}}>
            {children}
        </UseApiContext.Provider>
    )
}
