<template>
  <div class="carousel-container">
    <div class="carousel-wrapper" ref="carouselWrapper">
      <div class="carousel" :style="{ transform: `translateX(${wrapperOffset}px)` }">
        <img v-for="(item, index) in items" :src="item.src" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      currentIndex: 0,
      items: [
        { src: 'https://t3.picb.cc/2023/08/21/IUICCW.jpeg' },
        { src: 'https://t3.picb.cc/2023/08/21/IUIcNw.jpeg' },
        { src: 'https://t3.picb.cc/2023/08/21/IUImsR.jpeg' },
      ],
      itemWidth: 0,
      wrapperWidth: 0,
      wrapperOffset: 0,
      intervalId: null,
      duration: 2000,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.itemWidth = this.$refs.carouselWrapper.offsetWidth;
      this.wrapperWidth = this.$refs.carouselWrapper.scrollWidth;

      this.startCarousel();
    });
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.scrollRight();
      }, this.duration);
    },
    scrollRight() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.wrapperOffset = -this.currentIndex * this.itemWidth;
    },
  },
};
</script>

<style>
/* .carousel-container {
  position: relative;
  width: 20%;
  overflow: hidden;
} */

.carousel-wrapper {
  display: flex;
  width: max-content;
  transition: transform 1s ease-in-out;
}

.carousel {
  display: flex;
}

.carousel img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
