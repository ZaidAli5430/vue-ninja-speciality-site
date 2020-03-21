<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs">
        <div v-bind:key="blog" v-for="blog in filteredBlogs" class="single-blog">
            <h2 v-rainbow="'red'">{{blog.title|to-uppercase}}</h2>
            <article>{{blog.body|snippet}}</article>
        </div>
    </div>
    
</template>

<script>

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
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);
          });
      }
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
          this.blogs=data.body.slice(0,10);
        });
  }
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


