// Визначення кортежу, який складається з рядка, числа та булевого значення
let user: [string, number, boolean] = ["Олексій", 30, true];

// Використання елементів кортежу
console.log(`Ім'я: ${user[0]}`); // Виведе: Ім'я: Олексій
console.log(`Вік: ${user[1]}`); // Виведе: Вік: 30
console.log(`Активний: ${user[2]}`); // Виведе: Активний: true

// Додавання елементу в кортеж (тип та порядок мають бути відповідними)
user.push("додатковий рядок"); // TypeScript дозволить це, але краще уникати динамічного змінення розміру кортежів

function addNumbers(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

const result: number = addNumbers(10, 5);
console.log(result); // Виведе: 15

const book: { title: string; author: string; pages: number } = {
  title: "Великий Код",
  author: "Людина-Програміст",
  pages: 500,
};

type Book1 = {
    title: string;
    author: string;
    pages: number;
};

const book1: Book1 = {
    title: "Великий Код",
    author: "Людина-Програміст",
    pages: 500
};

interface Book2 {
    title: string;
    author: string;
    pages: number;
}

const book2: Book2 = {
    title: "Великий Код",
    author: "Людина-Програміст",
    pages: 500
};

interface Person {
  name: string;
  age?: number; // Необов'язкова властивість
  greet?: () => void; // Необов'язковий метод
}

// Імплементація інтерфейсу без необов'язкової властивості та методу
const person1: Person = {
  name: "Аліса"
};

// Імплементація інтерфейсу з необов'язковою властивістю та методом
const person2: Person = {
  name: "Боб",
  age: 30,
  greet: () => console.log("Привіт!")
};

type Animal = {
  species: string;
  sound?: string; // Необов'язкова властивість
  makeSound?: () => void; // Необов'язковий метод
}

// Імплементація типу без необов'язкової властивості та методу
const animal1: Animal = {
  species: "кіт"
};

// Імплементація типу з необов'язковою властивістю та методом
const animal2: Animal = {
  species: "собака",
  sound: "гав",
  makeSound: () => console.log("гав")
};


type Employee = {
    name: string;
    startDate: Date;
};

type Worker1 = {
    hasBadge: boolean;
};

type EmployeeWorker = Employee & Worker1;

const ew: EmployeeWorker = {
    name: "Анна",
    startDate: new Date(),
    hasBadge: true
};

type PartialEmployee = Partial<Employee>;

const pe: PartialEmployee = {
    name: "Олексій"
    // startDate не обов'язкова властивість тут
};

type ReadonlyEmployee = Readonly<Employee>;

const re: ReadonlyEmployee = {
    name: "Віктор",
    startDate: new Date()
};
// re.name = "Інше ім'я"; // це видасть помилку, оскільки властивості тільки для читання

type RequiredEmployee = Required<PartialEmployee>;

const fullEmployee: RequiredEmployee = {
    name: "Василь",
    startDate: new Date() // тепер startDate обов'язкова властивість
};

type PickedEmployee = Pick<Employee, 'name'>;

const pe1: PickedEmployee = {
    name: "Марія"
    // startDate відсутня, оскільки не вибрана
};

type EmployeesRecord = Record<string, Employee>;

const employees: EmployeesRecord = {
    manager: { name: "Сергій", startDate: new Date() },
    assistant: { name: "Ірина", startDate: new Date() }
};

type User4 = { name4: string; age: number };
let user5: User4 | null = null;

function createUser(name4: string, age: number): User4 {
   return  { name4, age };
}

user5 = createUser("Олексій", 30);

if (user5 !== null) {
    console.log(user5.name4); // Виведе: Олексій
}

///
let user11: string | undefined;

function setUser(name: string) {
    user11 = name;
}

function clearUser() {
    user11 = undefined; // Явно вказуємо, що змінна не має значення
}

setUser("Олексій");
console.log(user11); // Виведе: Олексій

clearUser();
console.log(user11); // Виведе: undefined


let value: unknown;

value = "Це рядок";
if (typeof value === "string") {
    console.log(value.toUpperCase()); // Безпечно, оскільки ми перевірили, що це рядок
}

value = 123;
if (typeof value === "number") {
    console.log(value.toFixed(2)); // Безпечно, оскільки ми перевірили, що це число
}

function getValue(): unknown {
    return "можливо рядок, а може і число";
}

const result1: unknown = getValue();
if (typeof result1 === "string") {
    console.log(result1.toUpperCase()); // Тут result1 розглядається як рядок після перевірки типу
} else {
    console.log("Значення не є рядком");
}


class User {
    public name: string;
    private password: string;
    protected age: number;
    static count: number = 0;

    constructor(name: string, password: string, age: number) {
        this.name = name;
        this.password = password;
        this.age = age;
        User.count++;
    }

    public greet():void {
        console.log(`Привіт, мене звати ${this.name}`);
    }

    private checkPassword(password: string): boolean {
        return this.password === password;
    }

    protected showAge() {
        console.log(`Мій вік: ${this.age}`);
    }

    static showCount() {
        console.log(`Кількість користувачів: ${User.count}`);
    }
}

const user1 = new User("Олексій", "superSecret", 30);
user1.greet(); // Доступно, оскільки метод публічний
// user1.checkPassword("test"); // Недоступно, оскільки метод приватний
// console.log(user1.age); // Недоступно, оскільки властивість захищена
User.showCount(); // Доступно, оскільки метод статичний


// Базовий клас
class Vehicle {
    wheels: number;

    constructor(wheels: number) {
        this.wheels = wheels;
    }

    displayWheels() {
        console.log(`Кількість коліс: ${this.wheels}`);
    }
}

// Наслідуваний клас
class Car extends Vehicle {
    constructor() {
        super(4); // Виклик конструктора базового класу з кількістю коліс 4
    }

    startEngine() {
        console.log("Двигун запущено");
    }
}

const myCar = new Car();
myCar.displayWheels(); // Виведе: Кількість коліс: 4
myCar.startEngine(); // Виведе: Двигун запущено


abstract class Animal1 {
    // Абстрактна властивість
    abstract species: string;

    // Конструктор
    constructor(public name: string) {}

    // Абстрактний метод
    abstract makeSound(): void;

    // Звичайний метод
    displayInfo() {
        console.log(`Це ${this.species}, його звати ${this.name}.`);
    }
}


class Dog extends Animal1 {
    species = 'собака';

    constructor(name: string) {
        super(name); // Викликаємо конструктор базового класу
    }

    // Реалізація абстрактного методу
    makeSound() {
        console.log("Гав!");
    }
}

const myDog = new Dog("Бобік");
myDog.displayInfo(); // Виведе: Це собака, його звати Бобік.