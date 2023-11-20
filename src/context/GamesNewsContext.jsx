import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const BASE_API_URL = `http://localhost:3001/api/games?page=1`;

export const GamesNewsContext = createContext({});

export const GamesNewsProvider = ({ children }) => {
    const [gamesNews, setGamesNews] = useState([]);
    const [loading, setLoading] = useState(true);
    

async function getGamesNews(){
    try {
        const res = await axios.get(BASE_API_URL)
        setGamesNews(res.data)
        setLoading(false)
    } catch (error){
        console.error(error);
    }
}
    useEffect(() => {
        getGamesNews()
    }, []);

    const value = { gamesNews }
    console.log(gamesNews)

    return !loading ? (
        <GamesNewsContext.Provider value={value}>
            {children}
        </GamesNewsContext.Provider>
    ): <p>loading</p>
};
