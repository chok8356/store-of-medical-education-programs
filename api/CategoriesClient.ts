import { waitingForServerResponse } from '@/helpers/wait'
import { categories } from '../mocks/ProductCategories'
import { ICategory } from '../types/ICategory'

export class CategoriesClient {
  async getList(): Promise<ICategory[]> {
    await waitingForServerResponse()
    return await categories
  }
}
