import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Form from '../../src/components/Form.vue'


describe('Form.vue', () => {
  it('renders hello properly when executed...', () => {
    const msg = 'EMSB Scheduler'
    const wrapper = shallowMount(Form, {
      propsData: { msg }
    })
    expect(wrapper.find('h1').text()).equal(msg);
  })
})
