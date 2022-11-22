<!-- ***************

    屏東海生館形象官網
    首頁
    2022/11/13 開發中

     *************** -->

<template>
  <TheParticlesVue></TheParticlesVue>
  <TheNavLayoutVue></TheNavLayoutVue>  
  <!-- <TheSideBarVue></TheSideBarVue> -->
  <div id="main" class="mt-4 p-5 position-sticky vh-100 zindex_2">
    <div class="row justify-content-center mt-8">
      <div class="card col-6 w-25 mx-3 mt-5 py-3 animate__animated animate__fadeIn align-items-center border-0 justify-content-around shadow bg-body rounded" v-for="item in exhibitionItems" :key="item">
        <div class="card-body justify-content-center">
          <h3 class="card-title fw-bolder">{{ item.平面圖名稱 }}</h3>
          <hr style="background-color: #3971E0; height: 5px;">
          <p class="card-text text-start py-3">{{ item.平面圖說明 }}</p>
          <a :href="item.平面圖網址" class="btn px-4 btn-yellow text-black" target="__blank">更多資訊</a>
        </div>
      </div>
    </div>
  </div>  

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
