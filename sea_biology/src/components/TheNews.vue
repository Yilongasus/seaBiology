<!-- ***************

    屏東海生館形象官網
    展館消息
    2022/11/15 開發中

     *************** -->

     <template>
        <div id="main" class="mt-4 p-5 position-sticky vh-100 zindex_2 text-white">
          <h1>展館消息</h1>
          <div v-if="seaData">
            <h3>展館公告</h3>
            <div v-for="(data, index) in seaData" :key="index" class="border-orange-800">
              <div>
                <h5>{{ data['標題'] }}</h5>
                <div v-html="data['內容']"></div>
                <p>資料來源：{{ data['資料來源'] }}</p>
                <a :href="data['Source']">按我前往➡</a>
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
        components: { 
        },
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
      
          return {
            seaData
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