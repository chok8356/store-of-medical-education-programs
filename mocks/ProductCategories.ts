import { ICategory } from '../types/ICategory'

export const PRODUCTS_CATEGORIES_COUNT = 5

export const categories: ICategory[] = new Array(PRODUCTS_CATEGORIES_COUNT)
  .fill(null)
  .map((x, i) => {
    const id = i + 1
    return {
      id,
      name: `Категория ${id}`
    }
  })
