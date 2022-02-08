<template>
  <div class="product-detail-view">
    <b-button
      class="mb-4"
      @click="backToStore">
      Назад в магазин
    </b-button>

    <div
      v-loading="isProductLoading"
      class="product-detail-view__loader" />

    <ProductDetail
      v-if="detailProduct && category"
      :category="category"
      :product="detailProduct"
      @add-to-cart="onAddToCart" />
  </div>
</template>

<script lang="ts">
import { BButton } from 'bootstrap-vue'
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ProductDetail from '@/components/Product/ProductDetail.vue'
import { loading } from '@/directives'
import { ICategory } from '../../../../types/ICategory'
import { IProduct } from '../../../../types/IProduct'

const ProductStore = namespace('product')
const CartStore = namespace('cart')
const CategoryStore = namespace('category')

@Component({
  name: 'ProductDetailView',
  components: { ProductDetail, BButton },
  directives: {
    loading
  }
})
export default class ProductDetailView extends Vue {
  @ProductStore.State detailProduct: IProduct | null
  @ProductStore.Action getDetailProduct: any

  @CategoryStore.State categories: ICategory[]
  @CategoryStore.Action getCategories: any

  @CartStore.Action addToCart: any

  isProductLoading = true

  async created() {
    if (!this.categories.length) await this.getCategories()
    if (this.productIdFromRoute) await this.getDetailProduct(this.productIdFromRoute)
    this.isProductLoading = false
  }

  get category() {
    return this.categories.find(x => x.id === this.detailProduct?.category)
  }

  get productIdFromRoute() {
    const id = this.$route?.params?.id
    return id ? parseInt(id) : null
  }

  backToStore() {
    this.$router.push({ name: 'ProductsList' })
  }

  onAddToCart() {
    if (this.detailProduct) this.addToCart(this.detailProduct.id)
  }
}
</script>
