/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної: myObj, значення: first: 'First Name', last: 'Last Name'

let myNum = 10;
console.log(myNum);

let myStr = "some string";
console.log(myStr);

let myBool = true ;
console.log(myBool);

let myArr = [1, 2, 3, 4, 5];
console.log(myArr);

first = 'First Name';
last = 'Last Name';
let myObj = first + " " + last ;
console.log(myObj);

/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */

// myBigInt
let myBigInt = 123n;
myBigInt++;
console.log(myBigInt);

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */


let num = 34.343434;
let decimal2 = num.toFixed(2);

console.log(decimal2); 



