import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import Routes from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);
//Router
const router = new VueRouter({
  routes:Routes,
  mode:'history'
});

//filter
Vue.filter('to-uppercase',(value)=>{
  return value.toUpperCase();
});
Vue.filter('snippet',(value)=>{
  return value.slice(0,100)+'...';
});


//event bus
export const bus = new Vue({
  
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
