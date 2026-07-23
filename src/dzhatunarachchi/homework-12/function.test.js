const { ageClassification, weekFn } = require('./function');
describe('ageClassification(num)', () => {
  test.each([
    [-1, null],
    [0, null],
    [1, 'Дитинство'],
    [24, 'Дитинство'],
    [24.01, 'Молодість'],
    [44, 'Молодість'],
    [44.01, 'Зрілість'],
    [65, 'Зрілість'],
    [65.1, 'Старість'],
    [75, 'Старість'],
    [75.01, 'Довголіття'],
    [90, 'Довголіття'],
    [90.01, 'Рекорд'],
    [122, 'Рекорд'],
    [122.01, null],
    [150, null],
  ])('ageClassification(%p) повертає %p', (input, expected) => {
    expect(ageClassification(input)).toBe(expected);
  });
});

describe('weekFn(cond)', () => {
  test.each([
    [1, 'Понеділок'],
    [2, 'Вівторок'],
    [3, 'Середа'],
    [4, 'Четвер'],
    [5, "П'ятниця"],
    [6, 'Субота'],
    [7, 'Неділя'],
  ])('weekFn(%p) повертає %p для валідних днів 1-7', (input, expected) => {
    expect(weekFn(input)).toBe(expected);
  });

  test.each([
    [9],
    [0],
    [1.5],
    ['2'],
    [null],
    [undefined],
  ])('weekFn(%p) повертає null для некоректних значень', (input) => {
    expect(weekFn(input)).toBeNull();
  });
});
