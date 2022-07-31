import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const AppContext = createContext();

const useAppContext = () => useContext(AppContext);

const initialState = {
  favorites: [],
  favoriteToggle: false,
  source: "all",
  activeArticle: {},
};

const AppProvider = ({ children }) => {
  const [{ favorites, favoriteToggle, source, activeArticle }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    const cachedFavorites = localStorage.getItem("favorites");
    if (cachedFavorites !== null) {
      dispatch({
        type: "SET_FAVORITES",
        payload: { favorites: JSON.parse(cachedFavorites).favorites },
      });
    }
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify({ favorites }));
    }
  }, [favorites]);

  return (
    <AppContext.Provider
      value={{ favorites, favoriteToggle, source, activeArticle, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
