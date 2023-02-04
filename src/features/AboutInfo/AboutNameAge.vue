<template>
  <SwiperWrapper>
    <SwiperSlide v-for="local in getLocals">
      <div class="bg-white border-4 rounded-md border-black shadow-neo p-4 text-center mx-5">
        {{local.name}},<br />{{local.age}}
      </div>
    </SwiperSlide>
  </SwiperWrapper>
</template>

<script lang="ts" setup>
import {SwiperSlide,} from "swiper/vue";
import Widgets from "~/widgets";
import GlobalStore from "~/composables/store";

interface IGetLocal {
  name: string,
  age: string
}

const {getLocals}: {getLocals: IGetLocal[]} = GlobalStore.store.useInfoStore()


const {SwiperWrapper} = Widgets.wrappers
</script>
