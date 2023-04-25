interface Chair {
  getDescription(): string
}

class VictorianChair implements Chair {
  getDescription(): string {
    return 'cadeira com estilo vitoriano'
  }
}

class ModernChair implements Chair {
  getDescription(): string {
    return 'cadeira com estilo moderno'
  }
}

interface CoffeeTable {
  getDescription(): string
}

class VictorianCofeeTable implements Chair {
  getDescription(): string {
    return 'mesa de centro com estilo vitoriano'
  }
}

class ModernCoffeTable implements Chair {
  getDescription(): string {
    return 'mesa de centro com estilo moderno'
  }
}

interface Sofa {
  getDescription(): string
}

class VictorianSofa implements Chair {
  getDescription(): string {
    return 'sofa com estilo vitoriano'
  }
}

class ModernSofa implements Chair {
  getDescription(): string {
    return 'sofa com estilo moderno'
  }
}

interface FurnitureFactory {
  createChair(): Chair
  createCoffeeTable(): CoffeeTable
  createSofa(): Sofa
}

export class VictorianFurnitureFactory {
  createChair(): Chair {
    return new VictorianChair()
  }

  createCoffeeTable(): CoffeeTable {
    return new VictorianCofeeTable()
  }

  createSofa(): Sofa {
    return new VictorianSofa()
  }
}

export class ModernFurnitureFactory {
  createChair(): Chair {
    return new ModernChair()
  }

  createCoffeeTable(): CoffeeTable {
    return new ModernCoffeTable()
  }

  createSofa(): Sofa {
    return new ModernSofa()
  }
}

export class FurnitureStore {
  constructor(private furnitureFactory: FurnitureFactory) {
    this.furnitureFactory = furnitureFactory
  }

  orderFurniture(item: 'chair' | 'coffeeTable' | 'sofa') {
    if (item === 'chair') {
      return this.furnitureFactory.createChair()
    }
    if (item === 'coffeeTable') {
      return this.furnitureFactory.createCoffeeTable()
    }
    if (item === 'sofa') {
      return this.furnitureFactory.createSofa()
    }
    throw new Error('invalid item')
  }
}
