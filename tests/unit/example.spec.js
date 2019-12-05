import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Form from '../../src/components/Form.vue'


describe('Form.vue', () => {
  it('renders hello properly when executed...', () => {
    const msg = 'hello'
    const wrapper = shallowMount(Form, {
      propsData: { msg }
    })
    expect(wrapper.find('h1').text()).equal(msg);
  })


  it('renders world properly when executed...', () => {
    const msg = 'world'
    const wrapper = shallowMount(Form, {
      propsData: { msg }
    })
    expect(wrapper.find('h2').text()).equal(msg);
  })



})
