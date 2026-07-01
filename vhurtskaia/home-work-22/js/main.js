import {myDouble, myTriple, myMax, myPow, counterFactory, counter} from "./scripts.js";

console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter(100)) // 100
console.log(counter()) // 101
console.log(counter()) // 102
console.log(counter(500)) // 500
console.log(counter()) // 501
console.log(counter()) // 502
console.log(counter(0)) // 0
console.log(counter()) // 0
console.log(counter()) // 1

const myPrint = (a, b, res) => `${a}^${b}=${res}`;

console.log(counterFactory.value()) // 0
counterFactory.increment()
counterFactory.increment()
counterFactory.increment()
console.log(counterFactory.value()) // 3
counterFactory.decrement()
counterFactory.decrement()
console.log(counterFactory.value()) // 1
console.log(counterFactory.value(100)) // 100
counterFactory.decrement()
console.log(counterFactory.value()) // 99
console.log(counterFactory.value(200)) // 200
counterFactory.increment()
console.log(counterFactory.value()) // 201

console.log(myPow(3, 4, myPrint))
console.log(myPow(2, 3, myPrint))
console.log(myPow(2, 0, myPrint))
console.log(myPow(2, -2, myPrint))

const list = [12, 23, 100, 34, 56, 9, 233];

console.log(myMax(list))

console.log(myDouble(3)) // 6
console.log(myDouble(4)) // 8
console.log(myDouble(5)) // 10

console.log(myTriple(3)) // 9
console.log(myTriple(4)) // 12
console.log(myTriple(5)) // 15