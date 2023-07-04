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
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      activeIndex: 0,
      images: [
        'https://pic.imgdb.cn/item/64a36d101ddac507cc2bcd5a.jpg',
        'https://pic.imgdb.cn/item/64a36d211ddac507cc2bed0b.jpg',
        'https://pic.imgdb.cn/item/64a36d331ddac507cc2c02b0.jpg',
        'https://pic.imgdb.cn/item/64a36c411ddac507cc2aceca.jpg'
      ],
      contents: ['Content 1', 'Content 2', 'Content 3']
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

.slider {
  position: relative;
  text-align: center;
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
