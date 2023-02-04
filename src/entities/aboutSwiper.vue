<template>
  <swiper
    :slides-per-view="1"
  >
    <swiper-slide><AboutInfoTemplate :local="rus"/></swiper-slide>
    <swiper-slide><AboutInfoTemplate :local="eng" /></swiper-slide>
    <swiper-slide><AboutInfoTemplate :local="jp" /></swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
// TODO: custom swiper for each secrtion

import { Swiper, SwiperSlide } from 'swiper/vue'
import Features from "~/features";
import GlobalStore from "~/composables/store";
import { storeToRefs } from "pinia";
const store = GlobalStore.store.useInfoStore()
const {rus, eng, jp} = storeToRefs(store)
const {AboutInfoTemplate} = Features.templates
</script>
