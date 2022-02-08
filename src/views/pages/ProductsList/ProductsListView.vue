<template>
  <div class="products-list-view">
    <div class="row">
      <div class="col-3">
        <ProductsListFilters
          v-loading="isLoadingCategories"
          :categories="categories"
          :filters="filters"
          @change="onFiltersChange" />
      </div>
      <div class="col-9">
        <ProductsList
          v-loading="isLoadingProducts"
          :products="filteredProducts"
          @add-to-cart="onAddToCart"
          @show-detail="onShowDetail" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ProductsList from '@/components/ProductsList/ProductsList.vue'
import ProductsListFilters from '@/components/ProductsList/ProductsListFilters.vue'
import { loading } from '@/directives'
import { ICategory } from '../../../../types/ICategory'
import { IProduct, IProductFilters } from '../../../../types/IProduct'

const ProductStore = namespace('product')
const ProductFiltersStore = namespace('productFilters')
const CategoryStore = namespace('category')
const CartStore = namespace('cart')
@Component({
  name: 'ProductsListView',
  components: { ProductsList, ProductsListFilters },
  directives: {
    loading
  }
})
export default class ProductsListView extends Vue {
  @ProductStore.Getter filteredProducts: IProduct[]
  @ProductStore.Action getProducts: any

  @ProductFiltersStore.State filters: IProductFilters
  @ProductFiltersStore.Mutation('SET_FILTERS') setFilters: any

  @CategoryStore.State categories: ICategory[]
  @CategoryStore.Action getCategories: any

  @CartStore.Action addToCart: any

  isLoadingCategories = true
  isLoadingProducts = true

  created() {
    this.getProducts().then(() => {
      this.isLoadingProducts = false
    })

    this.getCategories().then(() => {
      this.isLoadingCategories = false
    })
  }

  onFiltersChange(value: IProductFilters) {
    this.setFilters(value)
  }

  onAddToCart(product: IProduct) {
    this.addToCart(product.id)
  }

  onShowDetail(product: IProduct) {
    this.$router.push({ name: 'ProductDetail', params: { id: product.id.toString() } })
  }
}
</script>
