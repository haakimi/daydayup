export type ZodiacSign = {
  id:
    | 'aries'
    | 'taurus'
    | 'gemini'
    | 'cancer'
    | 'leo'
    | 'virgo'
    | 'libra'
    | 'scorpio'
    | 'sagittarius'
    | 'capricorn'
    | 'aquarius'
    | 'pisces'
  zhName: string
  enName: string
}

const signs: Record<ZodiacSign['id'], ZodiacSign> = {
  aries: { id: 'aries', zhName: '白羊座', enName: 'Aries' },
  taurus: { id: 'taurus', zhName: '金牛座', enName: 'Taurus' },
  gemini: { id: 'gemini', zhName: '双子座', enName: 'Gemini' },
  cancer: { id: 'cancer', zhName: '巨蟹座', enName: 'Cancer' },
  leo: { id: 'leo', zhName: '狮子座', enName: 'Leo' },
  virgo: { id: 'virgo', zhName: '处女座', enName: 'Virgo' },
  libra: { id: 'libra', zhName: '天秤座', enName: 'Libra' },
  scorpio: { id: 'scorpio', zhName: '天蝎座', enName: 'Scorpio' },
  sagittarius: { id: 'sagittarius', zhName: '射手座', enName: 'Sagittarius' },
  capricorn: { id: 'capricorn', zhName: '摩羯座', enName: 'Capricorn' },
  aquarius: { id: 'aquarius', zhName: '水瓶座', enName: 'Aquarius' },
  pisces: { id: 'pisces', zhName: '双鱼座', enName: 'Pisces' }
}

const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export function getZodiacSign(month: number, day: number): ZodiacSign {
  if (!Number.isInteger(month) || !Number.isInteger(day) || month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
    throw new Error('Invalid birth date')
  }

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return signs.aries
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return signs.taurus
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return signs.gemini
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return signs.cancer
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return signs.leo
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return signs.virgo
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return signs.libra
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return signs.scorpio
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return signs.sagittarius
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return signs.capricorn
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return signs.aquarius
  return signs.pisces
}
