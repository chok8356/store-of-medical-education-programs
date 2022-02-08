import { createLocalVue, shallowMount } from '@vue/test-utils'

import { BButton } from 'bootstrap-vue'
import Vuex from 'vuex'
import { products } from '@/../mocks/Product'

import CartStore from '@/store/cart'
import CartView from '../CartView.vue'

const product = products[0]

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CartView', () => {
  let wrapper
  let actions
  let store

  beforeEach(() => {
    actions = {
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      clearCart: jest.fn()
    }
    store = {
      modules: {
        cart: {
          ...CartStore,
          state: {
            cart: {
              [product.id]: product
            }
          },
          actions
        }
      }
    }
    wrapper = shallowMount(CartView, {
      store: new Vuex.Store(store),
      localVue,
      mocks: {
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

  it('computed items', () => {
    expect(wrapper.vm.items).toStrictEqual([product])
  })

  it('back to store', () => {
    const routerPush = jest.spyOn(wrapper.vm.$router, 'push')
    const buttonComponent = wrapper.findComponent(BButton)
    buttonComponent.trigger('click')
    expect(routerPush).toBeCalled()
  })

  it('clear cart', async() => {
    const buttonComponent = wrapper.findAllComponents(BButton).at(1)
    buttonComponent.trigger('click')
    expect(actions.clearCart).toHaveBeenCalled()
  })

  it('add to cart', async() => {
    wrapper.vm.onAddClick(product)
    expect(actions.addToCart).toHaveBeenCalled()
  })

  it('remove from cart', async() => {
    wrapper.vm.onRemoveClick(product)
    expect(actions.removeFromCart).toHaveBeenCalled()
  })
})
