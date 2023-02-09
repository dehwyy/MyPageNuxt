<template>
 <Swiper :modules="swiperModules" :grabCursor="true"
         :navigation="width < 1000 && true"
         :effect="'fade'"
         :slides-per-view="1"
         :space-between="10"
         :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
         :class="width < 1000 && 'swiperOverride'"
         :loop="true" class="w-[100%] overflow-hidden">
   <slot />
 </Swiper>
</template>
<!--TODO: Made adaptive images for phones-->
<script lang="ts" setup>
import { EffectFade, Autoplay, Navigation } from 'swiper';


const swiperModules = [EffectFade, Autoplay, Navigation]
const {width} = useWindowSize()
</script>
