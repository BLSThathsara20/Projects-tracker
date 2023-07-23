<template>
    <transition name="fade">
      <div class="container">
        <div id="single-blog">
        <h1>Blog {{ blog.title }}</h1>
        <p>{{ blog.content }}</p>
      </div>
      </div>
    </transition>
  </template>
  
  <script>
  import BlogView from '@/views/BlogsView.vue';
  
  export default {
    name: 'SingleBlog',
    data() {
      return {
        blog: {},
      };
    },
    mounted() {
      this.blog = BlogView.data().blogs[this.$route.params.id - 1];
    },
  };
  </script>
  
  
  <style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>