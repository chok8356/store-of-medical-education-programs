import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { IProductFilters } from '../../../types/IProduct'

@Module({
  namespaced: true
})

export default class ProductFiltersStore extends VuexModule {
  public filters: IProductFilters = {
    query: '',
    selectedCategory: null
  }

  @Mutation
  SET_FILTERS(filters: IProductFilters) {
    this.filters = filters
  }
}
