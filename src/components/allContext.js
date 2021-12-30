import React, {useState, createContext} from 'react';

export const FavContext = createContext();

export const FavdataProvider = (props) =>{
    const [favmovie, setFavMovies] = useState([{}]);
    return (
        <FavContext.Provider value={[favmovie, setFavMovies]}>
            {props.children}
        </FavContext.Provider>
    )
}