<template>
  <SwiperWrapper>
  <SwiperSlide v-for="local in getLocals">
    <div class="m-5 bg-[#2F2F2FFF] text-white border-4 rounded-md border-pale-pink text-4xl shadow-wh p-4 text-center">
      {{local.techText}}
      <div class="mt-10 text-2xl grid grid-cols-6 lg:grid-cols-2 items-center gap-x-4 gap-y-4 bg-clip-text bg-gradient-to-r from-pink-400 to-light-yellow">
        <div v-for="tech in techs" class="flex-auto text-center font-bold text-transparent bg-transparent">
          {{tech}}
        </div>
      </div>
    </div>
  </SwiperSlide>
  </SwiperWrapper>
</template>
<!--I should do interactive slider here-->
<script lang="ts" setup>
import GlobalStore from "~/composables/store";
import Widgets from "~/widgets";
import {SwiperSlide} from "swiper/vue";

interface IFromStore {
  techs: string[]
  getLocals: {techText: string}[]
}

const {techs, getLocals}: IFromStore = GlobalStore.store.useInfoStore()


const {SwiperWrapper} = Widgets.wrappers
</script>

<style>
a {
  color: #2f2f2f
}
</style>