import { describe, expect, it } from 'vitest'
import {
  AdditionStrategy,
  CalculatorContext,
  DivisionStrategy,
  MultiplicationStrategy,
  SubtractionStrategy,
} from './strategy'

describe('strategy', () => {
  it('deve somar dois valores', () => {
    const calculator = new CalculatorContext(new AdditionStrategy())
    const result = calculator.calculate(10, 2)
    expect(result).toBe(12)
  })

  it('deve subtrair dois valores', () => {
    const calculator = new CalculatorContext(new SubtractionStrategy())
    const result = calculator.calculate(10, 2)
    expect(result).toBe(8)
  })

  it('deve multiplicar dois valores', () => {
    const calculator = new CalculatorContext(new MultiplicationStrategy())
    const result = calculator.calculate(10, 2)
    expect(result).toBe(20)
  })

  it('deve dividir dois valores', () => {
    const calculator = new CalculatorContext(new DivisionStrategy())
    const result = calculator.calculate(10, 2)
    expect(result).toBe(5)
  })
})
