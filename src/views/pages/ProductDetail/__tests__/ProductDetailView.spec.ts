import { createLocalVue, shallowMount } from '@vue/test-utils'

import { BButton } from 'bootstrap-vue'
import Vuex from 'vuex'
import { products } from '@/../mocks/Product'
import { categories } from '@/../mocks/ProductCategories'

import ProductDetail from '@/components/Product/ProductDetail.vue'
import CartStore from '@/store/cart'
import CategoryStore from '@/store/category'

import ProductStore from '@/store/product/product'
import ProductDetailView from '../ProductDetailView.vue'

const product = products[0]
const category = categories[1]

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProductDetailView', () => {
  let wrapper
  let actions
  let store

  beforeEach(() => {
    actions = {
      getCategories: jest.fn(),
      getDetailProduct: jest.fn(),
      addToCart: jest.fn()
    }
    store = {
      modules: {
        cart: {
          ...CartStore,
          actions: {
            addToCart: actions.addToCart
          }
        },
        product: {
          ...ProductStore,
          state: {
            detailProduct: product
          },
          actions: {
            getDetailProduct: actions.getDetailProduct
          }
        },
        category: {
          ...CategoryStore,
          state: {
            categories: [
              category
            ]
          },
          actions: {
            getCategories: actions.getCategories
          }
        }
      }
    }
    wrapper = shallowMount(ProductDetailView, {
      store: new Vuex.Store(store),
      localVue,
      mocks: {
        $route: {
          params: {
            id: product.id.toString()
          }
        },
        $router: { push: () => {} }
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('render correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('created get categories', () => {
    store.modules.category.state.categories = []
    wrapper = shallowMount(ProductDetailView, {
      store: new Vuex.Store(store),
      localVue
    })
    expect(actions.getCategories).toHaveBeenCalled()
  })

  it('get product data if has id in route', () => {
    expect(actions.getDetailProduct).toHaveBeenCalled()
  })

  it('computed product id from route', () => {
    expect(wrapper.vm.productIdFromRoute).toBe(product.id)
  })

  it('computed category by product category', () => {
    expect(wrapper.vm.category).toBe(category)
  })

  it('back to store', () => {
    const routerPush = jest.spyOn(wrapper.vm.$router, 'push')
    const buttonComponent = wrapper.findComponent(BButton)
    buttonComponent.trigger('click')
    expect(routerPush).toBeCalled()
  })

  it('add to cart', async() => {
    const productDetailComponent = wrapper.findComponent(ProductDetail)
    productDetailComponent.vm.$emit('add-to-cart')
    expect(actions.addToCart).toHaveBeenCalled()
  })
})
