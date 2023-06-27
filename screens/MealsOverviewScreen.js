import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  // const categoryId = route.params.categoryId;
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );
  return (
    <MealsList items={displayMeals} />
  );
};

export default MealsOverviewScreen;
