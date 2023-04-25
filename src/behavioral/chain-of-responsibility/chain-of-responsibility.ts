interface Handler {
  setSuccessor(successor: Handler): Handler
  // método handle
  pay(amountToPay: number): number
}

abstract class AccountHandler implements Handler {
  protected balance: number
  private successor: Handler

  constructor(balance: number) {
    this.balance = balance
  }

  setSuccessor(successor: Handler): Handler {
    this.successor = successor
    return successor
  }

  // método handle
  pay(amountToPay: number): number {
    console.log(`tentando pagar com a conta ${this.constructor.name}...`)
    if (this.canPay(amountToPay)) {
      this.balance -= amountToPay
      console.log(`pago!`)
      console.log(`saldo: $${this.balance.toFixed(2)}`)
      return this.balance
    }
    if (this.successor) {
      return this.successor.pay(amountToPay)
    }
    throw new Error('não existe conta com saldo suficiente')
  }

  private canPay(amount: number): boolean {
    return this.balance >= amount
  }
}

export class BankHandler extends AccountHandler {
  constructor(balance: number) {
    super(balance)
  }
}

export class PaypalHandler extends AccountHandler {
  constructor(balance: number) {
    super(balance)
  }
}

export class BitcoinHandler extends AccountHandler {
  constructor(balance: number) {
    super(balance)
  }
}
