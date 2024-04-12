<!-- ***************

    屏東海生館形象官網
    首頁
    2024/04/13 開發中

     *************** -->
<template>
    <div id="main" class="mt-4 p-5 position-sticky zindex_2 text-white">
        <h1 class="text-warning pt-5 shack display-2 z-3" :key="text">{{ text }}</h1>
    </div>
</template>
<style>
    .shack {
        font-size: large;
        z-index: 4;
        animation: change 1s ease-in-out;
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
        text.value = '歡迎來到水世界'
    }, 3000)
</script>