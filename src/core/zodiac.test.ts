import { describe, expect, test } from 'vitest'
import { getZodiacSign } from './zodiac'

describe('getZodiacSign', () => {
  test('maps boundary dates to the correct zodiac sign', () => {
    expect(getZodiacSign(3, 21).id).toBe('aries')
    expect(getZodiacSign(4, 19).id).toBe('aries')
    expect(getZodiacSign(4, 20).id).toBe('taurus')
    expect(getZodiacSign(9, 23).id).toBe('libra')
    expect(getZodiacSign(10, 22).id).toBe('libra')
    expect(getZodiacSign(12, 22).id).toBe('capricorn')
    expect(getZodiacSign(1, 19).id).toBe('capricorn')
  })

  test('accepts leap day as pisces', () => {
    expect(getZodiacSign(2, 29).id).toBe('pisces')
  })

  test('rejects impossible month and day pairs', () => {
    expect(() => getZodiacSign(2, 30)).toThrow('Invalid birth date')
    expect(() => getZodiacSign(4, 31)).toThrow('Invalid birth date')
    expect(() => getZodiacSign(13, 1)).toThrow('Invalid birth date')
  })
})
