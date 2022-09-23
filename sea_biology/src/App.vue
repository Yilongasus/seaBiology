<template>
  <TheParticlesVue></TheParticlesVue>
  <TheNavLayoutVue></TheNavLayoutVue>  
  <!-- <img alt="Vue logo" src="./assets/logo.png" class="zindex_2"> -->
  <div id="main" class="mt-4 p-5 bg-white position-sticky vh-100 zindex_2">
    <h1>Jumbotron Example</h1>
    <p>Lorem ipsum...</p>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheParticlesVue from './components/TheParticles.vue'

import TheNavLayoutVue from './components/TheNavLayout.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TheParticlesVue,
    TheNavLayoutVue    
  }
}
</script>

<style>
#main {
  border-radius: 80% 20% 81% 19% / 41% 82% 18% 59%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 35px;
}
</style>
