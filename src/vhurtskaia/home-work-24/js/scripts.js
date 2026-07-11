function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

function doubleArrayElements(numbers) {
  return numbers.map((number) => number * 2);
}

class SkillsManager {
  constructor() {
    this.skills = [];
  }

  addSkill(skill) {
    if (typeof skill !== "string" || skill.length < 2) {
      return null;
    }

    this.skills.push(skill);

    return skill;
  }

  getAllSkills() {
    return this.skills;
  }
}

function DateCalculator(initialDate) {
  this.date = new Date(initialDate);

  this.addDays = function (days) {
    this.date.setDate(this.date.getDate() + days);
  };

  this.subtractDays = function (days) {
    this.date.setDate(this.date.getDate() - days);
  };

  this.getResult = function () {
    return this.date.toISOString().split("T")[0];
  };
}

export {
  doubleArrayElements,
  sumArray,
  SkillsManager,
  DateCalculator,
};