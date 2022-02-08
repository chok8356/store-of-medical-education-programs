import { shallowMount } from '@vue/test-utils'
import { BButton } from 'bootstrap-vue'

import Header from '../Header.vue'

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Header)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('render correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('exist default props', () => {
    expect(wrapper.props('cartTotal')).toBe('0.00')
    expect(wrapper.props('cartQuantity')).toBe(0)
  })

  it('in cart', () => {
    wrapper = shallowMount(Header, {
      mocks: {
        $route: {
          name: 'Cart'
        }
      }
    })
    expect(wrapper.vm.inCart).toBe(true)
  })

  it('click on cart change router', async() => {
    wrapper = shallowMount(Header, {
      mocks: {
        $router: { push: () => {} }
      }
    })
    const routerPush = jest.spyOn(wrapper.vm.$router, 'push')
    const buttonComponent = wrapper.findComponent(BButton)
    await buttonComponent.trigger('click')
    expect(routerPush).toBeCalled()
  })
})
