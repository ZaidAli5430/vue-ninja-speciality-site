<template>
  <div>
    <app-head></app-head>
    <router-view></router-view>
    
  </div>
</template>

<script>

import addBlog from './components/addBlog'
import showBlogs from './components/showBlogs'
import listBlogs from './components/listBlogs'
import head from './components/head'
export default {
  components:{
    'add-blog':addBlog,
    'show-blogs':showBlogs,
    'list-blogs':listBlogs,
    'app-head':head
  },
  data () {
    return {
  
    }
  },
  methods:{
    
  }
}
</script>

<style>
body{
  margin:0;
  font-family:'Nunito SemiBold';
}

</style>


