function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateUrl(url) {
  if (!/https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  const urlPattern = /^(https?:\/\/)?([a-zа-яё0-9-]+\.)+[a-zа-яё]{2,}(\/.*)?$/i;

  try {
    if (urlPattern.test(url)) {
      new URL(url);
      return true;
    }
  } catch (e) {
    return false;
  }
}

document.getElementById("validateEmail").addEventListener("click", function () {
  const emailInput = document.getElementById("email").value.trim();
  const emailResult = document.getElementById("emailResult");

  if (validateEmail(emailInput)) {
    emailResult.textContent = "Електронна адреса є валідною.";
    emailResult.style.color = "green";
  } else {
    emailResult.textContent = "Електронна адреса є невалідною.";
    emailResult.style.color = "red";
  }
});

document.getElementById("validateURL").addEventListener("click", function () {
  const urlInput = document.getElementById("url").value.trim();
  const urlResult = document.getElementById("urlResult");

  if (validateUrl(urlInput)) {
    urlResult.textContent = "URL є валідним.";
    urlResult.style.color = "green";
  } else {
    urlResult.textContent = "URL є невалідним.";
    urlResult.style.color = "red";
  }
});
