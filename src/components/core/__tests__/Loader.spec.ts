import { shallowMount } from '@vue/test-utils'
import { BSpinner } from 'bootstrap-vue'
import Loader from '../Loader.vue'

describe('Loader', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Loader)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('render correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('spinner props', () => {
    const spinnerComponent = wrapper.findComponent(BSpinner)
    expect(spinnerComponent.attributes('label')).toBe('Loading...')
    expect(spinnerComponent.attributes('variant')).toBe('primary')
  })
})
