console.log('#11. JavaScript homework example file')

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

function isValidEmail() {
  let email = document.getElementById('email')
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (emailPattern.test(email.value)) {
    uiSuccess(email)
  } else {
    uiError(email)
  }
}

// console.log(isValidEmail('example@example.com')) // Повинно вивести: true
// console.log(isValidEmail('invalid-email'))       // Повинно вивести: false

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

/*

*/

function isValidUrl() {
  let url = document.getElementById('url')
  const urlPattern = /^(https?):\/\/([^:/]+)(?::(\d+))?([^?#]*)(\?[^#]*)?(#.*)?$/
  if (urlPattern.test(url.value)) {
    uiSuccess(url)
  } else {
    uiError(url)
  }
}

// console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
// console.log(isValidUrl('invalid-url'))             // Повинно вивести: false

function restoreUi() {
  let input = document.querySelector('input')
  input.classList.remove('success-input')
  input.classList.remove('error-input')
  let errorMessage = document.querySelector('#error-message')
  if (errorMessage) {
    errorMessage.remove()
  }
}

function uiError(inputElement) {
  spanElement = document.querySelector('#error-message')
  if (spanElement) {
    spanElement.remove()
  }
  let errorMessage = document.createElement('span')
  errorMessage.id = 'error-message'
  errorMessage.textContent = 'Wrong input. Try again'
  inputElement.insertAdjacentElement('afterEnd', errorMessage)
  inputElement.classList.add('error-input')
}

function uiSuccess(inputElement) {
  inputElement.classList.add('success-input')
}

// Експорт функції для використання та тестування
// export { isValidEmail, isValidUrl }
