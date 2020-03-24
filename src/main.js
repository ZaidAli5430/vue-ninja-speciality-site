import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"


Vue.use(VueResource);
//filer
Vue.filter('to-uppercase',(value)=>{
  return value.toUpperCase();
});
Vue.filter('snippet',(value)=>{
  return value.slice(0,100)+'...';
});


//custom directive
export const bus = new Vue({
  
});

new Vue({
  el: '#app',
  render: h => h(App)
})
