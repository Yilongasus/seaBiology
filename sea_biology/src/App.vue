<!-- ***************

    屏東海生館形象官網
    首頁
    2022/11/13 開發中

     *************** -->

<template>
    <TheParticlesVue></TheParticlesVue>
    <TheNavLayoutVue></TheNavLayoutVue>
    <TheFooterLayoutVue></TheFooterLayoutVue>
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
        };
    },
    setup() {},
    mounted() {
        this.setPageTitle();
    },
    methods: {
        setPageTitle() {
        this.pageTitle = import.meta.env.VITE_APP_TITLE || "敬請期待";
        document.title = this.pageTitle;
        },
    },
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
</style>