<template>
  <b-card
    v-if="product"
    class="overflow-hidden">
    <b-row>
      <b-col md="6">
        <b-card-img :src="product.img" />
      </b-col>
      <b-col md="6">
        <b-card-body>
          <h1 class="mb-4">
            {{ product.name }}
          </h1>

          <b-card-text>
            {{ product.description }}
          </b-card-text>

          <b-badge variant="info">
            {{ category.name }}
          </b-badge>

          <div class="d-block mt-4">
            <b-button
              variant="primary"
              @click="addToCart">
              В корзину
            </b-button>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script lang="ts">
import { BCard, BRow, BCol, BCardBody, BCardText, BBadge, BButton, BCardImg } from 'bootstrap-vue'
import { PropType } from 'vue'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ICategory } from '../../../types/ICategory'
import { IProduct } from '../../../types/IProduct'

@Component({
  name: 'ProductDetail',
  components: {
    BCard, BRow, BCol, BCardBody, BCardText, BBadge, BButton, BCardImg
  }
})
export default class ProductDetail extends Vue {
  @Prop({ type: Object as PropType<IProduct> }) product!: IProduct
  @Prop({ type: Object as PropType<ICategory> }) category!: ICategory

  addToCart() {
    this.$emit('add-to-cart')
  }
}
</script>
