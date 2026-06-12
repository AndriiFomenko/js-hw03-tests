import { describe, test, expect } from 'vitest'
import { oddFn } from '../main'

describe('oddFn function tests', () => {
  test('generates array of odd numbers correctly', () => {
    expect(oddFn(10)).toEqual([1, 3, 5, 7, 9])
    expect(oddFn(15)).toEqual([1, 3, 5, 7, 9, 11, 13, 15])
    expect(oddFn(20)).toEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])
  })

  test('uses while loop', () => {
    // Видаляємо коментарі, щоб уникнути крихкості тесту
    const functionAsString = oddFn.toString().replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '')
    expect(functionAsString).toMatch(/\bwhile\b/)
  })
})
