"use strict";
console.time("Execution Time");
let numbers = [1, 6, 3, 8, 4, 2, 7];

var processedNumbers = numbers
  .filter((number) => number > 5) // Відфільтрувати числа більші за 5
  .sort((a, b) => a - b) // Відсортувати за зростанням
  .map((number) => number * 2); // Помножити кожне число на 2

console.log(processedNumbers); // Вивести результат: [12, 14, 16]
let processedNumbers1, processedNumbers2;
console.log((processedNumbers1 = numbers.filter((number) => number > 5))); // Вивести результат: [6, 7, 8]

console.log((processedNumbers2 = processedNumbers1.sort((a, b) => a - b))); // Вивести результат: [6, 7, 8]

console.log(processedNumbers2.map((number) => number * 2)); // Вивести результат: [12, 14, 16]

var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // "Banana"
console.log(fruits);

fruits[1] = "Mango";
console.log(fruits); // ["Apple", "Mango", "Cherry"]

console.log(fruits.length); // 3

let numbers1 = [1, 2, 3]; // Літерал масива
var moreNumbers = new Array(3); // Масив з трьома пустими слотами
console.log(numbers1); // [1, 2, 3]
console.log(moreNumbers); // [ <3 empty items> ]

delete fruits[2]; // Видаляє "Cherry"
console.log(fruits[2]); // undefined
console.log(fruits); // ["Apple", "Mango", <1 empty item>]

console.log(Array.isArray(fruits)); // true

var elements = ["Вогонь", "Повітря", "Вода"];
console.log(elements.join(" - ")); // "Вогонь - Повітря - Вода"

var sentence = "Hello World";
var words = sentence.split(" ");
// Result: ["Hello", "World"]

numbers = [1, 2, 3];
console.log(numbers.reverse()); // [3, 2, 1]

numbers = [1, 6, 3, 8, 4, 2, 7];
console.log(numbers.sort()); // [1, 2, 3]

// Ascending order (lowest price first)
// items.sort((a, b) => a.price - b.price);

// Descending order (highest price first)
// items.sort((a, b) => b.price - a.price);

var alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); // ['a', 'b', 'c', 1, 2, 3]

numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(1, 3)); // [2, 3]

numbers = [1, 2, 4];
numbers.splice(2, 0, 3); // Додає 3 перед індексом 2
console.log(numbers); // [1, 2, 3, 4]
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let animals = ["панда", "коала"];
animals.push("броненосець");
console.log(animals);
animals.push("броненосець");
console.log(animals);

numbers = [2, 3, 4];
numbers.unshift(1);
console.log("numbers=", numbers); // [1, 2, 3, 4]
console.log("unshift=", numbers.unshift(1)); // [1, 2, 3, 4]

numbers = [1, 2, 3];
console.log(numbers.pop()); // 3
console.log(numbers); // [1, 2]

numbers = [1, 2, 3];
console.log(numbers.shift()); // 1
console.log(numbers); // [2, 3]

numbers = [1, 2, 3];
numbers.forEach((number) => console.log(number)); // 1 2 3

numbers.forEach((number) => {
  console.log(number);
}); // 1 2 3

numbers = [1, 6, 3, 8, 4, 2, 7];
var doubled = numbers.map((number) => number * 2);
console.log(doubled); // Виведе: [2, 12, 6, 16, 8, 4, 14]
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
var evens = numbers.filter((number) => number % 2 === 0);
console.log("filter=", evens); // [2, 4]

numbers = [2, 4, 6];
console.log(numbers.every((number) => number % 2 === 0)); // true

[12, 5, 8, 130, 44].every((elem) => elem >= 10); // false
[12, 54, 18, 130, 44].every((elem) => elem >= 10); // true

numbers = [1, 2, 3, 4];
console.log(numbers.some((number) => number % 2 === 0)); // true

[2, 5, 8, 1, 4].some((elem) => elem > 10); // false
[12, 5, 8, 1, 4].some((elem) => elem > 10); // true

