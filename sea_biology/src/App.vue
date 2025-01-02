<!-- ***************

    屏東海生館形象官網
    首頁
    2022/11/13 開發中

     *************** -->

<template>
    <div class="mask" v-show="mask"></div>
    <TheParticlesVue v-show="!mask"></TheParticlesVue>
    <TheNavLayoutVue v-show="!mask"></TheNavLayoutVue>
    <TheFooterLayoutVue v-show="!mask"></TheFooterLayoutVue>
    <!-- <TheSideBarVue></TheSideBarVue> -->
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheParticlesVue from "./components/TheParticles.vue";

import TheNavLayoutVue from "./components/TheNavLayout.vue";
import TheFooterLayoutVue from "./components/TheFooterLayout.vue";

import AOS from "aos";
import "aos/dist/aos.css";

import "boxicons";

// sideBar
// import TheSideBarVue from './components/TheSideBar.vue'

// import {ref} from 'vue'

import json from "./csv/Exhibition.json";

export default {
    name: "App",
    components: {
        TheParticlesVue,
        TheNavLayoutVue,
        TheFooterLayoutVue,
    },
    data() {
        return {
        exhibitionItems: json,
        pageTitle: "",
        mask: false,
        };
    },
    setup() {},
    mounted() {
        this.setPageTitle();
        window.addEventListener('resize', this.checkScreenWidth);
    },
    methods: {
        setPageTitle() {
            this.pageTitle = import.meta.env.VITE_APP_TITLE || "敬請期待";
            document.title = this.pageTitle;
        },
        checkScreenWidth() {
            const isMobile = window.innerWidth <= 768;
            isMobile? this.mask = true : this.mask = false;
        }
    }
};

AOS.init();
</script>

<style>
#app {
    font-family: "Microsoft Jhenghei", "Avant Garde", sans;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #444444;
    position: relative;
    width: 100%;
    height: 100%;
}

#main {
    background: linear-gradient(to right, #6b5264, #154166, #6b5264) !important;
    border-radius: 80% 20% 81% 19% / 41% 82% 18% 59%;
}

.btn-yellow {
    background-color: #fbc860 !important;
    box-shadow: 5px 5px 0px #083da6;
    transition: all 2s;
}

.btn-yellow:hover {
    background-color: #083da6 !important;
    box-shadow: 5px 5px 0px #fbc860;
    color: #ffffff !important;
}

.tipGray {
    font-size: 14px;
    background: #e7ebef;
    padding: 0.75rem;
    width: 350px;
    max-width: 350px;
    min-width: min-content;
}

.mask {
    background-color: rgba(255, 255, 255, 0.98);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
}

.mask::after {
    content: "手機版製作中~💦";
    display: block;
    background-color: rgba(208, 147, 102, 0.9);
    font-size: 24px;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    color: rgba(21, 65, 102, 1);
    position: absolute;
    top: 50%;
    left: 42%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    animation: heartbeat 1s infinite ease-in-out;
}

@keyframes heartbeat {
    0%, 100% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.1);
    }
    50% {
        transform: scale(1.2);
    }
    75% {
        transform: scale(1.1);
    }
}
</style>