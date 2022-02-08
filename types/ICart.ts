import { IProduct } from './IProduct'

export interface ICart {
  [id: number]: ICartItem
}

export interface ICartItem extends Pick<IProduct, 'id' | 'name' | 'price'> {
  quantity: number;
}
