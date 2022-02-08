<template>
  <div
    id="app"
    class="app">
    <header class="app__header">
      <Header
        :cart-quantity="cartQuantity"
        :cart-total="cartTotal" />
    </header>
    <main class="app__main container py-5">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Header from '@/components/layout/Header.vue'

const CartStore = namespace('cart')

@Component({
  name: 'App',
  components: { Header }
})
export default class App extends Vue {
  @CartStore.Getter('total') cartTotal!: number
  @CartStore.Getter('quantity') cartQuantity!: number
  @CartStore.Action getCart: any

  created() {
    this.getCart()
  }
}
</script>

<style lang="scss">
.app {
  &__header {
    position: sticky;
    top: 0;
    z-index: 2;
  }
}
</style>
