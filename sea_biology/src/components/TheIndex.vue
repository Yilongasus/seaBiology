<!-- ***************

    屏東海生館形象官網
    首頁
    2024/04/13 開發中

     *************** -->
<template>
    <div class="bannerIndex h-75 position-sticky zindex_2 text-white d-flex align-items-center justify-content-center">
        <!-- <video src="/src/assets/pingu.mp4"
            poster=""
            width="1080" 
            height="768" 
            autoplay="true" 
            controls="true">
        </video> -->
        <h1 class="shack display-2 z-3 text-center" :key="text">{{ text }}</h1>
        <!-- <img src="/src/assets/swiperImg/422923_0.jpg" class="img-fluid rounded-circle" alt="首頁圖片"> -->
    </div>
    <div class="position-sticky zindex_2 mt-5">
        <h2 class="mt-4 mb-0 mx-4 py-2 rounded-top-circle activeBgTitle animate__animated animate__fadeInUp animate__delay-2s">活動介紹</h2>
        <div class="d-flex align-items-center row mx-4 pb-3 bg-white animate__animated animate__fadeInUp animate__delay-3s">
            <div class="imgIndexShow imgLeftRect mt-3 col-sm-5 col-12 animate__animated animate__fadeInLeft animate__delay-4s">
                <img
                class="img-thumbnail w-50" 
                src="https://ws.nmmba.gov.tw/001/Upload/OldFile/FileDownLoad/PublishActivies/20150715104349228.JPG"
                alt="費雪的秘密海報"
                >
            </div>
            <div class="col-sm-6 col-12 text-start ms-sm-2 ms-0 animate__animated animate__fadeInRightBig animate__delay-4s">
                <div class="px-3 pt-sm-0 pt-4 fs-6">
                    <p class="lh-lg">您是否曾經好奇過，透明魚究竟是如何辦到的？牠們為什麼能夠在深海中生存？牠們在海洋生態中扮演著什麼角色？</p>
                    <p class="lh-lg"><span class="fw-bolder">《雀斯派倫特 • 費雪的秘密》</span>特展將帶領您深入探索透明魚的世界，揭開牠們的神秘面紗。特展透過互動式展示、多媒體影片和標本實體等方式，讓您深入了解透明魚的生物學特徵、研究方法和生態價值。</p>
                </div>
            </div>
        </div>


        <div class="d-flex align-items-center row mx-4 py-3 bg-white animate__animated animate__fadeInUp animate__delay-4s">
            <div class="col-sm-6 col-12 text-start sm:order-2 order-1 animate__animated animate__fadeInLeft animate__delay-5s">
                <div class="px-5 fs-6">
                    <p class="fw-bold">展現創意，探索科學</p>
                    <p class="lh-lg">本競賽以科學探究精神為出發點，生活中有許多大家習以為常的事件或現象，希望參賽者能多提出質疑與假設，收集和分析數據、驗證假設、重複驗證與討論，從這些過程中學習獲得結論，實際運用到生活當中。</p>
                </div>
            </div>
            <div class="imgIndexShow imgRightRect col-sm-5 col-12  sm:order-1 order-2 animate__animated animate__fadeInRightBig animate__delay-5s">
                <img
                class="img-thumbnail w-50" 
                src="https://ws.nmmba.gov.tw/001/Upload/217/relpic/6415/12438/fb37bbcf-a02f-4508-a881-a0d8802238b7.jpg"
                alt="這樣教我就懂海報"
                >
            </div>
        </div>
        <!-- <div class="imgIndexShow imgCenterRect">
            <img
            class="img-thumbnail h-50"
            src="https://ws.nmmba.gov.tw/001/Upload/OldFile/FileDownLoad/PublishActivies/20131104092709371.jpg"
            alt="蟹逅經典特展海報"
            >
        </div> -->
    </div>
</template>
<style>
    .bannerIndex {
        background:url("/src/assets/banner.png")center center no-repeat; 
        width: 100%;
    }
    .shack {
        font-size: large;
        color: #ffffff;
        text-shadow: #D09366 1px 0 10px;
        z-index: 4;
        animation: change 1s ease-in-out;
    }
    .imgLeftRect {
        background: linear-gradient(to right, #D09366, #B5A9B2);
        border-radius: 16% 84% 77% 23% / 41% 67% 33% 59%;
    }
    .imgLeftRect img {
        box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
        transform:rotate(-5deg);
    }
    .imgRightRect {
        background: linear-gradient(to right, #154166, #525252);
        border-radius: 37% 63% 45% 55% / 31% 28% 72% 69%;
    }
    .imgRightRect img {
        box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
        transform:rotate(5deg);
    }
    .activeBgTitle {
        background-color: #525252;
        color: #ffffff;
    }
    @keyframes change {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
<script setup>
    import { ref, reactive, watch } from 'vue'
    let text = ref('哈囉')
    setTimeout(()=> {
        text.value = '歡迎來到屏東海生館'
    }, 3000)
</script>