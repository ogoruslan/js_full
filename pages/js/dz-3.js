let age = 20;
if (age >= 18) {
  let obj = {a: 1, 1: 2, c: 3};
  console.log("так");
} else {
  console.log("ні");
}
let score = 60;
score >= 50 ? console.log("Ви пройшли") : console.log("Ви не пройшли");
let asdfasdf = 1; 
let sdfasdfasfDF = 2;
let c = 3;

for (let i = 0; i <= 10; i++) {}

for (let i = 0, j = 10; i <= 10; i++, j--) {
    console.log(i, j); // Виводить пари чисел: 0 10, 1 9, ..., 10 0
}

var x, y, z;
x = (y = 5, z = 10); // y стає 5, z стає 10, і x стає 10
console.log(x); // Виведе 10

let arr = [["about","hello"], 23, 4, 5];
let obj = {
    1: 1,
    "asdfsdf": 2,
    "asdfsdf": 3
}
let length = arr.length;
for (let i = 0; i < length; i++) {
  console.log(arr[i]);
  let obj = {a: 1, 1: 2, c: 3};
}


for (let prop in obj) {
    console.log(prop + ": " + obj[prop]); // Виводить "a: 1", "b: 2", "c: 3"
}
obj.a == obj["1"]

arr = "10, 20, 30";
for (var value of arr) {
    console.log(value); // Виводить 10, 20, 30
}

var i = 0;
while (i < 5) {
    console.log(i); // Виводить числа від 0 до 4
    i++;
}

var i = 0;
do {
    console.log(i); // Виводить числа від 0 до 4
    i++;
} while (i < 5);

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Виходимо з циклу, коли i дорівнює 5
    }
    console.log(i); // Виводить числа від 0 до 4
}

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Пропускаємо 5
    }
    console.log(i); // Виводить числа від 0 до 4 та від 6 до 9
}

console.log(sum(1, 2)); // Виведе: 3

function sum(a, b) {
    return a + b;
}



var multiply = function(a, b) {
    return a * b;
};
console.log(multiply(3, 4)); // Виведе: 12

function printArguments() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

printArguments('Hello', 'World', '!');

function washDishes(callback) {
    console.log('Початок миття посуду.');
    setTimeout(() => {
        // Припустимо, що миття посуду триває 3 секунди
        callback();
    }, 3000);
}

washDishes(function() {
    console.log('Посуд вимито!');
});