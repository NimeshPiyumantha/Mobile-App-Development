import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import { useContext, useLayoutEffect } from "react";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/iconButton";
import { FavoriteContext } from "../store/context/favorite-context";

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoriteContext); //use context hook eka call karala Favorite context eka use karanna puluwan

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //dummy data valin meal eka gannava

  const isFavorite = favoriteMealsCtx.ids.includes(mealId); //favorite meal eka thiyenavada kiyala check karanna puluwan

  const changeFavoritesStatusHandler = () => {
    if (isFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoritesStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoritesStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetail
          textStyle={styles.detailText}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});

export default MealDetailScreen;
