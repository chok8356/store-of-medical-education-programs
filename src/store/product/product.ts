import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { ProductsClient } from '../../../api/ProductsClient'
import { IProduct } from '../../../types/IProduct'

const productClient = new ProductsClient()

@Module({
  namespaced: true
})

export default class ProductStore extends VuexModule {
  public products: IProduct[] = []

  get filteredProducts() {
    const filters = this.context.rootState.productFilters.filters
    const query = filters.query.trim().toLowerCase()
    const selectedCategory = filters.selectedCategory

    if (!query && !selectedCategory) return this.products

    return this.products.filter(x => {
      const nameIncludesQuery = x.name.trim().toLowerCase().includes(query)
      const descriptionIncludesQuery = x.description.trim().toLowerCase().includes(query)
      const equalSelectedCategory = selectedCategory ? x.category === selectedCategory : true
      return (nameIncludesQuery || descriptionIncludesQuery) && equalSelectedCategory
    })
  }

  @Mutation
  SET_PRODUCTS(products: IProduct[]) {
    this.products = products
  }

  @Action({ commit: 'SET_PRODUCTS' })
  async getProducts() {
    return await productClient.getList()
  }

  // Detail
  public detailProduct: IProduct | null = null

  @Mutation
  SET_DETAIL_PRODUCT(detailProduct: IProduct | null) {
    this.detailProduct = detailProduct
  }

  @Action({ commit: 'SET_DETAIL_PRODUCT' })
  async getDetailProduct(id: number) {
    return await productClient.get(id)
  }
}
