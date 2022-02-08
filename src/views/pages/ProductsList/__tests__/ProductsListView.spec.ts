import { createLocalVue, shallowMount } from '@vue/test-utils'

import Vuex from 'vuex'
import { products } from '@/../mocks/Product'
import ProductsList from '@/components/ProductsList/ProductsList.vue'
import ProductsListFilters from '@/components/ProductsList/ProductsListFilters.vue'
import CartStore from '@/store/cart'
import CategoryStore from '@/store/category'
import ProductStore from '@/store/product/product'
import ProductFiltersStore from '@/store/product/productFilters'

import ProductsListView from '../ProductsListView.vue'

const product = products[0]

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProductsListView', () => {
  let wrapper
  let actions
  let mutations
  let store

  beforeEach(() => {
    actions = {
      getProducts: jest.fn().mockImplementation(() => Promise.resolve()),
      getCategories: jest.fn().mockImplementation(() => Promise.resolve()),
      addToCart: jest.fn()
    }

    mutations = {
      SET_FILTERS: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        productFilters: {
          ...ProductFiltersStore,
          mutations: {
            SET_FILTERS: mutations.SET_FILTERS
          }
        },
        cart: {
          ...CartStore,
          actions: {
            addToCart: actions.addToCart
          }
        },
        product: {
          ...ProductStore,
          actions: {
            getProducts: actions.getProducts
          }
        },
        category: {
          ...CategoryStore,
          actions: {
            getCategories: actions.getCategories
          }
        }
      }
    })
    wrapper = shallowMount(ProductsListView, {
      store,
      localVue,
      mocks: {
        $router: {
          push: () => {
          }
        }
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('render correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('created get products', () => {
    expect(actions.getProducts).toHaveBeenCalled()
  })

  it('created get categories', () => {
    expect(actions.getCategories).toHaveBeenCalled()
  })

  it('set filters on change', () => {
    const productsListFiltersCmp = wrapper.findComponent(ProductsListFilters)
    productsListFiltersCmp.vm.$emit('change')
    expect(mutations.SET_FILTERS).toHaveBeenCalled()
  })

  it('add to cart', () => {
    const productsListComponent = wrapper.findComponent(ProductsList)
    productsListComponent.vm.$emit('add-to-cart', product)
    expect(actions.addToCart).toHaveBeenCalled()
  })

  it('show detail', () => {
    const routerPush = jest.spyOn(wrapper.vm.$router, 'push')
    const productsListComponent = wrapper.findComponent(ProductsList)
    productsListComponent.vm.$emit('show-detail', product)
    expect(routerPush).toBeCalled()
  })
})
