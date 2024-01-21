<!-- ***************

    屏東海生館形象官網
    展館消息
    2022/11/15 開發中

     *************** -->

<template>
  <div id="main" class="mt-4 p-5 position-sticky zindex_2 text-white">
    <h1 class="mb-3">展館消息</h1>
    <div v-if="seaData">
      <!-- <h3>展館公告</h3> -->
      <div v-for="(data, index) in seaData" :key="index" class="border-orange-800">

        <div class="row newsColor news bg-light bg-gradient rounded-pill text-base w-75 w-75 mx-auto my-3">
          <div class="col-12 py-4">
            <h5 class="fs-4 px-5">{{ data['標題'] }}</h5>
          </div>
          <div class="col-12">
            <div class="fs-6 text-secondary" v-html="truncateContent(data['內容'])"></div>
          </div>
          <div class="col py-3">
            <p>資料來源：<span class="badge bg-primary text-wrap">{{ data['資料來源'] }}</span></p>
          </div>
          <div class="col py-3 d-flex justify-content-center">
            <a class="btn text-decoration-none btn-yellow text-black" :href="data['Source']">按我前往➡</a>
          </div>
        </div>

      </div>
    </div>

    <div v-else>
      <h3 class="text-white" data-aos="zoom-out-left">載入中...</h3>
    </div>

  </div>
</template>

<script>
  import { ref } from 'vue'
  import axios from 'axios'

  export default {
    name: 'TheExhibition',
    components: {},
    setup() {

      let seaData = ref(null);

      axios.get('https://www.nmmba.gov.tw/OpenData.aspx?SN=C7A4275096465BFB')
        .then((res, error) => {
          if (error) {
            console.log(`Error： ${error}`)
          } else {
            seaData.value = res.data
            console.table(seaData.value)
          }
        })

      // 定義 computed property 來截取內容的前50個字
      const truncateContent = (content) => {
        if (content) {
          return `${content.substring(0, 60)}......`;
        }
        return '';
      };

      return {
        seaData,
        truncateContent,
      }

    },
    // changeHtml(val) {
    //   let dom = document.createElement('div')
    //   dom.innerHTML = val
    //   return {
    //     dom
    //   }
    // }
    // 原本要轉內容的html字串變成html

  }
</script>

<style scoped>
.newsColor {
  color: #2c3e50;
}

.news {
  box-shadow: 5px 5px 0px rgba(184, 204, 244, 0.8);
  transition: all 0.5s;
}

.news:hover {
  background-color: #f9f8d5 !important;
  box-shadow: 5px 5px 0px rgba(162, 180, 216, 0.8);
}

#main {
  border-radius: 80% 20% 81% 19% / 4% 62% 18% 50%;
}
</style>