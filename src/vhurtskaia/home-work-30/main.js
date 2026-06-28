function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

function isValidUrl(url) {
  const urlRegex =
    /^(https?:\/\/)(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?#].*)?$/;

  return urlRegex.test(url);
}

const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const emailResult = document.getElementById("emailResult");

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (isValidEmail(email)) {
    emailResult.textContent = "Email valid";
  } else {
    emailResult.textContent = "Email invalid";
  }
});

const urlForm = document.getElementById("urlForm");
const urlInput = document.getElementById("urlInput");
const urlResult = document.getElementById("urlResult");

urlForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const url = urlInput.value.trim();

  if (isValidUrl(url)) {
    urlResult.textContent = "URL valid";
  } else {
    urlResult.textContent = "URL invalid";
  }
});

console.log(isValidEmail("example@example.com"));
console.log(isValidEmail("invalid-email"));

console.log(isValidUrl("https://www.example.com"));
console.log(isValidUrl("invalid-url"));