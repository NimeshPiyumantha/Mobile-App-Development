import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  // const categoryId = route.params.categoryId;
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return (
      //  <MealItem title={itemData.item.title}/>
      <MealItem {...mealItemProps} /> //meka props vidihata pass karanava spred
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
