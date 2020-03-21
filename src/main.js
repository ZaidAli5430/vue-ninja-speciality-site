import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"


Vue.use(VueResource);

Vue.directive('rainbow',{
  bind(el,binding,vnode){
    if (binding.value=='red'){
      el.style.color='red';
    }
    

  }
});
export const bus = new Vue({
  
});

new Vue({
  el: '#app',
  render: h => h(App)
})
