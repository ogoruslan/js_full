import {
  doubleArrayElements,
  sumArray,
  SkillsManager,
  DateCalculator,
} from "./scripts.js";

// #1
const exampleArray = [1, 2, 3, 4, 5];
console.log(sumArray(exampleArray)); // 15

// #2
console.log(doubleArrayElements(exampleArray)); // [2, 4, 6, 8, 10]

// #3
const skillsManager = new SkillsManager();

console.log(skillsManager.addSkill("JavaScript"));
console.log(skillsManager.addSkill("CSS"));
console.log(skillsManager.addSkill("A"));
console.log(skillsManager.getAllSkills());

// #4
const dateCalculator = new DateCalculator("2023-01-01");

dateCalculator.addDays(5);
console.log(dateCalculator.getResult()); // 2023-01-06

dateCalculator.subtractDays(3);
console.log(dateCalculator.getResult()); // 2023-01-03