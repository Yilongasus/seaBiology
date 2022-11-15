import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

// 背景幾何特效
import Particles from "particles.vue3"

// Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

createApp(App).use(Particles).use(router).mount('#app')
