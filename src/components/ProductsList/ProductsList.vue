<template>
  <div class="products-list">
    <div class="row m-n2">
      <template v-if="products.length">
        <div
          v-for="product in products"
          :key="product.id"
          class="products-list__item col-md-4 p-2">
          <ProductsListCard
            :product="product"
            @add-to-cart="addToCart(product)"
            @show-detail="showDetail(product)" />
        </div>
      </template>
      <div
        v-else
        class="d-block text-center text-muted p-5">
        Нет продуктов.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import ProductsListCard from '@/components/ProductsList/ProductsListCard.vue'
import { IProduct } from '../../../types/IProduct'

@Component({
  name: 'ProductsList',
  components: { ProductsListCard }
})
export default class ProductsList extends Vue {
  @Prop({ type: Array, default: () => [] }) products!: IProduct[]

  addToCart(product: IProduct) {
    this.$emit('add-to-cart', product)
  }

  showDetail(product: IProduct) {
    this.$emit('show-detail', product)
  }
}
</script>

<style lang="scss">
.products-list {
  display: block;
  width: 100%;
}
</style>
