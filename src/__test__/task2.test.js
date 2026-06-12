import { describe, test, expect } from 'vitest'
import { userObj } from '../main'

describe('userObj method tests', () => {
  // Перевірка наявності методу fullName у об'єкті userObj
  test('userObj has fullName method', () => {
    expect(userObj).toHaveProperty('fullName')
    expect(typeof userObj.fullName).toBe('function')
  })

  // Перевірка коректності роботи методу fullName()
  test('fullName() returns a correct full name', () => {
    const expectedFullName = `${userObj.firstName} ${userObj.lastName}`
    expect(userObj.fullName()).toBe(expectedFullName)
  })
})
