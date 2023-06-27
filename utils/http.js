import axios from "axios";

export const getMeals = async () => {
    axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        .then((response) => {
            console.log(response);
        });
};
