import { ICategory } from './ICategory'

export interface IProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string
  category: ICategory['id']
}

export interface IProductFilters {
  query: IProduct['name'] | IProduct['description'],
  selectedCategory: ICategory['id'] | null
}
