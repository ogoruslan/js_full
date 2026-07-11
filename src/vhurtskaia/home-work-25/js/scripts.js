function createDomElement(tagName, textContent, container) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  container.appendChild(element);

  return element;
}

function setUserInfoCookie(key, value) {
  const expires = new Date(Date.now() + 10000).toUTCString();
  const cookieValue = encodeURIComponent(`${key}=${value}`);

  document.cookie = `userInfo=${cookieValue}; expires=${expires}; path=/`;

  console.log("User info cookie has been saved.");
}

function saveUserInfo(key, value) {
  sessionStorage.setItem(key, value);
  console.log(`Saved ${key}: ${value}`);
}

function getUserInfo(key) {
  const value = sessionStorage.getItem(key);
  console.log(`Retrieved ${key}: ${value}`);

  return value;
}

const container = document.body;

createDomElement(
  "p",
  "This paragraph has been added to the specified container.",
  container
);

setUserInfoCookie("language", "en");

saveUserInfo("username", "JohnDoe");
console.log(getUserInfo("username"));

export {
  createDomElement,
  setUserInfoCookie,
  saveUserInfo,
  getUserInfo,
};