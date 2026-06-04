import { useState, type CSSProperties } from 'react'
import { generateCard, type FortuneCard } from './core/generateCard'
import { getZodiacSign } from './core/zodiac'
import './style.css'

const months = Array.from({ length: 12 }, (_, index) => index + 1)
const days = Array.from({ length: 31 }, (_, index) => index + 1)

function todayIso() {
  return new Date().toISOString().slice(0, 10)
}

export default function App() {
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [error, setError] = useState('')
  const [card, setCard] = useState<FortuneCard | null>(null)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setError('')

    try {
      const sign = getZodiacSign(Number(month), Number(day))
      setCard(generateCard({ signId: sign.id, date: todayIso() }))
    } catch {
      setCard(null)
      setError('请输入有效生日')
    }
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Morning light for your sign</p>
        <h1>让今天先被一束光照亮。</h1>
        <p className="intro">选择生日，收下一张写给今天的星座好消息卡。</p>
      </section>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          月份
          <select value={month} onChange={(event) => setMonth(event.target.value)}>
            <option value="">选择月份</option>
            {months.map((value) => (
              <option key={value} value={value}>{value}月</option>
            ))}
          </select>
        </label>

        <label>
          日期
          <select value={day} onChange={(event) => setDay(event.target.value)}>
            <option value="">选择日期</option>
            {days.map((value) => (
              <option key={value} value={value}>{value}日</option>
            ))}
          </select>
        </label>

        <button type="submit">开启今日好运</button>
        {error && <p className="error">{error}</p>}
      </form>

      {card && (
        <article
          className="card"
          style={{ '--lucky-color': card.luckyColor.hex } as CSSProperties}
        >
          <div className="cardGlow" />
          <p className="date">{card.date} · {card.signName}</p>
          <div className="quoteBlock">
            <strong>今日一句</strong>
            <p>“{card.quote}”</p>
          </div>
          <div className="section">
            <strong>今天可以这样迎接</strong>
            <p>{card.gentleMove}</p>
          </div>
          <div className="section">
            <strong>幸运提示</strong>
            <p>{card.luckyCue}</p>
          </div>
        </article>
      )}
    </main>
  )
}
