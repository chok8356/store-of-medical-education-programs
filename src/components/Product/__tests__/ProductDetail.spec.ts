import { shallowMount } from '@vue/test-utils'

import { products } from '@/../mocks/Product'
import { categories } from '@/../mocks/ProductCategories'
import ProductDetail from '../ProductDetail.vue'

const product = products[0]
const category = categories[1]

describe('ProductDetail', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ProductDetail, {
      propsData: {
        product,
        category
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
    expect(wrapper.props('category')).toStrictEqual(category)
  })

  it('emit add to cart', () => {
    wrapper.vm.addToCart()
    expect(wrapper.emitted('add-to-cart')).toBeDefined()
  })
})
