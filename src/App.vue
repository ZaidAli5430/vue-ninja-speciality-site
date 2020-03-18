<template>
<div>
   <app-header></app-header>
   <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
   <app-footer></app-footer>
</div>
 
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Content from './components/ninjas.vue'
export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Content
  },
  data () {
    return {
      ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ]
    }
  }
}
</script>

<style scoped>

    

</style>


