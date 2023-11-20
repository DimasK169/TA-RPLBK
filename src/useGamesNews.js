import { useContext } from "react";
import { GamesNewsContext } from "./context/GamesNewsContext";

export const useGamesNews = () => {
    const context = useContext(GamesNewsContext);
    if (!context) {
        throw new Error("Context Error");
    }
    return context;
};