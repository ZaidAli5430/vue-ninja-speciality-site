<template>
<div>
   <app-header></app-header>
   <app-ninjas></app-ninjas>
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
    }
  }
}
</script>

<style scoped>

    

</style>


