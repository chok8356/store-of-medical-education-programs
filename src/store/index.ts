import Vue from 'vue'
import Vuex from 'vuex'

import cart from './cart'
import category from './category'
import product from './product/product'
import productFilters from './product/productFilters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    category,
    product,
    productFilters
  }
})
