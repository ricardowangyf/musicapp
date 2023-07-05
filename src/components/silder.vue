<template>
  <div>
    <div class="imgurl" />
  </div>
  <div class="contant">
    <div class="slider">
      <div class="image-container" :class="{ 'image-container-small': activeIndex !== 0 }">
        <img :src="currentImage"
          :style="{ width: activeIndex === 0 ? '340px' : '350px', height: activeIndex === 0 ? '340px' : '350px' }"
          alt="Slider Image" />
      </div>
    </div>
    <div class="dots">
      <span v-for="(dot, index) in dots" :key="index" :class="{ active: index === activeIndex }"
        @click="changeSlide(index)"></span>
    </div>
    <div class="content">
      <p>{{ currentContent }}</p>
      <p>{{ porn }}</p>
      <p>{{ currentContent }}</p>
    </div>
    <!-- <div class="content">
      <p>{{ currentContent }}</p>
    </div>
    <div class="content">
      <p>{{ currentContent }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      activeIndex: 0,
      images: [
        'https://s1.ax1x.com/2023/07/04/pCySgfS.png',
        'https://free.wzznft.com/i/2023/07/05/vfmr.png',
        'https://free.wzznft.com/i/2023/07/05/p9ax.png',
        'https://s1.ax1x.com/2023/07/04/pCySfyj.png'
      ],
      contents: ['APP UI KIT', '', 'Make your deign workflow easier and save your time ',],
      porn: ['WELCOME TO GEEZ APP'],
      contesnts: ['APP UI KawdaIT', 'WELCOME TO GEEZ APP', 'Make your deign workflow easier and save your time ',],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.activeIndex];
    },
    currentContent() {
      return this.contents[this.activeIndex];
    },
    dots() {
      return Array(this.images.length).fill('');
    }
  },
  methods: {
    changeSlide(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style>
.imgurl {
  width: 100%;
  height: 740px;
  background-image: url('../assets/img/black.png');
}

.contant p {
  color: #fff;
}

.slider {
  position: relative;
  text-align: center;
}

.content p {
  margin: 0;
}

.image-container {
  display: inline-block;
}

.image-container {
  width: 360px;
  height: 360px;
}

.image-container img {
  display: block;
  margin: 0 auto;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  position: relative;
}

.dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  background: #CBFB5E;
  cursor: pointer;
}

.dots span.active {
  background-color: #fff;
}

.content {
  margin-top: 10px;
  text-align: center;
}

.contant {
  position: absolute;
  top: 0%;
}
</style>
