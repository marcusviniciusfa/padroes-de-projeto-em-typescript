import { describe, expect, it } from 'vitest'
import { FurnitureStore, ModernFurnitureFactory, VictorianFurnitureFactory } from './abstract-factory'

describe('abstract factory', () => {
  it('deve criar móveis de estilo moderno', () => {
    const furnitureFactory = new FurnitureStore(new ModernFurnitureFactory())
    const chair = furnitureFactory.orderFurniture('chair')
    const coffeeTable = furnitureFactory.orderFurniture('coffeeTable')
    const sofa = furnitureFactory.orderFurniture('sofa')
    expect(chair.getDescription()).toBe('cadeira com estilo moderno')
    expect(coffeeTable.getDescription()).toBe('mesa de centro com estilo moderno')
    expect(sofa.getDescription()).toBe('sofa com estilo moderno')
  })

  it('deve criar móveis de estilo vitoriano', () => {
    const furnitureFactory = new FurnitureStore(new VictorianFurnitureFactory())
    const chair = furnitureFactory.orderFurniture('chair')
    const coffeeTable = furnitureFactory.orderFurniture('coffeeTable')
    const sofa = furnitureFactory.orderFurniture('sofa')
    expect(chair.getDescription()).toBe('cadeira com estilo vitoriano')
    expect(coffeeTable.getDescription()).toBe('mesa de centro com estilo vitoriano')
    expect(sofa.getDescription()).toBe('sofa com estilo vitoriano')
  })
})
