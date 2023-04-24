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

function orderIPhone(): IPhone {
  const device: IPhone = new IPhoneX()
  // const device = new IPhone11()
  return device
}

const device = orderIPhone()
console.log(device.getHardware()) // saída: hardware do IPhoneX
