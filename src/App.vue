<template>
    <Navbar/>
    <main>
      <router-view/>
    </main>
    <Footer/>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Footer,
    Navbar,
  }
}
</script>


<style lang="scss">
//Variables
$font-1 : 'Syne', sans-serif;
$font-2 : 'Heebo', sans-serif;

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.accordion{
  .accordion-item{
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .accordion-body{
    position: relative;

    &::before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 95%;
      height: 1px;
      background-color: #434343;
      margin: 0 auto;
    }
  }
}

//Style Slick Slider
.slick-dots{
  li{
    button{
      &::before{
        color: #fff !important;
      }
    }
  }
}

.slick-arrow{
  
}

</style>
