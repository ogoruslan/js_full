interface Person {
    name: string;
    age: number;

    greet(): void;
}

class Employee implements Person {
    constructor(public name: string, public age: number, public position: string) {}

    greet() {
        console.log(`Привіт, мене звати ${this.name}, і я - ${this.position}.`);
    }
}

const employee = new Employee("Олексій", 30, "розробник");
employee.greet(); // Виведе: Привіт, мене звати Олексій, і я - розробник.

// Функція, яка повертає масив, де всі елементи мають однаковий тип
function identity<T>(items: T[]): T[] {
  return items;
}

// Використання функції identity з числами
const numbers = identity<number>([1, 2, 3, 4]);
console.log(numbers); // Виводить: [1, 2, 3, 4]

// Використання функції identity з рядками
const strings = identity<string>(["a", "b", "c"]);
console.log(strings); // Виводить: ["a", "b", "c"]
// //////////////////

// Декларуємо декоратор logClass, який приймає клас як параметр
function logClass(target: Function) {
  // Виводимо в консоль ім'я класу, до якого застосовано декоратор
  console.log(`Клас ${target.name} був створений`) // "Class [class name] has been created"
}

// Застосовуємо декоратор @logClass до класу Person
@logClass
class Person {
  // Конструктор класу Person приймає два параметри: name та age
  constructor(
    public name: string, // Публічна властивість name, яка зберігає ім'я особи
    public age: number // Публічна властивість age, яка зберігає вік особи
  ) {}
}

// Створюємо екземпляр класу Person з ім'ям 'Аліса' та віком 30
const person = new Person('Аліса', 30)

// ///////////////////////
// Оголошуємо декоратор uppercase для властивостей класу
function uppercase(target: any, propertyKey: string) {
  let value: string // Локальна змінна для зберігання значення властивості

  // Функція-геттер, яка повертає значення властивості
  const getter = () => value
  // Функція-сеттер, яка призначає нове значення властивості, перетворюючи його на верхній регістр
  const setter = (newValue: string) => {
    value = newValue.toUpperCase() // Перетворення на верхній регістр
  }

  // Визначення нової властивості з геттером і сеттером за допомогою Object.defineProperty
  Object.defineProperty(target, propertyKey, {
    get: getter, // Встановлення геттера
    set: setter, // Встановлення сеттера
    enumerable: true, // Властивість є перелічуваною
    configurable: true // Властивість може бути конфігурована
  })
}

// Клас Person з властивістю name, до якої застосовано декоратор uppercase
class Person1 {
  @uppercase
  name: string

  // Конструктор класу, який приймає ім'я і призначає його властивості name
  constructor(name: string) {
    this.name = name
  }
}

// Створення екземпляра класу Person з ім'ям 'alice'
const person2 = new Person1('alice')
// Виведення імені екземпляра в консоль, очікуємо побачити 'ALICE'
console.log(person2.name) // Виведе "ALICE"


//////////

// Оголошення функції декоратора logExecutionTime, яка приймає цільовий об'єкт, назву властивості та дескриптор властивості
function logExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value // Зберігаємо посилання на оригінальний метод

  // Перевизначаємо метод за допомогою асинхронної функції
  descriptor.value = async function (...args: any[]) {
    const start = performance.now() // Фіксуємо час початку виконання методу
    const result = await originalMethod.apply(this, args) // Викликаємо оригінальний метод і чекаємо на його завершення
    const finish = performance.now() // Фіксуємо час завершення виконання методу

    // Виводимо у консоль назву методу та час його виконання
    console.log(`${propertyKey} виконувався ${(finish - start).toFixed(2)} мілісекунд.`) // "[method name] was executed in [execution time] milliseconds."
    return result // Повертаємо результат виконання оригінального методу
  }

  return descriptor // Повертаємо модифікований дескриптор
}

// Оголошення класу Calculator
class Calculator {
  @logExecutionTime // Застосування декоратора logExecutionTime до методу add
  async add(x: number, y: number): Promise<number> {
    // Додавання штучної затримки для імітації тривалого виконання
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Затримка на 1 секунду
    return x + y // Повертаємо суму аргументів
  }
}

const calculator = new Calculator() // Створюємо екземпляр класу Calculator
// Викликаємо метод add і виводимо результат його роботи у консоль
calculator.add(5, 5).then((result) => console.log(result)) // Виведе результат виконання методу add

// Оголошення простору імен Utilities
namespace Utilities {
  // Функція в просторі імен, яка повертає найбільше число з масиву
  export function maxArray(numbers: number[]): number {
    return Math.max(...numbers);
  }

  // Інтерфейс в просторі імен
  export interface Logger {
    log: (msg: string) => void;
  }

  // Клас в просторі імен
  export class ConsoleLogger implements Logger {
    log(msg: string) {
      console.log(msg);
    }
  }
}

// Використання елементів з простору імен
let numbers1: number[] = [1, 2, 3, 4, 5];
console.log(Utilities.maxArray(numbers1)); // Виводить найбільше число з масиву

const logger: Utilities.Logger = new Utilities.ConsoleLogger();
logger.log('Це повідомлення залоговано за допомогою ConsoleLogger'); // Логує повідомлення

