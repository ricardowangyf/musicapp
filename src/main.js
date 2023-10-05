import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' //引入router
import ElementPlus from 'element-plus'
import 'swiper/swiper-bundle.css'
// import Swiper from 'swiper/bundle'

import 'element-plus/dist/index.css'
import FBSignInButton from 'vue-facebook-signin-button'
createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router, ElementPlus, FBSignInButton) //使用router
app.mount('#app')