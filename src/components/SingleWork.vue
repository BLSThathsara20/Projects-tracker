<template>
  <transition name="fade">
    <div class="container">
      <div id="single-work">
      <h1>Work {{ work.name }}</h1>
      <p>{{ work.description }}</p>
    </div>
    </div>
  </transition>
  </template>
  <script>
  import HomeView from '@/views/HomeView.vue';
  
  export default {
    name: 'SingleWork',
    data() {
      return {
        work: {},
      };
    },
    mounted() {
      this.work = HomeView.data().works[this.$route.params.id - 1];
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