<template>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-1 g-4 pb-5">
        <div class="col" v-for="(blog, index) in filteredBlogs" :key="index">
          <div class="card">
            <!-- <img :src="blog.image" class="card-img-top img-fluid" alt="{{ blog.title }}"> -->
            <div class="card-body">
              <h5>
                <router-link :to="`/blog/${blog.id}`"><span>{{ blog.title }}</span></router-link>
              </h5>
              <p class="card-text">{{ blog.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FilteredBlogsView',
    props: {
      filteredBlogs: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  