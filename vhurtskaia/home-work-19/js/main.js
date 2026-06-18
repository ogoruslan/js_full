import { getRandomInt } from "./getRandomInt.js";
import { greetByName } from "./greetByName.js";
import { sumBigIntegers } from "./sumBigIntegers.js";

console.log(getRandomInt(1, 10));   // випадкове число від 1 до 10
console.log(getRandomInt(40, 50));  // випадкове число від 40 до 50
console.log(getRandomInt(1, 100));  // випадкове число від 1 до 100

console.log(greetByName('Hi', 'John'));     // Hi, John
console.log(greetByName('Hey', 'Bob'));     // Hey, Bob
console.log(greetByName('Hello', 'Mary'));  // Hello, Mary

console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // 18014398509481982n
