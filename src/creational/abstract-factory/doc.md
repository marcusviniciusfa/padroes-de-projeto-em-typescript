[⬅️ voltar](/src/creational/doc.md)

## Abstract Factory

O Abstract Factory fornece uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. O código cliente chama os métodos de criação de uma fábrica ao invés de criar um produto diretamente (utilizando o construtor com `new`). Cada fábrica está relacionada a uma variante do produto, sendo assim, todos os produtos que ela cria pertencem a uma mesma família.

<img src="./abstract-factory-diagram.svg" alt="Abstract Factory Diagram" width="100%">

### Exemplos

Essa é a implementação do Abstract Factory proposta no livro Padrões de Projeto, do "GoF".

Primeiro, temos as interfaces para cada produto (`Chair`, `CoffeeTable` e `Sofa`) e as suas implementações concretas de acordo com suas famílias.

~~~ts
// abstract-factory.ts

interface Chair {
  getDescription(): string
}

interface CoffeeTable {
  getDescription(): string
}

interface Sofa {
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
~~~

Em seguida temos a interface `FurnituryFactory`, com os seus métodos para a criação de cada produto, e as suas implementações para cada família de produto

~~~ts
// abstract-factory.ts

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
~~~

E então, pode ser utilizado assim

~~~ts
// abstract-factory.ts

export class FurnitureStore {
  constructor(private furnitureFactory: FurnitureFactory) { // inversão de dependência
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

// cliente
function orderFurniture() {
    const furnitureFactory = new FurnitureStore(new ModernFurnitureFactory()) // injeção de dependência
    // const furnitureFactory = new FurnitureStore(new VictorianFurnitureFactory())
    const chair = furnitureFactory.orderFurniture('chair')
    const coffeeTable = furnitureFactory.orderFurniture('coffeeTable')
    const sofa = furnitureFactory.orderFurniture('sofa')
    console.log(chair.getDescription()) // saída: cadeira com estilo moderno
    console.log(coffeeTable.getDescription()) // saída: mesa de centro com estilo moderno
    console.log(sofa.getDescription()) // saída: sofa com estilo moderno
}
~~~

### Quando usar?

Pode ser utilizado quando existem famílias de produtos relacionados, principalmente em casos onde a lógica de criação não é tão simples. Assim, não irá depender das classes concretas dos produtos.
