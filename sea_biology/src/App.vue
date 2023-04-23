<!-- ***************

    屏東海生館形象官網
    首頁
    2022/11/13 開發中

     *************** -->

<template>
  <TheParticlesVue></TheParticlesVue>
  <TheNavLayoutVue></TheNavLayoutVue>  
  <!-- <TheSideBarVue></TheSideBarVue> -->

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

import json from './csv/Exhibition.json'

export default {
  name: 'App',
  components: {
    TheParticlesVue,
    TheNavLayoutVue,
    // TheSideBarVue    
  }
  ,data() {
    return {
      exhibitionItems: json
    }
  }
  ,setup() { 

  }

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
    background: linear-gradient(to right, #fff, #083DA6, #3D30F2) !important;
    border-radius: 80% 20% 81% 19% / 41% 82% 18% 59%;
  }

  .btn-yellow {
    background-color:#F2C224 !important;  
    box-shadow: 5px 5px 0px #083DA6;
    transition: all 2s;  
  }

  .btn-yellow:hover {
    background-color:#083DA6 !important;  
    box-shadow: 5px 5px 0px #F2C224;    
    color: #ffffff !important; 
  }  
</style>
