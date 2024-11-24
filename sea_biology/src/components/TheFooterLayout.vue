<template>
    <div id="footer" class="py-1 position-sticky zindex_2" v-if="show">
        <div class="pt-3">
            <p class="pt-3">
                ©2024&emsp;By&nbsp;<a class="btn btn-outline-light" href="https://github.com/Yilongasus" rel="noreferrer noopener">Yilongasus</a>&emsp;免責聲明
            </p>
            <p>本網站僅供個人作品集展示而設計，不提供任何商業用途。</p>
        </div>
    </div>
</template>
<script setup>
    import { nextTick, ref, onMounted, watch } from 'vue'
    import { useRoute } from 'vue-router'
    const route = useRoute(),
        show = ref(true)
    watch(() => route.name, (to, from) => {
        to === 'TheLogin' ? show.value = false : show.value = true
    })
</script>
<style scoped>
    #footer {
        color: #FFFFFF;
        background-image: linear-gradient(to top, #7F7F8A 30%, #A2A3A4);
    }
</style>