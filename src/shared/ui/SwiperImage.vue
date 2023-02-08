<template>
 <Swiper :modules="swiperModules" :grabCursor="true"
         :effect="'fade'"
         :slides-per-view="1"
         :space-between="10"
         :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
         :loop="true" class="w-[100%] overflow-hidden">
   <slot />
 </Swiper>
</template>

<script lang="ts" setup>
import { EffectFade, Autoplay } from 'swiper';


const swiperModules = [EffectFade, Autoplay]
const effect = {
  prev: {
    translate: [0, 0, -400],
  },
  next: {
    translate: ['100%', 0, 0],
  }
}
</script>
