import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from 'react-redux'

import MealsList from "../components/MealList/MealsList";

const FavoritesScreen = (props) => {
//   const favoriteMealsCtx = useContext(FavoriteContext); //using context api

const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids) //redux eke state eka useSelector eken gannawa


//   const favoriteMeals = MEALS.filter((meal) =>
//     favoriteMealsCtx.ids.includes(meal.id)
//   );

  const favoriteMeals = MEALS.filter((meal) =>
  favoriteMealsIds.includes(meal.id)
);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color:'white'
    },
});

export default FavoritesScreen;
