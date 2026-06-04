import type { ZodiacSign } from './zodiac'

export type FortuneCard = {
  signId: ZodiacSign['id']
  signName: string
  date: string
  theme: string
  title: string
  message: string
  goodNews: string
  sunbeam: string
  quote: string
  luckyColor: {
    name: string
    hex: string
  }
  gentleMove: string
  luckyCue: string
}

const signNames: Record<ZodiacSign['id'], string> = {
  aries: '白羊座 / Aries',
  taurus: '金牛座 / Taurus',
  gemini: '双子座 / Gemini',
  cancer: '巨蟹座 / Cancer',
  leo: '狮子座 / Leo',
  virgo: '处女座 / Virgo',
  libra: '天秤座 / Libra',
  scorpio: '天蝎座 / Scorpio',
  sagittarius: '射手座 / Sagittarius',
  capricorn: '摩羯座 / Capricorn',
  aquarius: '水瓶座 / Aquarius',
  pisces: '双鱼座 / Pisces'
}

const signTendencies: Record<ZodiacSign['id'], string[]> = {
  aries: ['你今天会比自己想象得更有行动力', '一件被你拖住的小事，今天有机会被轻轻推开'],
  taurus: ['你会在熟悉的节奏里发现一点新的安稳', '今天适合把生活里的某个角落重新照亮'],
  gemini: ['一个念头会像窗户一样打开，让空气进来', '你今天会更容易把复杂的心情说清楚一点'],
  cancer: ['有人或某个细节，会提醒你并不是一个人在撑着', '今天会有一点柔软的回应，落在你很需要的位置'],
  leo: ['你的光不需要用力，也会被看见', '今天适合接住一个小小的认可，不必急着把它推开'],
  virgo: ['一个细节会变顺，像抽屉终于合上', '今天你会发现，事情可以不完美也继续向前'],
  libra: ['你会把一点注意力收回自己身上，这会让整天变轻', '今天有机会遇到一个让心里变亮的小平衡'],
  scorpio: ['某个沉着的判断会帮你绕开消耗', '你今天会更清楚地知道，什么值得靠近，什么可以放过'],
  sagittarius: ['一个小选择会让你重新感觉到自由', '今天会有一阵风，把你的心从卡住的地方带出来'],
  capricorn: ['你长期积攒的认真，会在今天帮你省下一点力气', '今天不需要硬撑到底，也会有事情稳稳落地'],
  aquarius: ['一个不一样的想法，会给今天开一扇亮窗', '你今天会在自己的节奏里找到一点久违的轻盈'],
  pisces: ['你的敏感今天会变成温柔的导航', '今天会有一件小事提醒你，世界也有很轻的一面']
}

const themes = [
  {
    id: 'sunrise',
    title: '有光照进来',
    goodNews: '今天会有一个小小的好消息先抵达：不是轰轰烈烈，而是某个瞬间忽然没那么沉。',
    sunbeam: '把它当成一束清晨的光，先照亮你心里最靠窗的位置。',
    gentleMove: '你只需要顺着这点亮意，把今天最容易完成的那一步先做了。'
  },
  {
    id: 'ease',
    title: '事情会松一点',
    goodNews: '今天的好事，是你不必把所有答案一次找齐，也能先往前走。',
    sunbeam: '有些压力会在你降低一点用力之后，自己露出缝隙。',
    gentleMove: '把最重的任务切小，只处理第一块，你会更快看见路。'
  },
  {
    id: 'arrival',
    title: '温柔正在靠近',
    goodNews: '今天适合相信：你正在等的某种回应，可能会以很小的形式出现。',
    sunbeam: '它可能是一句好话、一点顺利、一个刚刚好的停顿。',
    gentleMove: '留心那些让你心里变软的细节，它们是在提醒你继续。'
  },
  {
    id: 'clarity',
    title: '心会亮起来',
    goodNews: '今天会有一个让你更清楚的时刻，帮你把杂乱的念头放回原位。',
    sunbeam: '清楚本身就是礼物，它会让你不用再和每个念头拉扯。',
    gentleMove: '先写下此刻最重要的一件事，其余的可以晚一点再回答。'
  }
]

const dailyQuotes = [
  '你要去相信，没有到不了的明天。',
  '日子会慢慢变亮，像窗边一点一点升起的晨光。',
  '先把心放轻，路会在脚下露出温柔的形状。',
  '今天不必盛大，只要有一点点向前，就是好消息。',
  '把自己照顾好，答案会在安静里慢慢靠近。',
  '愿你在寻常的一天里，也遇见值得微笑的小事。',
  '风会带走疲惫，也会把新的可能送到你面前。',
  '请允许自己慢一点，光也会慢慢抵达。'
]

const luckyColors = [
  { name: '晨曦杏', hex: '#f4b66d' },
  { name: '海盐蓝', hex: '#79a8c7' },
  { name: '月光白', hex: '#f7ead1' },
  { name: '鼠尾草绿', hex: '#8faa82' },
  { name: '玫瑰陶土', hex: '#c77f67' },
  { name: '蜂蜜金', hex: '#e1a93f' },
  { name: '薄雾紫', hex: '#b49ac8' },
  { name: '栗子棕', hex: '#9a6847' }
]

const luckyCues = ['留意一束自然光', '让第一口水慢一点', '把窗帘拉开一点', '给自己留三分钟安静', '听一首让心变亮的歌']

function hash(value: string): number {
  let result = 0
  for (let index = 0; index < value.length; index++) {
    result = (result * 31 + value.charCodeAt(index)) >>> 0
  }
  return result
}

function pick<T>(items: T[], seed: string): T {
  return items[hash(seed) % items.length]
}

export function generateCard(input: { signId: ZodiacSign['id']; date: string }): FortuneCard {
  const theme = pick(themes, `${input.signId}:${input.date}:theme`)
  const tendency = pick(signTendencies[input.signId], `${input.signId}:${input.date}:tendency`)
  const quote = pick(dailyQuotes, `${input.signId}:${input.date}:quote`)
  const luckyColor = pick(luckyColors, `${input.signId}:${input.date}:luckyColor`)

  return {
    signId: input.signId,
    signName: signNames[input.signId],
    date: input.date,
    theme: theme.id,
    title: theme.title,
    message: `${tendency}。${theme.goodNews}`,
    goodNews: theme.goodNews,
    sunbeam: theme.sunbeam,
    quote,
    luckyColor,
    gentleMove: theme.gentleMove,
    luckyCue: pick(luckyCues, `${input.signId}:${input.date}:luckyCue`)
  }
}
