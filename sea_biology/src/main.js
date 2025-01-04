import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './router'

// 背景幾何特效
import Particles from "particles.vue3"

// 元件動畫特效
import 'animate.css'

// Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

// 🌟 重整後前往/sea-biology
if (window.performance.navigation.type === 1 && window.location.pathname !== '/sea-biology') {
    window.location.href = '/sea-biology/';
}

createApp(App).use(Particles).use(router).use(createPinia()).mount('#app')