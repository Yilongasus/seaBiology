<!-- ***************

    屏東海生館形象官網
    首頁
    2024/04/13 開發中

     *************** -->
<template>
    <div class="bannerIndex h-75 position-sticky zindex_2 text-white d-flex align-items-center justify-content-center">
        <h1 class="shack display-2 z-3 text-center" :key="text">{{ text }}</h1>
        <!-- <img src="/src/assets/swiperImg/422923_0.jpg" class="img-fluid rounded-circle" alt="首頁圖片"> -->
    </div>
    <div class="position-sticky zindex_2">

        <!-- ⭐暑假的熱門專區—企鵝館 -->
        <div class="container-fluid grayColorBackground">
            <div class="row">
                <h1 class="col-12 text-stone-600 text-start fw-semibold text-sm-center mt-4 mb-0 py-2 animate__animated animate__fadeInUp animate__delay-1s">暑假的熱門專區—企鵝館</h1>
            </div>
            <div class="row">
                <div class="col-sm-8 col-12 p-5">
                    <div class="d-flex align-items-center justify-content-start">
                        <div class="">
                            <div class="content-top px-3">
                            </div>
                            <div class="text-start">
                                <div 
                                class="text-violet-600 fw-bolder fs-4"
                                style="color: #D09366;"
                                >
                                    <box-icon name='hive' color="#D09366"></box-icon>企鵝樂園—企鵝們的歡樂天地
                                </div>
                                <div class="text-stone-500 py-1">走進屏東海生館的企鵝館，迎面而來的是一片寒冷的冰雪世界。</div>
                                <div class="text-stone-500">在這裡，您可以看到優遊其中的小企鵝們，它們在冰天雪地中活潑可愛，帶給您無限的樂趣。</div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-start mt-5">
                        <div class="">
                            <div class="text-start">
                                <div class="text-violet-600 font-semibold fs-4 fw-bolder" style="color: #154166;"><box-icon name='hive' color="#154166"></box-icon>企鵝的冰雪王國</div>
                                <div class="text-stone-500 py-1">屏東海生館的企鵝館為您展現一個夢幻的冰雪世界，這裡的小企鵝們自由自在地在冰冷的環境中嬉戲遊玩。</div>
                                <div class="text-stone-500">透過透明的玻璃牆，您可以近距離觀察這些可愛的小企鵝，感受到牠們的靈動與活力。</div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-start mt-5">
                        <div class="">
                            <div class="text-start">
                                <div class="text-violet-600 font-semibold fs-4 fw-bolder" style="color: #D09366;"><box-icon name='hive' color="#D09366"></box-icon>冰雪中的小冒險家</div>
                                <div class="text-stone-500 py-1">他們也像是冰雪世界中的小冒險家們，每天冒險在雪地中尋找新鮮的美食。</div>
                                <div class="text-stone-500">每一個動作都充滿了好奇與活力。來到這裡，您不僅可以觀賞到企鵝們的日常生活，還能感受到牠們帶來的無限歡樂與感動。</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-12 pb-4">
                    <div class="moviesDiv d-flex justify-content-center align-items-center align-self-center">
                        <img src="/src/assets/movies/stopCover.png" alt="" v-show="!playing" class="opacity-50 w-75" style="margin: 0 2rem;">
                        <video ref="videoStatus" src="/src/assets/movies/penguin.mp4" class="videoContent position-absolute" @ended="fn.end()" v-show="playing" muted autoplay playsinline loop></video>
                        <img v-if="!playing" src="/src/assets/movies/play.png" alt="點我撥放"  class="playContent" @click="fn.play()">
                        <img src="/src/assets/movies/mobile.png" alt="" class="position-absolute top-0 h-100 mx-auto" style="z-index: 10; cursor: pointer;" @click="fn.play()">
                    </div>
                </div>
            </div>
        </div>

        <!-- ---pinia示範 Start--- -->
        <!-- <h1>{{ counterStore.count }}</h1> -->
        <!-- ---End--- -->

        <!-- ⭐活動介紹 -->
        <div class="container-fluid">
            <div class="activeBgTitle d-flex align-items-center row pb-3 bg-white bg-opacity-75 animate__animated animate__fadeInUp animate__delay-3s">
                <h1 class="mt-4 mb-0 py-2 col-12 animate__animated animate__fadeInUp animate__delay-2s">特展活動介紹</h1>
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


            <div class="d-flex align-items-center row py-3 bg-white bg-opacity-75 animate__animated animate__fadeInUp animate__delay-4s">
                <div class="col-sm-6 col-12 text-start sm:order-2 order-1 animate__animated animate__fadeInLeft animate__delay-5s">
                    <div class="px-5 fs-6">
                        <p class="fw-bold">展現創意，探索科學</p>
                        <p class="lh-lg">本競賽以科學探究精神為出發點，生活中有許多大家習以為常的事件或現象，希望參賽者能多提出質疑與假設，收集和分析數據、驗證假設、重複驗證與討論，從這些過程中學習獲得結論，實際運用到生活當中。</p>
                    </div>
                </div>
                <div class="imgIndexShow imgRightRect col-sm-5 col-12 sm:order-1 order-2 animate__animated animate__fadeInRightBig animate__delay-5s">
                    <img
                    class="img-thumbnail w-50" 
                    src="https://ws.nmmba.gov.tw/001/Upload/217/relpic/6415/12438/fb37bbcf-a02f-4508-a881-a0d8802238b7.jpg"
                    alt="這樣教我就懂海報"
                    >
                </div>
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
        background: linear-gradient(to right, #525252, #525252);
        border-radius: 16% 84% 77% 23% / 41% 67% 33% 59%;
    }
    .imgLeftRect::after {
        background: linear-gradient(to right, #154166, #154166);
        border-radius: 84% 16% 45% 55% / 57% 43% 57% 43% ;
    }
    .grayColorBackground {
        background-color: rgba(245, 245, 245, .8);
        color: #57534E;
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
        background: linear-gradient(to right, #B5A9B2, #525252);
        color: #ffffff;
    }
    .moviesDiv {
        aspect-ratio: 12 / 15;
        max-width: 450px;
        position: relative;
        padding: 1rem;
    }
    .playContent {
        position: absolute;
        top: 1/3;
        right: 1/2;
        max-width: 50px;
        cursor: pointer;
        z-index: 20;
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
    .videoContent {
        height: 29rem;
        aspect-ratio: 10 / 16;
    }
    .mobileContent {
        z-index: 10;
        position: absolute;
        top: 0px;
        height: 100%;
        width: auto;
        margin: auto;
    }
    @media screen and (max-width: 576px) {
        .moviesDiv {
            aspect-ratio: 9 / 15;
            max-width : 500px;
            padding: 1.25rem;
        }
        .videoContent {
            height: 30rem;
            aspect-ratio: 9 / 16;
        }
    }
</style>
<script setup>
    import { ref, reactive, watch } from 'vue'
    import { useCounterStore } from '@/stores/useStore'
    const counterStore = useCounterStore()
    let text = ref('哈囉'),
        videoStatus = ref(),
        playing = ref(true),
        fn = {
            play() {
                playing.value = !playing.value;
                if( playing.value ){
                    videoStatus.value.play()
                }else{
                    videoStatus.value.pause()
                }
            },
            end() {
                playing.value = false;
                videoStatus.value.currentTime = 0;
            }
        };
    setTimeout(()=> {
        text.value = '歡迎來到屏東海生館'
    }, 3000)
</script>