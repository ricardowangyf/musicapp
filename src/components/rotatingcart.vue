<template>
  <div class="carousel" :style="{ width: isExpanded ? '100%' : 'auto' }" @click="expand()">
    <div class="slide" v-for="(image, index) in images" :key="index" :style="{ transform: calculateTransform(index) }">
      <img :src="image.src" alt="Slide Image">
    </div>
  </div>
</template>

<script>
export default {
  name:"RotatingCart",
  data() {
    return {
      isExpanded: false,
      currentSlide: 0,
      images: [
        { src: 'https://t3.picb.cc/2023/08/21/IUImsR.jpeg' },
        { src: 'https://t3.picb.cc/2023/08/21/IUIcNw.jpeg' },
        { src: 'https://t3.picb.cc/2023/08/21/IUICCW.jpeg' },
        // Add more images as needed
      ],
    };
  },
  methods: {
    expand() {
      this.isExpanded = !this.isExpanded;
    },
    calculateTransform(index) {
      if (index === this.currentSlide) {
        return 'scale(1.5)';
      } else if (index === this.currentSlide + 1) {
        return 'scale(0.5)';
      }
      return 'scale(0.5)';
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
  },
  mounted() {
    setInterval(this.nextSlide, 3000); // Auto-switch every 3 seconds
  },
};
</script>

<style>
.carousel {
  display: flex;
  overflow: hidden;
  transition: width 0.5s ease-in-out;
}

.slide {
  flex: 0 0 auto;
  transition: transform 0.5s ease-in-out;
}
</style>
