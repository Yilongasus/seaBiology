<!-- ***************

    屏東海生館形象官網
    展館
    2023/04/06 開發中

     *************** -->

     <template>
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
    
    import json from '../csv/Exhibition.json'
    
    export default {
      name: 'App',
      components: {}
      ,data() {
        return {
          exhibitionItems: json
        }
      }
      ,setup() { 
    
      }
    
    }
    </script>   