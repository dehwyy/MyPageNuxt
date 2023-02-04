<template>
  <SwiperWrapper>
  <SwiperSlide v-for="local in getLocals">
    <div class="h-[350px] m-5 flex flex-wrap gap-2 bg-white border-4 rounded-md border-black shadow-neo p-4">
      {{local.techText}}
      <div v-for="tech in techs" class="flex-auto text-center font-bold">
        {{tech}}
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
