import { shallowMount } from '@vue/test-utils'

import { products } from '@/../mocks/Product'
import ProductsListCard from '@/components/ProductsList/ProductsListCard.vue'
import ProductsList from '../ProductsList.vue'

const productsData = products.slice(0, 3)

describe('ProductsList', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ProductsList, {
      propsData: {
        products: productsData
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
    expect(wrapper.props('products')).toStrictEqual(productsData)
  })

  it('emit add to cart', () => {
    const productsListCardCmp = wrapper.findComponent(ProductsListCard)
    productsListCardCmp.vm.$emit('add-to-cart')
    expect(wrapper.emitted('add-to-cart')[0][0]).toStrictEqual(productsData[0])
  })

  it('emit show detail', () => {
    const productsListCardCmp = wrapper.findComponent(ProductsListCard)
    productsListCardCmp.vm.$emit('show-detail')
    expect(wrapper.emitted('show-detail')[0][0]).toStrictEqual(productsData[0])
  })
})
