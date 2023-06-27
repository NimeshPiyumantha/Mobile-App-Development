import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { getMeals } from "../utils/http";

const CategoryScreen = () => {
  const navigation = useNavigation(); //use navigation hook eken thamai navigate method eka call karanne.

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id }); //navigate method ekata passed karanava navigate karanna ona screen eka saha pass karanna ona data tika object ekak vidihata
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
