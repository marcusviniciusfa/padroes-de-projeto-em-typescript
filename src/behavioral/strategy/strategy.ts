interface OperationStrategy {
  calculate(a: number, b: number): number
}

export class CalculatorContext {
  constructor(private strategy: OperationStrategy) {
    this.strategy = strategy
  }

  setStrategy(strategy: OperationStrategy) {
    this.strategy = strategy
  }

  calculate(a: number, b: number): number {
    return this.strategy.calculate(a, b)
  }
}

export class AdditionStrategy implements OperationStrategy {
  calculate(a: number, b: number): number {
    return a + b
  }
}

export class SubtractionStrategy implements OperationStrategy {
  calculate(a: number, b: number): number {
    return a - b
  }
}

export class MultiplicationStrategy implements OperationStrategy {
  calculate(a: number, b: number): number {
    return a * b
  }
}

export class DivisionStrategy implements OperationStrategy {
  calculate(a: number, b: number): number {
    return a / b
  }
}
