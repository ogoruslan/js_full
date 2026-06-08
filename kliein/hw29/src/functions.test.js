const { ageClassification, weekFn } = require('../functions')

describe('ageClassification', () => {
  test('повертає null для відʼємного віку', () => {
    expect(ageClassification(-1)).toBeNull()
  })

  test('класифікація Дитинство', () => {
    expect(ageClassification(0)).toBe('Дитинство')
    expect(ageClassification(1)).toBe('Дитинство')
    expect(ageClassification(24)).toBe('Дитинство')
  })

  test('класифікація Молодість', () => {
    expect(ageClassification(24.01)).toBe('Молодість')
    expect(ageClassification(44)).toBe('Молодість')
  })

  test('класифікація Зрілість', () => {
    expect(ageClassification(44.01)).toBe('Зрілість')
    expect(ageClassification(65)).toBe('Зрілість')
  })

  test('класифікація Старість', () => {
    expect(ageClassification(65.1)).toBe('Старість')
    expect(ageClassification(75)).toBe('Старість')
  })

  test('класифікація Довголіття', () => {
    expect(ageClassification(75.01)).toBe('Довголіття')
    expect(ageClassification(90)).toBe('Довголіття')
  })

  test('класифікація Рекорд', () => {
    expect(ageClassification(90.01)).toBe('Рекорд')
    expect(ageClassification(122)).toBe('Рекорд')
  })

  test('повертає null для віку більше 122', () => {
    expect(ageClassification(122.01)).toBeNull()
    expect(ageClassification(150)).toBeNull()
  })
})

describe('weekFn', () => {
  test('повертає коректні дні тижня', () => {
    expect(weekFn(1)).toBe('Понеділок')
    expect(weekFn(2)).toBe('Вівторок')
    expect(weekFn(3)).toBe('Середа')
    expect(weekFn(4)).toBe('Четвер')
    expect(weekFn(5)).toBe("П'ятниця")
    expect(weekFn(6)).toBe('Субота')
    expect(weekFn(7)).toBe('Неділя')
  })

  test('повертає null для чисел поза діапазоном', () => {
    expect(weekFn(0)).toBeNull()
    expect(weekFn(8)).toBeNull()
    expect(weekFn(9)).toBeNull()
  })

  test('повертає null для дробових чисел', () => {
    expect(weekFn(1.5)).toBeNull()
  })

  test('повертає null для рядків', () => {
    expect(weekFn('2')).toBeNull()
  })

  test('повертає null для інших типів даних', () => {
    expect(weekFn(null)).toBeNull()
    expect(weekFn(undefined)).toBeNull()
    expect(weekFn({})).toBeNull()
    expect(weekFn([])).toBeNull()
  })
})
