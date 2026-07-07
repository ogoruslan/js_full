const { ageClassification, weekFn } = require('./main.js')

describe('Age Classification tests', () => {
  test('When age is -1 then returns null', () => {
    expect(ageClassification(-1)).toBe(null)
  })

  test('When age is 0 then returns Дитинство', () => {
    expect(ageClassification(0)).toBe('Дитинство')
  })

  test('When age is 1 then returns Дитинство', () => {
    expect(ageClassification(1)).toBe('Дитинство')
  })

  test('When age is 24 then returns Дитинство', () => {
    expect(ageClassification(24)).toBe('Дитинство')
  })

  test('When age is 24.01 then returns Молодість', () => {
    expect(ageClassification(24.01)).toBe('Молодість')
  })

  test('When age is 44 then returns Молодість', () => {
    expect(ageClassification(44)).toBe('Молодість')
  })

  test('When age is 44.01 then returns Зрілість', () => {
    expect(ageClassification(44.01)).toBe('Зрілість')
  })

  test('When age is 65 then returns Зрілість', () => {
    expect(ageClassification(65)).toBe('Зрілість')
  })

  test('When age is 65.1 then returns Старість', () => {
    expect(ageClassification(65.1)).toBe('Старість')
  })

  test('When age is 75 then returns Старість', () => {
    expect(ageClassification(75)).toBe('Старість')
  })

  test('When age is 75.01 then returns Довголіття', () => {
    expect(ageClassification(75.01)).toBe('Довголіття')
  })

  test('When age is 90 then returns Довголіття', () => {
    expect(ageClassification(90)).toBe('Довголіття')
  })

  test('When age is 90.01 then returns Рекорд', () => {
    expect(ageClassification(90.01)).toBe('Рекорд')
  })

  test('When age is 122 then returns Рекорд', () => {
    expect(ageClassification(122)).toBe('Рекорд')
  })

  test('When age is 122.01 then returns null', () => {
    expect(ageClassification(122.01)).toBe(null)
  })

  test('When age is 150 then returns null', () => {
    expect(ageClassification(150)).toBe(null)
  })
})

describe('Week function tests', () => {
  test('When number is 1 then returns Понеділок', () => {
    expect(weekFn(1)).toBe('Понеділок')
  })

  test('When number is 2 then returns Вівторок', () => {
    expect(weekFn(2)).toBe('Вівторок')
  })

  test('When number is 3 then returns Середа', () => {
    expect(weekFn(3)).toBe('Середа')
  })

  test('When number is 4 then returns Четвер', () => {
    expect(weekFn(4)).toBe('Четвер')
  })

  test("When number is 5 then returns П'ятниця", () => {
    expect(weekFn(5)).toBe("П'ятниця")
  })

  test('When number is 6 then returns Субота', () => {
    expect(weekFn(6)).toBe('Субота')
  })

  test('When number is 7 then returns Неділя', () => {
    expect(weekFn(7)).toBe('Неділя')
  })

  test('When number is -7 then returns null', () => {
    expect(weekFn(-7)).toBe(null)
  })

  test('When number is 8 then returns null', () => {
    expect(weekFn(8)).toBe(null)
  })

  test('When number is 1.5 then returns null', () => {
    expect(weekFn(1.5)).toBe(null)
  })
})
