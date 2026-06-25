/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/

function sumBigIntegers(numStr1, numStr2) {
  // Перетворюємо рядки на BigInt та додаємо їх
  return BigInt(numStr1) + BigInt(numStr2);
}

// Перевірка:
console.log(sumBigIntegers('9007199254740991', '9007199254740991')); 
// Виведе: 18014398509481982n
