import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { CartClient } from '../../api/CartClient'
import { ICart } from '../../types/ICart'

const client = new CartClient()

@Module({
  namespaced: true
})

export default class CartStore extends VuexModule {
  cart: ICart = {}
  cartLoading = false

  get total() {
    return Object.values(this.cart).reduce((acc, x) => {
      if (x) return x.price * x.quantity + acc
    }, 0).toFixed(2)
  }

  get quantity() {
    return Object.values(this.cart).reduce((acc, x) => {
      if (x) return x.quantity + acc
    }, 0)
  }

  @Mutation
  SET_CART(cart: ICart) {
    this.cart = cart
  }

  @Mutation
  SET_CART_LOADING(cartLoading: boolean) {
    this.cartLoading = cartLoading
  }

  @Action({ commit: 'SET_CART' })
  async getCart() {
    this.context.commit('SET_CART_LOADING', true)
    const data = await client.get()
    this.context.commit('SET_CART_LOADING', false)
    return data
  }

  @Action({ commit: 'SET_CART' })
  async addToCart(id: number) {
    this.context.commit('SET_CART_LOADING', true)
    const data = await client.add(id)
    this.context.commit('SET_CART_LOADING', false)
    return data
  }

  @Action({ commit: 'SET_CART' })
  async removeFromCart(id: number) {
    this.context.commit('SET_CART_LOADING', true)
    const data = await client.remove(id)
    this.context.commit('SET_CART_LOADING', false)
    return data
  }

  @Action({ commit: 'SET_CART' })
  async clearCart() {
    this.context.commit('SET_CART_LOADING', true)
    const data = await client.removeAll()
    this.context.commit('SET_CART_LOADING', false)
    return data
  }
}
