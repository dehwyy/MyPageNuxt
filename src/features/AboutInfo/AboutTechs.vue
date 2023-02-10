<template>
  <div class="min-w-[250px] vsm:text-3xl vsm:mx-3 m-5 bg-pale-violet text-white border-4 rounded-md border-black text-4xl shadow-neo p-4 text-center">
    <swiper :navigation="width < 1281 && true"
            :modules="[Autoplay, Navigation]"
            :autoplay="{delay: 5000,disableOnInteraction: true,}"
            :loop="true"
            :class="width < 1281 && 'swiperOverride'"
            class="mx-auto mt-5 font-semibold cursor-grab">
      <SwiperSlide v-for="local in getLocals">
        <div class="text-black w-min m-auto min-w-[400px] md:min-w-full vsm:-mb-10">
          {{local.techText}}
        </div>
      </SwiperSlide>
    </swiper>
    <div class="gap-6 grid grid-cols-3 premd:grid-cols-2 sm:grid-cols-1 justify-center text-black mt-10 text-2xl">
      <div v-for="tech in getTechs" class="basis-1/4">
        <Dialog :fields="tech.techs" :extra-text="tech.text"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import GlobalStore from "~/composables/store";
import { Autoplay, Navigation } from 'swiper';
import Shared from "~/shared";

interface IFromStore {
  getTechs:  {text: string, techs: string[]}[]
  getLocals: {techText: string}[]
}

const {getTechs, getLocals}: IFromStore = GlobalStore.store.useInfoStore()

const {width} = useWindowSize()

const {Dialog} = Shared.ui
</script>
