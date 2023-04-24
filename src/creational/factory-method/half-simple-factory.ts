export interface IPhone {
  getHardware(): string
}

export class IPhoneX implements IPhone {
  getHardware(): string {
    return 'hardware do IPhoneX'
  }
}

export class IPhoneXSMax implements IPhone {
  getHardware(): string {
    return 'hardware do IPhoneXSMax'
  }
}

export class IPhone11 implements IPhone {
  getHardware(): string {
    return 'hardware do IPhone11'
  }
}

export class IPhone11Pro implements IPhone {
  getHardware(): string {
    return 'hardware do IPhone11Pro'
  }
}

export interface IPhoneFactory {
  createIPhone(model: string): IPhone
}

export class IPhoneXFactory implements IPhoneFactory {
  createIPhone(model: string): IPhone {
    if (model === 'standard') {
      return new IPhoneX()
    }
    if (model === 'xsmax') {
      return new IPhoneXSMax()
    }
    throw new Error('modelo inválido')
  }

  static createIPhone(model: string): IPhone {
    return IPhoneXFactory.createIPhone(model)
  }
}

export class IPhone11Factory implements IPhoneFactory {
  createIPhone(model: string): IPhone {
    if (model === 'standard') {
      return new IPhone11()
    }
    if (model === 'pro') {
      return new IPhone11Pro()
    }
    throw new Error('modelo inválido')
  }

  static createIPhone(model: string): IPhone {
    return IPhoneXFactory.createIPhone(model)
  }
}

// client
function orderIPhone(): IPhone {
  const factory = new IPhoneXFactory()
  const device = factory.createIPhone('xsmax')
  // const factory = new IPhone11Factory()
  // const device = factory.createIPhone('pro')
  return device
}

const device = orderIPhone()
console.log(device.getHardware()) // saída: hardware do IPhoneXSMax