numbers = [1, 2, 3, 4];
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum); // 10

numbers = [1, 2, 3, 4];
sum = numbers.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum); // 10

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

 animals = ["панда", "коала", "броненосець"];
console.log(animals.indexOf("коала")); // 1

numbers = [1, 2, 3, 2, 1];
console.log(numbers.lastIndexOf(2)); // 3

let array = [1, 2, 3, 4, 5, 2];

// Перевіряємо, чи масив містить число 2
console.log(array.includes(2)); // true

// Перевіряємо, чи масив містить число 2, починаючи пошук з індексу 4
console.log(array.includes(2, 4)); // true

// Перевіряємо, чи масив містить число 3, починаючи з індексу 4
console.log(array.includes(3, 4)); // false

numbers = [1, 2, 3, 4];
var found = numbers.find((number) => number > 2);
console.log(found); // 3

var now = new Date(); // Отримуємо поточну дату та час
console.log(`Рік: ${now.getFullYear()}`); // Виводимо поточний рік
console.log(`Місяць: ${now.getMonth() + 1}`); // Виводимо поточний місяць (зверніть увагу, що місяці починаються з 0)
console.log(`День: ${now.getDate()}`); // Виводимо поточний день

// Форматування дати для виводу
console.log(now); // дорівнює console.log(now.toLocaleDateString("en-US")); // Виводимо дату в форматі, звичному для США
console.log(now.toLocaleDateString("uk-UA")); // Виводимо дату в форматі, звичному для України


// Поточна дата та час
var now = new Date();
console.log('Поточна дата та час:', now);

// Дата та час в мілісекундах від початку Unix епохи
var dateFromMilliseconds = new Date(1609459200000); // 1 січня 2021
console.log('Дата з мілісекунд:', dateFromMilliseconds);

// Дата на основі рядка
var dateFromString = new Date('2021-01-01T00:00:00');
console.log('Дата з рядка:', dateFromString);

// Дата з конкретними компонентами
var detailedDate = new Date(2021, 0, 1, 10, 30, 0); // 1 січня 2021, 10:30:00
console.log('Детальна дата:', detailedDate);


var now = new Date(); // Створюємо об'єкт для поточної дати та часу

// Отримуємо компоненти дати
var year = now.getFullYear(); // Рік
var month = now.getMonth() + 1; // Місяць (додаємо 1, тому що місяці починаються з 0)
var day = now.getDate(); // День
var hours = now.getHours(); // Години
var minutes = now.getMinutes(); // Хвилини
var seconds = now.getSeconds(); // Секунди

// Виводимо компоненти
console.log(`Рік: ${year}, Місяць: ${month}, День: ${day}, Час: ${hours}:${minutes}:${seconds}`);


var date = new Date(); // Створюємо об'єкт для поточної дати та часу
console.log('Початкова дата:', date);

// Встановлюємо нові компоненти дати
date.setFullYear(2024); // Встановлюємо рік
date.setMonth(0); // Встановлюємо місяць (0 = січень, оскільки в JavaScript місяці починаються з 0)
date.setDate(1); // Встановлюємо день
date.setHours(12); // Встановлюємо годину
date.setMinutes(0); // Встановлюємо хвилини
date.setSeconds(0); // Встановлюємо секунди

console.log('Змінена дата:', date);

console.timeEnd("Execution Time", performance.now());

// Date.now()
console.log('Поточний час (мс від Unix епохи):', Date.now());

// toISOString()
var now = new Date();
console.log('ISO строка поточної дати:', now.toISOString());

// toLocaleString()
console.log('Локалізована строка поточної дати:', now.toLocaleString('uk-UA'));

// performance.now()
console.log('Час виконання (мс від початку завантаження сторінки):', performance.now());

// console.time та console.timeEnd
console.time('Вимірювання');
for(let i = 0; i < 1000000; i++) {} // Певна операція для вимірювання
console.timeEnd('Вимірювання');