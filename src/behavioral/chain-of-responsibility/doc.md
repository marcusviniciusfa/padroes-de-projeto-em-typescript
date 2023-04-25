[⬅️ voltar](/src/behavioral/doc.md)

## Chain Of Responsibility

O Chain Of Responsibility é um padrão que serve para evitar o acoplamento do remetente de uma solicitação ao seu receptor, ao dar a mais de um objeto a oportunidade de tratar a solicitação. Ele encadeia os objetos receptores, passando a solicitação ao longo da cadeia de objetos sucessores até que um deles a trate. Cada receptor, também chamado de _handler_, decide se processa a solicitação ou o passa adiante para o próximo receptor na corrente. Os elos da corrente podem ser compostos dinamicamente em tempo de execução com qualquer handler que siga uma interface de handler padrão.

<img src="./chain-of-responsibility-diagram.svg" alt="Chain Of Responsibility Diagram" width="100%">

### Exemplos

Essa é implementação do Chain Of Responsibility proposta no livro Padrões de Projeto, do "GoF".

Primeiro, temos a interface `Handler` e uma classe abstrata (para aproveitar o reuso, evitando a duplicação de código nas subclasses) que implementa a interface com os métodos `setSuccessor` (ou `setNext`), responsável por adicionar o próximo objeto que será chamado na cadeia, caso o objeto atual não consiga tratar a solicitação, e o `handle` (aqui nomeado de `pay` para se adequar ao negócio) que verifica se o `Handler` atual consegue tratar a solicitação ou se precisa repassar para o seu sucessor na cadeia de handlers.

~~~ts
// chain-of-responsibility.ts

interface Handler {
  setSuccessor(successor: Handler): Handler
  // método handle
  pay(amountToPay: number): any
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
~~~

Em seguida temos a implementação dos handlers, que estendem da classe abstrata. Cada handler pode ter outros métodos e lógica a mais que não necessariamente compartilhe entre os demais handlers. Porém, todos eles devem poder se ligar a novos sucessores para compor a cadeia de handlers e devem saber repassar a responsabilidade de tratar a solicitação para o próximo.

~~~ts
// chain-of-responsibility.ts

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
~~~

E então, pode ser utilizado assim

~~~ts
// chain-of-responsibility.ts

const bankHandler = new BankHandler(100)
const paypalHandler = new PaypalHandler(200)
const bitcoinHandler = new BitcoinHandler(300)

// a ordem do encadeamento importa!
bankHandler.setSuccessor(paypalHandler).setSuccessor(bitcoinHandler)

// cliente
function pay(amoutToPay: number): number {
  const balance = bankHandler.pay(amoutToPay)
  return balance
}

const balance = pay(201)
// saídas:
// tentando pagar com a conta BankHandler...
// tentando pagar com a conta PaypalHandler...
// tentando pagar com a conta BitcoinHandler...
// pago!
// saldo: $99.00

console.log(balance) // saída: 99
~~~

### Quando usar?

Pode ser utilizado quando se espera que o processamento de das solicitações (algum input) possa ser feito de várias maneiras, criando a necessidade de testes (utilizando uma estrutura com `if` ou `switch`) para atribuir o processamento da solicitação para uma parte específica de código (o que gera acoplamento e quebra do princípio [Single Responsibility](https://github.com/marcusviniciusfa/clean-code-javascript#princ%C3%ADpio-da-responsabilidade-%C3%BAnica-srp))
