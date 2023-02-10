<template>
  <SwiperWrapper>
    <div class="text-center text-4xl underline z-40 p-4 lg:w-[90%] mb-5 bg-pale-pink w-1/3 mx-auto border-4 rounded-xl border-black shadow-neo">It's me</div>
    <SwiperSlide v-for="image in profileImages">
      <div class="w-[300px] h-[300px] mx-auto lg:w-[250px] lg:h-[250px] my-5 border-4 rounded-xl border-black shadow-neo overflow-hidden">
          <img :src="image" alt="profileImage" class="h-full w-full object-cover"/>
        </div>
      </SwiperSlide>
  </SwiperWrapper>
</template>

<script lang="ts" setup>
import Widgets from "~/widgets";
import GlobalStore from "~/composables/store";

const {profileImages} = GlobalStore.store.useInfoStore()
const {SwiperWrapper} = Widgets.wrappers
</script>