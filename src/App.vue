<template>
  <div>
    <keep-alive>
       <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="component='form-one'">Show form one</button>
    <button @click="component='form-two'">Show form two</button>
    
  </div>
</template>

<script>
import formOne from './components/formOne'
import formTwo from './components/formTwo'

export default {
  components:{
    'form-one':formOne,
    'form-two':formTwo
  },
  data () {
    return {
      title:'I am a dynamic slot title',
      component:''
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>

    

</style>


