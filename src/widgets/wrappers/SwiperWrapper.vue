<template>
  <swiper :modules="swiperModules" :grabCursor="true"
          :navigation="width < 1281 && true"
          :effect="'creative'"
          :creativeEffect="effect"
          :slides-per-view="1"
          :space-between="10"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :loop="true"
          :class="width < 1281 && 'swiperOverride'"
          class="w-full mx-auto mt-5 flex font-semibold min-w-[275px]">
    <slot />
  </swiper>
</template>
<script lang="ts" setup>
import { EffectCreative, Autoplay, Navigation } from 'swiper';
const swiperModules = [EffectCreative, Autoplay, Navigation]
const effect = {
  prev: {
    translate: [0, 0, -400],
  },
  next: {
    translate: ['100%', 0, 0],
  }
}

const {width} = useWindowSize()
</script>

<style>
.swiperOverride > .swiper-button-prev, .swiperOverride > .swiper-button-next {
  margin-top: 0;
  width: 50%;
  top: 0;
  height: 100%;
}
.swiperOverride > .swiper-button-prev:after,  .swiperOverride > .swiper-button-next:after{
  content: "";
}
</style>
