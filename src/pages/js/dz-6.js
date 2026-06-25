"use strict";
"use strict";
// //  Створення нового Map
// const fruitsCalories = new Map();

// // Додавання елементів
// fruitsCalories.set("apple", 52);
// fruitsCalories.set("banana", 89);
// fruitsCalories.set("orange", 43);

// console.log(fruitsCalories); // Виведе Map(3) {"apple" => 52, "banana" => 89, "orange" => 43}

// // Отримання значення за ключем
// console.log(fruitsCalories.get("banana")); // 89

// // Перевірка на наявність ключа
// console.log(fruitsCalories.has("kiwi")); // false

// // Видалення елемента
// fruitsCalories.delete("apple");
// console.log(fruitsCalories.has("apple")); // false

// // Отримання кількості елементів
// console.log(fruitsCalories.size); // 2

// // Очищення Map
// fruitsCalories.clear();
// console.log(fruitsCalories.size); // 0

// //////////////////

// const map = new Map([
//   ["apple", "green"],
//   ["banana", "yellow"],
//   ["orange", "orange"],
// ]);

// // Ітерація за допомогою for...of та entries()
// for (const [key, value] of map.entries()) {
//   console.log(`${key} is ${value}`);
// }

// // Ітерація за допомогою forEach
// map.forEach((value, key) => {
//   console.log(`${key} is ${value}`);
// });

// // Отримання тільки ключів
// for (const key of map.keys()) {
//   console.log(key);
// }

// // Отримання тільки значень
// for (const value of map.values()) {
//   console.log(value);
// }


// // Створення нового Set
// const uniqueNumbers = new Set();

// // Додавання значень
// uniqueNumbers.add(1);
// uniqueNumbers.add(2);
// uniqueNumbers.add(3);
// uniqueNumbers.add(3); // Це значення не буде додано, оскільки воно вже існує у Set

// console.log(uniqueNumbers); // Виведе Set(3) {1, 2, 3}

// // Перевірка на наявність значення
// console.log(uniqueNumbers.has(2)); // true
// console.log(uniqueNumbers.has(4)); // false

// // Видалення значення
// uniqueNumbers.delete(2);
// console.log(uniqueNumbers.has(2)); // false

// // Отримання кількості елементів
// console.log(uniqueNumbers.size); // 2

// // Очищення Set
// uniqueNumbers.clear();
// console.log(uniqueNumbers.size); // 0

// const fruits = new Set(['apple', 'banana', 'orange']);

// // Ітерація за допомогою for...of
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// // Ітерація за допомогою forEach
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// // Використання методу keys()
// for (const key of fruits.keys()) {
//   console.log(key);
// }

// // Використання методу values()
// for (const value of fruits.values()) {
//   console.log(value);
// }

// // Використання методу entries()
// for (const entry of fruits.entries()) {
//   console.log(entry);
// }

// let activeUsers = new WeakSet()

// let john = { name: 'John' }
// let pete = { name: 'Pete' }

// // Додаємо користувачів до набору активних користувачів
// activeUsers.add(john)
// activeUsers.add(pete)

// // Перевіряємо, чи є John активним користувачем
// console.log(activeUsers.has(john)) // true

// // Видаляємо посилання на John
// john = null

// // John автоматично видаляється з WeakSet після збору сміття
// // Перевірка активності John неможлива, оскільки john = null,
// // але ми можемо бути впевнені, що WeakSet не утримує John від збору сміття

// // Pete залишається в наборі, поки на нього є посилання
// console.log(activeUsers.has(pete)) // true

// // John видалений з WeakSet
// console.log(activeUsers.has(john)) // false


// function Vehicle(color) {
//     this.color = color;s
// }

// Vehicle.prototype.drive = function() {
//     console.log("Цей транспортний засіб рухається");
// };

// Vehicle.prototype.stop = function() {
//     console.log("Цей транспортний засіб зупиняється");
// };

// function Car(color, model) {
//     Vehicle.call(this, color);
//     this.model = model;
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.displayDetails = function() {
//     console.log(`Це автомобіль моделі ${this.model} кольору ${this.color}`);
// };

// const myCar = new Car('червоний', 'Tesla Model 3');
// myCar.drive();
// myCar.displayDetails();
// myCar.stop();


// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }

//   drive() {
//     console.log(`${this.color} ${this.brand} is driving.`);
//   }

//   static honk() {
//     console.log('Beep beep!');
//   }
// }

// const myCar = new Car('Toyota', 'red');
// myCar.drive(); // Виводить: "red Toyota is driving."
// Car.honk(); // Виводить: "Beep beep!"


// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// // Додаємо getSummary до прототипу Book, щоб усі екземпляри могли використовувати цей метод
// Book.prototype.getSummary = function() {
//     return `${this.title} написана ${this.author} у ${this.year} році.`;
// };

// // Створюємо два екземпляри книг
// const book1 = new Book('Шлях до вивчення JavaScript', 'Іван Петров', 2021);
// const book2 = new Book('Глибоке занурення в ES6', 'Анна Сидорова', 2023);

// // Виводимо опис першої книги
// console.log(book1.getSummary());
// // Виводимо опис другої книги
// console.log(book2.getSummary());
// const test_object = new Object();



// class Person {
//   // Конструктор для ініціалізації нових об'єктів
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // Метод класу для виведення інформації про особу
//   introduceSelf() {
//     console.log(`Привіт, мене звати ${this.name} і мені ${this.age} років.`);
//   }
// }

// // Створення нового екземпляра класу Person
// const person1 = new Person('Анна', 25);
// person1.introduceSelf(); // Виводить: "Привіт, мене звати Анна і мені 25 років."



// class MyClass {
//     static staticProperty = "Статичне значення"; // Статична властивість
//     #privateProperty = "Приватне значення"; // Приватна властивість

//     constructor(publicProperty) {
//         this.publicProperty = publicProperty; // Публічна властивість
//     }

//     static staticMethod() {
//         return "Статичний метод"; // Статичний метод
//     }

//     #privateMethod() {
//         return "Приватний метод"; // Приватний метод
//     }

//     publicMethod() {
//         return `Публічний метод, ${this.#privateMethod()}`; // Публічний метод
//     }
// }

// console.log(MyClass.staticProperty); // Виводить "Статичне значення"
// console.log(MyClass.staticMethod()); // Виводить "Статичний метод"

// const myInstance = new MyClass("Публічне значення");
// console.log(myInstance.publicProperty); // Виводить "Публічне значення"
// console.log(myInstance.publicMethod()); // Виводить "Публічний метод, Приватний метод"
// // Приватні члени не доступні ззовні класу, тому наступні рядки викинуть помилку:
// // console.log(myInstance.#privateProperty); // SyntaxError
// // console.log(myInstance.#privateMethod()); // SyntaxError