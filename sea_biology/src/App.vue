<template>
  <TheParticlesVue></TheParticlesVue>
  <TheNavLayoutVue></TheNavLayoutVue>  
  <TheSideBarVue></TheSideBarVue>
  <!-- <img alt="Vue logo" src="./assets/logo.png" class="zindex_2"> -->
  <div id="main" class="mt-4 p-5 bg-white position-sticky vh-100 zindex_2">
    <h1>展館消息</h1>
    <div>展館公告{{ seaData }}</div>
    <div v-for="data in seaData" v-bind:key="data" class="border-orange-800">
      <div>{{ data.Source }}</div>
    </div>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheParticlesVue from './components/TheParticles.vue'

import TheNavLayoutVue from './components/TheNavLayout.vue'

import axios from 'axios'

// sideBar
// import TheSideBarVue from './components/TheSideBar.vue'

// import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TheParticlesVue,
    TheNavLayoutVue,
    // TheSideBarVue    
  },
  setup() {

    let seaData;

    let promiseData = new Promise( (resolve, reject) => {
      axios.get('https://www.nmmba.gov.tw/OpenData.aspx?SN=C7A4275096465BFB')
      .then((res, error) => {
          resolve(res)   // 結果成功
          reject(error)  // 結果失敗
      })

    });

    promiseData
    .then( res => {
      seaData = res.data
      console.table(seaData)
      return seaData

    })
    .catch( error => {
      // alert(`拒絕成功`)
      console.log(`Error： ${error}`)
    })

    return {
      seaData
    }

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
}
</style>
