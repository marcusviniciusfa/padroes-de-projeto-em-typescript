export interface IPhone {
  getHardware(): string
}

export class IPhoneX implements IPhone {
  getHardware(): string {
    return 'hardware do IPhoneX'
  }
}

export class IPhone11 implements IPhone {
  getHardware(): string {
    return 'hardware do IPhone11'
  }
}

export class IPhoneSimpleFactory {
  static createIPhone(model: string): IPhone {
    if (model === 'X') {
      return new IPhoneX()
    }
    if (model === '11') {
      return new IPhone11()
    }
    throw new Error('modelo inválido')
  }
}
