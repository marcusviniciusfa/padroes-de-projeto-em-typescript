import { describe, expect, it } from 'vitest'
import { BankHandler, BitcoinHandler, PaypalHandler } from './chain-of-responsibility'

describe('chain of responsibility', () => {
  it('deve fazer um pagamento com o a conta bancária', () => {
    const bankHandler = new BankHandler(100)
    const paypalHandler = new PaypalHandler(200)
    const bitcoinHandler = new BitcoinHandler(300)

    bankHandler.setSuccessor(paypalHandler).setSuccessor(bitcoinHandler)

    const balance = bankHandler.pay(99)
    expect(balance).toBe(1)
  })

  it('deve fazer um pagamento com o a conta paypal', () => {
    const bankHandler = new BankHandler(100)
    const paypalHandler = new PaypalHandler(200)
    const bitcoinHandler = new BitcoinHandler(300)

    // ordem diferente
    paypalHandler.setSuccessor(bankHandler).setSuccessor(bitcoinHandler)

    const balance = paypalHandler.pay(50)
    expect(balance).toBe(150)
  })

  it('deve fazer um pagamento com o a conta bitcoin', () => {
    const bankHandler = new BankHandler(100)
    const paypalHandler = new PaypalHandler(200)
    const bitcoinHandler = new BitcoinHandler(300)

    bankHandler.setSuccessor(paypalHandler).setSuccessor(bitcoinHandler)

    const balance = bankHandler.pay(201)
    expect(balance).toBe(99)
  })

  it('deve lançar uma exception quando não houver uma conta com saldo suficiente', () => {
    const bankHandler = new BankHandler(100)
    const paypalHandler = new PaypalHandler(200)
    const bitcoinHandler = new BitcoinHandler(300)

    bankHandler.setSuccessor(paypalHandler).setSuccessor(bitcoinHandler)
    expect(() => bankHandler.pay(301)).toThrowError('não existe conta com saldo suficiente')
  })
})
