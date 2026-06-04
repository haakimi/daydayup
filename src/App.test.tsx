import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import App from './App'

describe('App', () => {
  test('generates a daily card from birthday month and day', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.selectOptions(screen.getByLabelText('月份'), '9')
    await user.selectOptions(screen.getByLabelText('日期'), '23')
    await user.click(screen.getByRole('button', { name: '开启今日好运' }))

    expect(screen.getByText(/天秤座 \/ Libra/)).toBeInTheDocument()
    expect(screen.getByText(/今日一句/)).toBeInTheDocument()
    expect(screen.queryByText(/今日幸运色/)).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()
    expect(screen.getByText(/今天可以这样迎接/)).toBeInTheDocument()
  })
})
