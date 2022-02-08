import { shallowMount } from '@vue/test-utils'

import { BFormInput, BNavItem } from 'bootstrap-vue'
import { categories } from '@/../mocks/ProductCategories'
import { IProductFilters } from '../../../../types/IProduct'
import ProductsListFilters from '../ProductsListFilters.vue'

const filters: IProductFilters = {
  query: '',
  selectedCategory: null
}

describe('ProductsListFilters', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ProductsListFilters, {
      propsData: {
        filters,
        categories
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
    expect(wrapper.props('filters')).toStrictEqual(filters)
    expect(wrapper.props('categories')).toStrictEqual(categories)
  })

  it('change query on input', () => {
    const inputComponent = wrapper.findComponent(BFormInput)
    inputComponent.vm.$emit('input', '1')
    expect(wrapper.emitted('change')[0][0]).toStrictEqual({
      query: '1',
      selectedCategory: null
    })
  })

  it('change selected category on category click', () => {
    const categoryComponent = wrapper.findAllComponents(BNavItem).at(1)
    categoryComponent.trigger('click')
    expect(wrapper.emitted('change')[0][0]).toStrictEqual({
      query: '',
      selectedCategory: categories[0].id
    })
  })
})
