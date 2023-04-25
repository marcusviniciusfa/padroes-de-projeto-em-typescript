import { describe, expect, it } from 'vitest'
import { IPhone11Factory, IPhoneXFactory } from './after-factory-method'

describe('factory method', () => {
  it('deve criar um iphone x', () => {
    const factory = new IPhoneXFactory()
    const iphone = factory.createIPhone()
    const hardware = iphone.getHardware()
    expect(hardware).toBe('hardware do IPhoneX')
    expect(hardware).not.toBe('hardware do IPhone11')
  })

  it('deve criar um iphone 11', () => {
    const factory = new IPhone11Factory()
    const iphone = factory.createIPhone()
    const hardware = iphone.getHardware()
    expect(hardware).toBe('hardware do IPhone11')
    expect(hardware).not.toBe('hardware do IPhoneX')
  })
})
