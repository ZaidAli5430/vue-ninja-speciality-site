<template>
  <div>
    <form-helper >
      <div slot="form-header">
        <h3>Admission Form</h3>
        <p>Fill the form to apply</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required/>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button @click = "handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/form-helper.vue'
export default {
  components:{
    'form-helper':formHelper
  },
  data () {
    return {
      title:'I am a dynamic slot title'
    }
  },
  methods:{
   
  }
}
</script>

<style scoped>

    

</style>


