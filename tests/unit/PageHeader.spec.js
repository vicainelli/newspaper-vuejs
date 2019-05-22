import { shallowMount, mount } from '@vue/test-utils'
import PageHeader from '@/components/PageHeader.vue'

describe('PageHeader.vue', () => {
  it('renders home', () => {
    const home = true
    const category = 'Business'
    const wrapper = shallowMount(PageHeader, {
      propsData: { home, category },
      stubs: ['router-link']
    })
    expect(wrapper.text()).toMatch('Home')
  })
  it('renders category label', () => {
    const home = false
    const category = 'Business'
    const wrapper = shallowMount(PageHeader, {
      propsData: { home, category },
      stubs: ['router-link']
    })
    expect(wrapper.text()).toMatch('Business')
  })
  it('renders logo', () => {
    const wrapper = mount(PageHeader, {
      stubs: ['router-link']
    })
    const img = wrapper.find('img')
    expect(wrapper.contains('img')).toBe(true)
    expect(img.attributes('alt')).toBe('The Vue News Logo')
  })
})
