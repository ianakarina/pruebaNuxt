import { mount } from '@vue/test-utils'
import Contact from '@/pages/contact.vue'//Componente que se quiere testear

describe('Contact', () => {
  //test o it es equivalente
  it('is a Vue instance', () => {
    const wrapper = mount(Contact)
    expect(wrapper.vm).toBeTruthy()
  })
})