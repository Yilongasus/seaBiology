<!-- ***************

    屏東海生館形象官網
    首頁
    2024/04/13 開發中

     *************** -->
<template>
    <div id="main" class="mt-4 p-5 position-sticky zindex_2 text-white">
        <h1 class="text-light pt-5 shack display-2 z-3" :key="text">{{ text }}</h1>
    </div>
    <div class="d-flex justify-content-center position-sticky zindex_2 mt-3">
        <div class="imgIndexShow imgLeftRect animate__animated animate__fadeInLeft animate__delay-4s">
            <img
            class="img-thumbnail w-50" 
            src="https://ws.nmmba.gov.tw/001/Upload/OldFile/FileDownLoad/PublishActivies/20150715104349228.JPG"
            alt="費雪的秘密海報"
            >
        </div>
        <!-- <div class="imgIndexShow imgCenterRect">
            <img
            class="img-thumbnail h-50"
            src="https://ws.nmmba.gov.tw/001/Upload/OldFile/FileDownLoad/PublishActivies/20131104092709371.jpg"
            alt="蟹逅經典特展海報"
            >
        </div> -->
        <div class="imgIndexShow imgRightRect animate__animated animate__fadeInRightBig animate__delay-5s">
            <img
            class="img-thumbnail w-50"
            src="https://ws.nmmba.gov.tw/001/Upload/217/relpic/6415/12438/fb37bbcf-a02f-4508-a881-a0d8802238b7.jpg"
            alt="這樣教我就懂海報"
            >
        </div>
    </div>
</template>
<style>
    .shack {
        font-size: large;
        z-index: 4;
        animation: change 1s ease-in-out;
    }
    .imgLeftRect {
        background: linear-gradient(to right, #083DA6, #3971E0);
        border-radius: 16% 84% 77% 23% / 41% 67% 33% 59%;
    }
    .imgLeftRect img {
        box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
        transform:rotate(-5deg);
    }
    .imgRightRect {
        background: linear-gradient(to right, #8093F1, #FBC860);
        border-radius: 37% 63% 45% 55% / 31% 28% 72% 69%;
    }
    .imgRightRect img {
        box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
        transform:rotate(5deg);
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