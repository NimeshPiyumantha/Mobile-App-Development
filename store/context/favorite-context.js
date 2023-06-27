// Context Api එකෙන් කරන්නේ App එකේ තියෙන State Manage කරන එක.
// Redux කියන්නේ new technolgy එකක් State Manage කරන්න තියෙන.
import React, { createContext, useState } from "react";

export const FavoriteContext = createContext({//initial state
  ids: [],
  addFavorite: (id) => {}, 
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => { 
    setFavoriteMealIds((currentIds) => [...currentIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((currentIds) => {
      return currentIds.filter((mealId) => mealId !== id);
    });
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
