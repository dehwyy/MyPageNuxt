<template>
  <SwiperWrapper>
    <SwiperSlide v-for="image in profileImages">
  <div class="bg-black w-[300px] h-[300px] mx-auto my-5 border-4 rounded-xl border-black shadow-neo overflow-hidden">
    <img :src="image" alt="profileImage" class="h-full w-full object-cover"/>
  </div>
    </SwiperSlide>
    </SwiperWrapper>
</template>

<script lang="ts" setup>
import {SwiperSlide,} from "swiper/vue";
import Widgets from "~/widgets";
import GlobalStore from "~/composables/store";

 const {profileImages} = GlobalStore.store.useInfoStore()

const {SwiperWrapper} = Widgets.wrappers
</script>
