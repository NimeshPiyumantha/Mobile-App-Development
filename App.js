import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from './store/redux/store'

import CategoryScreen from "./screens/CategoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoriteContextProvider from "./store/context/favorite-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//start drawer navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
        drawerInactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ size, color }) => {
            return <Ionicons name="ios-star-sharp" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};
//end drawer navigator

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <Provider store={store}>
        {/* <FavoriteContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Meals Categories"
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold" },
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            {/* default ganna screen eka thamai udinma thina eka, nattam apita initialRouteName kiyala default ganna ona eka dennath puluvan*/}
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={{ title: "Meals Overview" }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={
                {
                  // title: "Meal Details",
                  // headerRight: () => (
                  //   <Button title="Tap Me!" />
                  // ),
                }
              }
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoriteContextProvider> */}
      </Provider>
    </>
  );
}
