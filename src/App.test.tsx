import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, test } from 'vitest'
import App from './App'

describe('App', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders compact popup birthday selector without landing hero', () => {
    render(<App />)

    expect(screen.getByText('DayDayUp')).toBeInTheDocument()
    expect(screen.queryByText('选择生日')).not.toBeInTheDocument()
    expect(screen.getByLabelText('月份')).toBeInTheDocument()
    expect(screen.getByLabelText('日期')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '开启今日好运' })).toBeInTheDocument()

    expect(screen.queryByText('Morning light for your sign')).not.toBeInTheDocument()
    expect(screen.queryByText('让今天先被一束光照亮。')).not.toBeInTheDocument()
    expect(screen.queryByText(/选择生日，收下一张写给今天的星座好消息卡/)).not.toBeInTheDocument()
    expect(screen.queryByText(/天秤座 \/ Libra/)).not.toBeInTheDocument()
  })

  test('generates a daily card from birthday month and day', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.selectOptions(screen.getByRole('combobox', { name: '月份' }), '9')
    await user.selectOptions(screen.getByRole('combobox', { name: '日期' }), '23')
    await user.click(screen.getByRole('button', { name: '开启今日好运' }))

    expect(screen.getByText(/天秤座 \/ Libra/)).toBeInTheDocument()
    expect(screen.getByText(/今日一句/)).toBeInTheDocument()
    expect(screen.getByText(/今天可以这样迎接/)).toBeInTheDocument()
    expect(screen.getByText(/幸运提示/)).toBeInTheDocument()
    expect(screen.queryByText(/今日幸运色/)).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()
  })

  test('shows an error for invalid birthday selections', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.selectOptions(screen.getByRole('combobox', { name: '月份' }), '2')
    await user.selectOptions(screen.getByRole('combobox', { name: '日期' }), '30')
    await user.click(screen.getByRole('button', { name: '开启今日好运' }))

    expect(screen.getByText('请输入有效生日')).toBeInTheDocument()
    expect(screen.queryByText(/今日一句/)).not.toBeInTheDocument()
  })
})
