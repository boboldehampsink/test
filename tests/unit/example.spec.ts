import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders home vue', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.text()).toMatch('Ready to create an app?')
  })
})
