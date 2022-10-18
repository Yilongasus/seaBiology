<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="../static/slideImg1.png" alt="slideImg1"></swiper-slide>
    <swiper-slide><img src="../static/slideImg2.png" alt="slideImg2"></swiper-slide>
    <swiper-slide><img src="../static/slideImg3.png" alt="slideImg3"></swiper-slide>
    <swiper-slide><img src="../static/slideImg4.png" alt="slideImg4"></swiper-slide>
    <swiper-slide><img src="../static/slideImg5.png" alt="slideImg5"></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
