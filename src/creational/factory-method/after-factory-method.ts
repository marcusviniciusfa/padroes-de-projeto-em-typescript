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

export interface IPhoneFactory {
  createIPhone(): IPhone
}

export class IPhoneXFactory implements IPhoneFactory {
  createIPhone(): IPhone {
    return new IPhoneX()
  }
}

export class IPhone11Factory implements IPhoneFactory {
  createIPhone(): IPhone {
    return new IPhone11()
  }
}
