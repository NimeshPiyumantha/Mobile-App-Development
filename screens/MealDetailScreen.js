import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //dummy data valin meal eka gannava

  return (
  <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <View>
        <MealDetail
          textStyle={styles.detailText}
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailText: {
    color:'white'
  },
});

export default MealDetailScreen;
