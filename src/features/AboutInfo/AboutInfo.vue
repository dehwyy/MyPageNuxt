<template>
  <SwiperWrapper>
    <SwiperSlide v-for="local in getLocals">
      <div class="h-[120px] bg-pale-yellow m-5 flex items-center text-center justify-center bg-white border-4 rounded-md border-black shadow-neo p-4">
        {{local.info}}
      </div>
    </SwiperSlide>
  </SwiperWrapper>
</template>

<script lang="ts" setup>
import Widgets from "~/widgets";
import GlobalStore from "~/composables/store";

interface IGetLocal {
  info: string
}

const {getLocals}: {getLocals: IGetLocal[]} = GlobalStore.store.useInfoStore()

const {SwiperWrapper} = Widgets.wrappers
</script>
