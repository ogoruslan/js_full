"use strict";
// function processNumbers(a, b) {
//   const sum = a + b
//   if (sum > 10) {
//     let test = this.sum + 1;
//     return console.log(test , 'Sum is greater than 10', this, arguments);
//   } else {
//     return console.log(this.sum , 'Sum is less than or equal to 10', this)
//   }
// }

// function processNumbers(a, b) {
//   return {
//     sum: a + b,
//     checkSum: function () {
//       if (this.sum > 10) {
//         let test = this.sum + 1;
//         return console.log(test, "Sum is greater than 10", this, arguments);
//       } else {
//         return console.log(this.sum, "Sum is less than or equal to 10", this);
//       }
//     },
//   };
// }

// console.log(this.sum + "External context");

// processNumbers(5, 7).checkSum();

// const logHello = () => console.log(this, "Hello");
// logHello();

// const person = {
//   name: "Андрій",
//   greet: function () {
//     console.log(`Привіт, мене звати ${this.name}`);
//   },
// };

// person.greet();

// const person = {
//   name: 'Андрій',
//   greet: function() {
//     console.log(`Привіт, мене звати ${this.name}`);
//   }
// };

// setTimeout(person.greet, 1000);

// const person = {
//   firstName: "Андрій",
//   lastName: "Шевченко",

//   // Гетер для повного імені
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   // Сетер для повного імені
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   },
// };

// console.log(person.fullName); // Читання за допомогою гетера: "Андрій Шевченко"

// person.fullName = "Іван Франко"; // Запис за допомогою сетера
// console.log(person.fullName);


const obj = {};

Object.defineProperty(obj, 'property1', {
  value: 42,
  writable: true, // Властивість може бути змінена
  enumerable: true, // Властивість буде перелічена в циклах
  configurable: false // Властивість не може бути видалена, а її дескриптори не можуть бути змінені
});


console.log(obj.property1); // Виведе: 42

// Зміна властивості буде успішною, оскільки writable: true
obj.property1 = 77;
console.log(obj.property1); // Значення змінилося на 77

// Спроба змінити дескриптор writable на false
Object.defineProperty(obj, 'property1', {
  writable: false
});
console.log(Object.getOwnPropertyDescriptor(obj, 'property1').writable); // true, якщо строгий режим не використовується; інакше TypeError

// Спроба видалити властивість не спрацює, оскільки configurable: false
// delete obj.property1;
console.log(obj.property1); // Значення залишається 77