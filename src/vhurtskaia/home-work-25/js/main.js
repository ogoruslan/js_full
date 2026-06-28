import {
  createDomElement,
  setUserInfoCookie,
  saveUserInfo,
  getUserInfo
} from "./scripts.js";

const container = document.getElementById("container");

document
  .getElementById("createElementBtn")
  .addEventListener("click", () => {
    createDomElement(
      "p",
      "Новий елемент успішно створено!",
      container
    );
  });

document
  .getElementById("saveCookieBtn")
  .addEventListener("click", () => {
    const key = document.getElementById("cookieKey").value;
    const value = document.getElementById("cookieValue").value;

    setUserInfoCookie(key, value);

    alert("Cookie збережено на 10 секунд.");
  });

document
  .getElementById("saveStorageBtn")
  .addEventListener("click", () => {
    const key = document.getElementById("storageKey").value;
    const value = document.getElementById("storageValue").value;

    saveUserInfo(key, value);
  });

document
  .getElementById("getStorageBtn")
  .addEventListener("click", () => {
    const key = document.getElementById("storageKey").value;

    const value = getUserInfo(key);

    document.getElementById(
      "storageResult"
    ).textContent = `Значення: ${value}`;
  });