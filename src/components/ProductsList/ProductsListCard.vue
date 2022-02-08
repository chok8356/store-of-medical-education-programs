<template>
  <b-card
    class="products-list-card"
    :img-src="product.img">
    <b-card-text class="products-list-card__title mb-2">
      {{ product.name }}
    </b-card-text>

    <b-card-text class="font-weight-bold mb-2">
      {{ product.price | currency }}
    </b-card-text>

    <b-card-text class="products-list-card__description">
      {{ product.description | truncate(54) }}
    </b-card-text>

    <b-button-group size="sm">
      <b-button
        variant="outline-primary"
        @click="addToCart">
        В корзину
      </b-button>
      <b-button
        variant="outline-secondary"
        @click="showDetail">
        Подробнее
      </b-button>
    </b-button-group>
  </b-card>
</template>

<script lang="ts">
import { BCard, BCardText, BButtonGroup, BButton } from 'bootstrap-vue'
import { PropType } from 'vue'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { truncate, currency } from '@/filters'
import { IProduct } from '../../../types/IProduct'

@Component({
  name: 'ProductsListCard',
  filters: {
    truncate, currency
  },
  components: {
    BCard, BCardText, BButtonGroup, BButton
  }
})
export default class ProductsListCard extends Vue {
  @Prop({ type: Object as PropType<IProduct> }) product!: IProduct

  addToCart() {
    this.$emit('add-to-cart')
  }

  showDetail() {
    this.$emit('show-detail')
  }
}
</script>

<style lang="scss">
.products-list-card {
  cursor: pointer;

  &__title {
    font-size: 16px;
    font-weight: 500;
  }

  &__description {
    font-size: 13px;
  }
}
</style>
