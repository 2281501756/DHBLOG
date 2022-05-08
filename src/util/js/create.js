import Vue from "vue";

export function createDOM(component, props) {
  const vm = new Vue({
    render(h) {
      return h(component, {props})
    },
  }).$mount()
  document.body.appendChild(vm.$el)

  const comp = vm.$children[0]
  
  comp.remove = () => {
    document.body.removeChild(vm.$el)

    vm.$destroy()
  }
  return comp
}