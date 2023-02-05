<template>
  <swiper :modules="swiperModules" :grabCursor="true"
          :effect="'creative'"
          :creativeEffect="effect"
          :slides-per-view="1"
          :space-between="50"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :loop="true"
          :mousewheel="true" class="w-full mx-auto mt-5 flex font-semibold">
    <slot />
  </swiper>
</template>

<script lang="ts" setup>
import { EffectCreative, Autoplay } from 'swiper';
const swiperModules = [EffectCreative, Autoplay]
const effect = {
  prev: {
    translate: [0, 0, -400],
  },
  next: {
    translate: ['100%', 0, 0],
  }
}

import { Swiper } from 'swiper/vue'
</script>
