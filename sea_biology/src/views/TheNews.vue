<!-- ***************

    屏東海生館形象官網
    展館消息
    2022/11/15 開發中

     *************** -->

<template>
  <div id="main" class="my-4 p-5 position-sticky zindex_2 text-white">
    <h1 class="mb-3 fw-semibold text-center display-4">展館消息</h1>
    <!-- <div v-if="seaData">
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
    </div> -->


    <div class="container mt-1 pt-3">
        <div v-if="seaData" class="pb-4 d-grid">
          <div v-for="(data, index) in seaData" :key="index" class="rounded-lg overflow-hidden">
              <a :href="data['Source']" class="fs-6 d-block my-2 z-1 position-relative overflow-hidden text-decoration-none">
                  <div class="d-flex flex-row justify-content-between align-items-center px-5 py-3 text-center rounded" style="background: linear-gradient(to right, white, #EAEAEA); box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);">
                      <p class="col-span-2 fs-4 fw-semibold pt-3" style="color: #163464;">{{ data['標題'] }}</p>
                      <div class="d-flex flex-column justify-content-center">
                        <p class="text-start col-span-2 fs-5" style="color: #756C63;">發佈日期 <span class="badge text-wrap">{{ data['上版日期'] }}</span></p>
                        <p class="text-start col-span-2 fs-5" style="color: #756C63;">資料來源 <span class="badge text-wrap">{{ data['資料來源'] }}</span></p>

                      </div>
                  </div>
                  <div class="position-absolute h-100 w-100 overflow-hidden bg-black opacity-75 rounded-lg mask-block z-2"></div>
                  <div class="position-absolute align-items-center rounded-lg justify-content-center mask-flex z-2">
                      <span class="px-5 py-2 rounded">
                          前往查看
                          <box-icon class="bx bxs-like bx-fade-right" animation='fade-up' color="#ffffff" type='solid' name='right-top-arrow-circle'></box-icon>
                      </span>
                  </div>
              </a>
          </div>
        </div>
        <div v-else>
            <h3 class="text-white" data-aos="zoom-out-left">載入中...</h3>
        </div>
    </div>

  </div>
</template>

<script>
    import { reactive, ref } from 'vue'
    import axios from 'axios'

    export default {
        name: 'TheExhibition',
        components: {},
        setup() {

            let seaData = reactive([]);

            axios.get('https://www.nmmba.gov.tw/OpenData.aspx?SN=C7A4275096465BFB')
            .then((res, error) => {
                if (error) {
                console.log(`Error： ${error}`)
                } else {
                Object.assign(seaData, res.data)
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
.hover-container:hover .hover-overlay {
    display: block;
}

.hover-overlay {
    display: none;
}
.news {
  box-shadow: 5px 5px 0px rgba(184, 204, 244, 0.8);
  transition: all 0.5s;
}

.news:hover {
  background-color: #f9f8d5 !important;
  box-shadow: 5px 5px 0px rgba(162, 180, 216, 0.8);
}

.badge {
  background: linear-gradient(217deg, #6B5264, rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, #154166, rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, #6B5264, rgba(82, 82, 82, 0) 70.71%);
}

#main {
  border-radius: 80% 20% 81% 19% / 4% 62% 18% 50%;
}

.mask-block {
  display: none;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
}

a:hover .mask-block {
  display: block;
}

.mask-flex {
  display: none;
  right: 0;
  bottom: 0;
  top: 35%;
  left: 0;
}

a:hover .mask-flex {
  display: block;
}

.mask-flex span {
  background: rgba(0, 0, 0, .2);
  color: #ffffff;
  font-size: 20px;
  transition: all 0.8s;
}

.mask-flex > span:hover {
  box-shadow: 2px 2px 2px 25px rgba(0, 0, 0, 0.2);
  font-size: 30px;
}
</style>