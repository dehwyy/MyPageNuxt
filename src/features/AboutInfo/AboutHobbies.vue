<template>
  <SwiperWrapper>
      <SwiperSlide v-for="local in getLocals" >
        <div class="mx-auto w-6/12 m-5 items-center flex flex-col justify-center align-center bg-pale-green border-4 rounded-md border-black shadow-neo p-4">
          <span class="font-bold text-[28px] pb-5">{{local.hobbiesText}}</span>
          <div v-for="hobby in local.hobbies" class="h-[40px] flex items-center m-5 text-center underline">
            {{hobby}}
          </div>
        </div>
      </SwiperSlide>
  </SwiperWrapper>
</template>

<script lang="ts" setup>
import Widgets from "~/widgets";
import GlobalStore from "~/composables/store";

interface IGetLocal {
  hobbies: string[]
  hobbiesText: string
}

const {getLocals}: {getLocals: IGetLocal[]} = GlobalStore.store.useInfoStore()

const {SwiperWrapper} = Widgets.wrappers
</script>
