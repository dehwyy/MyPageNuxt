<template>
  <SwiperWrapper class="w-[70%]">
      <SwiperSlide v-for="local in getLocals">
        <div class="m-5 items-center flex flex-col justify-center align-center bg-white border-4 rounded-md border-black shadow-neo p-4">
          {{local.hobbiesText}}
          <div v-for="hobby in local.hobbies" class="h-[60px] flex items-center m-5 text-center">
            {{hobby}}
          </div>
        </div>
      </SwiperSlide>
  </SwiperWrapper>
</template>

<script lang="ts" setup>
import {SwiperSlide} from "swiper/vue";
import Widgets from "~/widgets";
import GlobalStore from "~/composables/store";

interface IGetLocal {
  hobbies: string[]
  hobbiesText: string
}

const {getLocals}: {getLocals: IGetLocal[]} = GlobalStore.store.useInfoStore()

const {SwiperWrapper} = Widgets.wrappers
</script>
