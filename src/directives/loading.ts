// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Vue from 'vue'
import Loader from '@/components/core/Loader.vue'
const Mask = Vue.extend(Loader)

const RELATIVE_CLASS = 'loader-parent--relative'

const toggleLoading = async(el: any, binding: any) => {
  if (binding.value) {
    el.classList.add(RELATIVE_CLASS)
    el.appendChild(el.loader)
    return
  }

  el.classList.remove(RELATIVE_CLASS)
  if (el.loader && el.loader.parentNode) el.removeChild(el.loader)
}

export default {
  bind: function(el: any, binding: any) {
    el.loader = new Mask().$mount().$el
    binding.value && toggleLoading(el, binding)
  },
  update(el: HTMLElement, binding: any) {
    toggleLoading(el, binding)
  },
  unbind(el: HTMLElement) {
    toggleLoading(el, { value: false })
  }
}
