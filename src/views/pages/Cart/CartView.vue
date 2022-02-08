<template>
  <div class="cart-view">
    <b-button
      class="mb-4"
      @click="backToStore">
      Назад в магазин
    </b-button>

    <h4>Товары</h4>
    <b-table
      v-loading="cartLoading"
      borderless
      :fields="fields"
      fixed
      hover
      :items="items"
      show-empty
      striped>
      <template #cell(price)="data">
        {{ data.value | currency }}
      </template>

      <template #cell(actions)="data">
        <b-icon
          class="cart-view__table-icon mr-1"
          icon="dash-square"
          @click="onRemoveClick(data.item)" />
        <b-icon
          class="cart-view__table-icon"
          icon="plus-square"
          @click="onAddClick(data.item)" />
      </template>

      <template
        v-if="items.length"
        #custom-foot>
        <b-tr>
          <b-th>
            Всего:
          </b-th>
          <b-th>
            {{ cartTotal | currency }}
          </b-th>
          <b-th>
            {{ cartQuantity }}
          </b-th>
        </b-tr>
      </template>

      <template #empty>
        Нет товаров
      </template>
    </b-table>

    <b-button
      v-if="items.length"
      class="mt-4"
      @click="clearCart">
      Очистить корзину
    </b-button>
  </div>
</template>

<script lang="ts">
import { BButton, BTable, BTr, BTh, BIcon } from 'bootstrap-vue'
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { loading } from '@/directives'
import { currency } from '@/filters'
import { ICart, ICartItem } from '../../../../types/ICart'

const CartStore = namespace('cart')

@Component({
  name: 'CartView',
  directives: {
    loading
  },
  filters: {
    currency
  },
  components: {
    BButton, BTable, BTr, BTh, BIcon
  }
})
export default class CartView extends Vue {
  @CartStore.State cart!: ICart
  @CartStore.State cartLoading!: boolean

  @CartStore.Getter('total') cartTotal!: number
  @CartStore.Getter('quantity') cartQuantity!: number

  @CartStore.Action addToCart!: any
  @CartStore.Action removeFromCart!: any
  @CartStore.Action clearCart!: any

  fields = ['name', 'price', 'quantity', 'actions']

  get items() {
    return Object.values(this.cart)
  }

  backToStore() {
    this.$router.push({ name: 'ProductsList' })
  }

  onAddClick(product: ICartItem) {
    this.addToCart(product.id)
  }

  onRemoveClick(product: ICartItem) {
    this.removeFromCart(product.id)
  }
}
</script>

<style lang="scss">
.cart-view {
  &__table-icon {
    cursor: pointer;

    &:hover {
      color: var(--blue);
    }
  }
}
</style>
