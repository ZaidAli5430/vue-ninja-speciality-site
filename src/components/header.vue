 <template>
 <header @click="changeTitle">
     <h1>{{title}}</h1>
 </header>
  
</template>

<script>
import {bus} from '../main.js'
export default {
   props:{
      title:{
          type:String
      }
  },
  data () {
    return {
    }
  },
  methods:{
      changeTitle:function(){
        //   this.$emit('changeTitle','Vue Wizards')
        this.title = 'Vue Wizards';
        bus.$emit('titleChanged','Vue Wizards');
      }

  }
}
</script>

<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}

    
</style>


