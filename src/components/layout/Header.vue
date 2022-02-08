<template>
  <nav class="navbar navbar-dark bg-dark box-shadow">
    <div class="container d-flex justify-content-between">
      <a
        class="navbar-brand d-flex align-items-center"
        href="/">Магазин</a>
      <b-button
        v-if="!inCart"
        @click="onCartClick">
        В корзине: {{ cartQuantity }} ({{ cartTotal | currency }})
      </b-button>
    </div>
  </nav>
</template>

<script lang="ts">
import { BButton } from 'bootstrap-vue'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { currency } from '@/filters'

@Component({
  name: 'Header',
  filters: {
    currency
  },
  components: {
    BButton
  }
})
export default class Header extends Vue {
  @Prop({ type: String, default: '0.00' }) cartTotal!: number
  @Prop({ type: Number, default: 0 }) cartQuantity!: number

  get inCart() {
    return this.$route && this.$route.name === 'Cart'
  }

  onCartClick() {
    this.$router.push({ name: 'Cart' })
  }
}
</script>
