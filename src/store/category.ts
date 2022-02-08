import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { CategoriesClient } from '../../api/CategoriesClient'
import { ICategory } from '../../types/ICategory'

const client = new CategoriesClient()

@Module({
  namespaced: true
})

export default class CategoryStore extends VuexModule {
  categories: ICategory[] = []

  @Mutation
  SET_CATEGORIES(categories: ICategory[]) {
    this.categories = categories
  }

  @Action({ commit: 'SET_CATEGORIES' })
  async getCategories() {
    return await client.getList()
  }
}
