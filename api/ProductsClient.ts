import { waitingForServerResponse } from '@/helpers/wait'
import { products } from '../mocks/Product'
import { IProduct } from '../types/IProduct'

export class ProductsClient {
  async get(id: number): Promise<IProduct | undefined> {
    await waitingForServerResponse()
    return products.find(x => x.id === id)
  }

  async getList(): Promise<IProduct[]> {
    await waitingForServerResponse()
    return products
  }
}
