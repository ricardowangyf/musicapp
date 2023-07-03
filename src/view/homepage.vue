<template>
  <div>
    <div class="login-img">
      <img src="../assets/img/black.png" alt="Image" style="width: 100%" />
    </div>
    <div>
      <div
        class="slide"
        v-for="(image, index) in images"
        :key="index"
        :style="{ display: currentIndex === index ? 'block' : 'none' }"
      >
        <img :src="image" :alt="'Image ' + (index + 1)" />
      </div>
      <div class="slideshow-container"></div>
      <div class="dot-container">
        <span
          class="dot"
          v-for="(dot, index) in images"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="changeSlide(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginApp",
  data() {
    return {
      images: [
        "https://s1.ax1x.com/2023/06/09/pCEiCZR.png",
        "https://tva2.sinaimg.cn/large/0074R88yly8hes193p2pej309d0lsq3v.jpg",
        "https://tva2.sinaimg.cn/large/0074R88yly8hes193p2pej309d0lsq3v.jpg",
        "https://tva1.sinaimg.cn/large/0074R88yly8hes1b0he6bj30af0mkmxo.jpg",
        "https://tva1.sinaimg.cn/large/0074R88yly8hes1amlk8wj30k016edlb.jpg",
      ],
      currentIndex: 0,
    };
  },
  methods: {
    changeSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style>
.title {
  position: absolute;
  top: 1px;
}
.title img {
  width: 110%;
  height: 425px;
}

/* 父容器样式 */
.slideshow-container {
  position: relative;
}

/* 图片样式 */
.slide {
  display: none; /* 初始时隐藏所有图片 */
}

.slide img {
  width: 100%;
  height: auto;
}

/* 圆点样式 */
.dot-container {
  text-align: center;
  margin-top: 10px;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #bbb;
  margin: 0 5px;
  cursor: pointer;
}

/* 激活状态的圆点样式 */
.active {
  background-color: #333;
}
</style>
