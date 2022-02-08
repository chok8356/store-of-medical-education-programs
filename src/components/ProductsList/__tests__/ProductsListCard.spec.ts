import { shallowMount } from '@vue/test-utils'

import { products } from '@/../mocks/Product'
import ProductsListCard from '../ProductsListCard.vue'

const product = products[0]

describe('ProductsListCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ProductsListCard, {
      propsData: {
        product
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('render correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('exist props', () => {
    expect(wrapper.props('product')).toStrictEqual(product)
  })

  it('emit add to cart', () => {
    wrapper.vm.addToCart()
    expect(wrapper.emitted('add-to-cart')).toBeDefined()
  })

  it('emit show detail', () => {
    wrapper.vm.showDetail()
    expect(wrapper.emitted('show-detail')).toBeDefined()
  })
})
