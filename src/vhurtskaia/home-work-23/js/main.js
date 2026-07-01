import {
  CalorieCalculator,
  UniqueUsernames,
} from "./scripts.js";

const calorieCalculator = new CalorieCalculator();
const uniqueUsers = new UniqueUsernames();

const productName = document.getElementById("productName");
const calories = document.getElementById("calories");

const calorieResult = document.getElementById("calorieResult");

document
  .getElementById("addProduct")
  .addEventListener("click", () => {
    calorieCalculator.addProduct(
      productName.value,
      Number(calories.value)
    );

    calorieResult.textContent = "Продукт додано";
  });

document
  .getElementById("getCalories")
  .addEventListener("click", () => {
    calorieResult.textContent =
      calorieCalculator.getProductCalories(productName.value);
  });

document
  .getElementById("removeProduct")
  .addEventListener("click", () => {
    calorieCalculator.removeProduct(productName.value);

    calorieResult.textContent = "Продукт видалено";
  });

const username = document.getElementById("username");
const userResult = document.getElementById("userResult");

document
  .getElementById("addUser")
  .addEventListener("click", () => {
    uniqueUsers.addUser(username.value);

    userResult.textContent =
      "Кількість користувачів: " + uniqueUsers.count();
  });

document
  .getElementById("checkUser")
  .addEventListener("click", () => {
    userResult.textContent =
      uniqueUsers.exists(username.value);
  });

document
  .getElementById("countUsers")
  .addEventListener("click", () => {
    userResult.textContent =
      uniqueUsers.count();
  });