// function repeat(n, action) {
//     for (var i = 0; i < n; i++) {
//         action(i);
//     }
// }

// repeat(3, console.log); // Виводить 0, потім 1, потім 2

// function greaterThan(n) {
//     return function(m) {
//         return m > n;
//     };
// }

// var greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11)); // Виводить true

// var globalVar = "Я глобальна змінна";

// function testScope() {
//     console.log(globalVar); // Доступ до глобальної змінної зсередини функції
// }

// testScope(); // Виведе: "Я глобальна змінна"
// console.log(globalVar); // Доступ до глобальної змінної ззовні функції

// function testLocalScope() {
//     var localVar = "Я локальна змінна";
//     console.log(localVar); // Доступ до локальної змінної всередині функції
// }

// testLocalScope(); // Виведе: "Я локальна змінна"
// console.log(localVar); // Спроба доступу до локальної змінної ззовні функції видасть помилку

// if (true){
//     var localVar = "Я глобальна змінна";
// }
// console.log(localVar);


// var globalVar = 'глобальна';

// function outerFunction() {
//     var outerVar = 'зовнішня';

//     function innerFunction() {
//         var innerVar = 'внутрішня';

//         console.log(innerVar); // Виводить: 'внутрішня'
//         console.log(outerVar); // Виводить: 'зовнішня'
//         console.log(globalVar); // Виводить: 'глобальна'
//     }

//     innerFunction();
// }

// outerFunction();

// ////////////
// function createCounter() {
//     var count = 0; // Приватна змінна, доступна лише всередині createCounter

//     return function() {
//         count += 1; // Модифікуємо і повертаємо змінну count
//         return count;
//     };
// }

// var counter = createCounter(); // Створюємо екземпляр замикання

// console.log(counter()); // Виведе: 1
// console.log(counter()); // Виведе: 2
// console.log(counter()); // Виведе: 3

// let innerVar = 'внутрішня';
// if (true){
//     let outerVar = 'зовнішня';
//     outerVar = 'змінена зовнішня'; // Спроба змінити константну змінну видасть помилку

//     if (true) {
//         let innerVar = 'внутрішня';

//         console.log(innerVar); // Виводить: 'внутрішня'
//         console.log(outerVar); // Виводить: 'зовнішня'
//         console.log(globalVar); // Виводить: 'глобальна'
//     }

// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i); // Виведе: 0, 1, 2
//     }, 1000);
//   }


// // camelCase для локальних констант або змінних об'єктів
// const config = {
//     apiKey: "ABC123",
// };

// // SNAKE_CASE для глобальних незмінних констант
// const MAX_USERS = 100;

// function checkUsers(users) {
//     if (users.length > MAX_USERS) {
//         console.log("Перевищено максимальну кількість користувачів");
//     }
// }

// console.log(config.apiKey); // Використання константи об'єкта
// checkUsers([1, 2, 3]); // Приклад використання глобальної константи

// config.apiKey = "XYZ789"; // Зміна властивості об'єкта, що є константою
// console.log(config.apiKey); // Виведе: "XYZ789"

// // config = {}; // Спроба змінити константну змінну видасть помилку

// function createMicrobrewery(name = 'Hipster Brew Co.') {
//   const breweryName = name || 'Hipster Brew Co.';
//   // ...
// }
// createMicrobrewery();


function factorial(n) {
    debugger;
  // Базовий випадок
  if (n === 0 || n === 1) {
    return 1;
  }
  // Рекурсивний випадок
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Виведе 120, оскільки 5! = 5 * 4 * 3 * 2 * 1 = 120