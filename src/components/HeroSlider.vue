<template>
  <section class="main-slider">
    <div class="container">
      
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          subTitle: "Slide 1",
          mainTitle: "This is slide 1",
          image: "https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Rev-slider-img-2.png",
        },
        {
          subTitle: "Slide 2",
          mainTitle: "This is slide 2",
          image: "https://deon.qodeinteractive.com/wp-content/uploads/2021/12/Rev-slider-img-3.png",
        },
        {
          subTitle: "Slide 3",
          mainTitle: "This is slide 3",
          image: "https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Rev-slider-img-2.png",
        },
      ],
      autoplayInterval: null,
    };
  },
  computed: {
    trackStyles() {
      return {
        transform: `translateX(-${this.currentSlide * 100}%)`,
      };
    },
  },
  methods: {
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(this.nextSlide, 5400);
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    },
  },
  mounted() {
    this.startAutoplay();
  },
  beforeDestroy() {
    this.stopAutoplay();
  },
};
</script>

<style lang="scss">
</style>

