<!-- ***************

    屏東海生館形象官網
    首頁
    2022/11/13 開發中

     *************** -->

<template>
  <TheParticlesVue></TheParticlesVue>
  <TheNavLayoutVue></TheNavLayoutVue>  
  <TheSideBarVue></TheSideBarVue>
  <div id="main" class="mt-4 p-5 bg-white position-sticky vh-100 zindex_2"></div>  
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheParticlesVue from './components/TheParticles.vue'

import TheNavLayoutVue from './components/TheNavLayout.vue'

import AOS from 'aos';
import 'aos/dist/aos.css';

// sideBar
// import TheSideBarVue from './components/TheSideBar.vue'

// import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    TheParticlesVue,
    TheNavLayoutVue,
    // TheSideBarVue    
  },
  setup() { }

}

AOS.init();
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #main {
      border-radius: 80% 20% 81% 19% / 41% 82% 18% 59%;
  }
</style>
