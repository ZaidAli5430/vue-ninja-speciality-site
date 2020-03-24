<template>
    <div id="show-blogs">
        <h1>List Blog titles</h1>
        <input type="text" v-model="search" placeholder="search blogs">
        <div v-bind:key="blog" v-for="blog in filteredBlogs" class="single-blog">
            <h2 v-rainbow="'red'">{{blog.title|to-uppercase}}</h2>
        </div>
    </div>
    
</template>

<script>
import searchMixin from '../mixins/searchMixins'
export default {
  components:{
  },
  data () {
    return {
        blogs:[],
        search:""
  
    }
  },
  methods:{
    
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
          this.blogs=data.body.slice(0,10);
        });
  },
  filters:{
      'to-uppercase':(value)=>{
        return value.toUpperCase();  
      },
  },
  directives:{
      'rainbow':{
          bind(el,binding,vnode){
             if (binding.value=='red'){
                el.style.color='red';
              }
          }
      }
  },
  mixins:[searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin:0 auto;
}
#show-blogs input{
    width: 800px;
    padding:10px;
}
.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing:border-box;
    background-color: #eeeeee;
}
</style>


