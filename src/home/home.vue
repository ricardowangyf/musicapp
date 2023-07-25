<template>
    <div class="home">
        <div class="center">
            <div class="home-contant">
                <div class="name">
                    <h1>Geez</h1>
                </div>
                <div class="search">
                    <img src="../assets/svg/search.svg" />
                </div>
            </div>
            <div class="second-new">
                <div class="new">
                    <h1>New Albums</h1>
                </div>
                <div class="all">
                    <h1>View all</h1>
                </div>
            </div>
            <div>
                <rotatingcart />
            </div>
            <div>
                <div class="video-contant">
                    <h1>Geez Weekly</h1>
                </div>
                <div>
                    <div class="weekaend">
                        <h1>Pray Fo You</h1>
                        <p>The Weekend</p>
                    </div>
                    <div id="playWnd" class="playWnd">
                        <VideoPlayer class="vjs-custom-skin videoPlayer" ref="videoplayer" :playsinline="true" width="800px"
                            height="600px" :options="playerOptions" customEventName="changed">
                        </VideoPlayer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import rotatingcart from "../components/rotatingcart.vue";
import { VideoPlayer } from "vue-video-player";
import 'video.js/dist/video-js.css'
export default {
    name: "HomePage",
    data() {
        return {
            playerOptions: {
                // width: "800px",
                // height: "600px",
                language: "zh-CN",
                muted: true,// 默认情况下将会消除任何音频
                autoplay: true,// 如果true,浏览器准备好时开始回放。
                controls: false, //不显示暂停、声音、进度条组件
                loop: true, // 视频一结束就重新开始。
                sources: [
                    {
                        type: "video/mp4",
                        src: "../assets/video/周杰伦MV" // url地址
                    },
                ],
            },
        };
    },
    methods: {},
    components: {
        rotatingcart,
        VideoPlayer,
    },
};
</script>
  
<style>
h1 {
    margin: 0;
    color: #fff;
}

#playWnd {
    width: 20%;
}

.home {
    background: #0E0B1F;
}

.center {
    margin: 0 auto;
    max-width: 300px;
}

.name h1 {
    font-family: Helvetica;
    font-size: 48px;
    color: #EEEEEE;
    letter-spacing: 0;
    margin: 0;
    font-weight: 100;
}

.search img {
    width: 30px;
    height: 30px;
}

.search img {
    padding-top: 20px;
}

.home-contant {
    display: flex;
    justify-content: space-between;
}

.home-contant {
    padding-top: 20px;
}

.second-new {
    display: flex;
    justify-content: space-between;
}

.second-new {
    padding-top: 30px;
}

.new h1 {
    font-family: Helvetica;
    font-size: 22px;
    color: #EEEEEE;
    letter-spacing: 0;
    margin: 0;
    font-weight: 200;
}

.video-contant h1 {
    font-family: Helvetica;
    font-size: 22px;
    color: #EEEEEE;
    letter-spacing: 0;
    font-weight: 200;
}

.all h1 {
    margin: 0;
    font-family: Helvetica;
    font-size: 12px;
    color: #EEEEEE;
    letter-spacing: 0;
    opacity: 0.4;
    font-weight: 200;
    padding-top: 11px;
}

.weekaend h1 {
    font-family: Helvetica;
    font-size: 22px;
    color: #EEEEEE;
    letter-spacing: 0;
    font-weight: 200;
}

.weekaend p {
    margin: 0;
    font-family: Helvetica;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 200;
}
</style>