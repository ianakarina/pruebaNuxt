import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'//Componente que se quiere testear

describe('NuxtLogo', () => {
  //test o it es equivalente
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
