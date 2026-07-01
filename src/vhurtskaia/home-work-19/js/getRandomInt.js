/*
 Створіть функцію `getRandomInt`, яка приймає два цілих числа: `min` та `max`.
 Ця функція повинна генерувати випадкове ціле число в діапазоні від `min` до `max` (включно).
*/

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}