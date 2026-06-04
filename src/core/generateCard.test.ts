import { describe, expect, test } from 'vitest'
import { generateCard } from './generateCard'

describe('generateCard', () => {
  test('returns the same complete card for the same sign and date', () => {
    const first = generateCard({ signId: 'libra', date: '2026-06-03' })
    const second = generateCard({ signId: 'libra', date: '2026-06-03' })

    expect(second).toEqual(first)
    expect(first).toMatchObject({
      signId: 'libra',
      signName: '天秤座 / Libra',
      date: '2026-06-03'
    })
    expect(first.theme).toBeTruthy()
    expect(first.title).toBeTruthy()
    expect(first.message).toBeTruthy()
    expect(first.goodNews).toBeTruthy()
    expect(first.sunbeam).toBeTruthy()
    expect(first.quote).toBeTruthy()
    expect(first.luckyColor.name).toBeTruthy()
    expect(first.luckyColor.hex).toMatch(/^#[0-9a-f]{6}$/)
    expect(first.gentleMove).toBeTruthy()
    expect(first.luckyCue).toBeTruthy()
    expect(first.message).not.toContain('暗示')
    expect(first.message).not.toContain('避免')
    expect(first.goodNews).not.toContain('避免')
    expect(first.gentleMove).not.toContain('不好')
  })

  test('usually returns a different card for a different date', () => {
    const first = generateCard({ signId: 'libra', date: '2026-06-03' })
    const next = generateCard({ signId: 'libra', date: '2026-06-04' })

    expect(next).not.toEqual(first)
  })
})
