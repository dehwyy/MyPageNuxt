<template>
  <SwiperWrapper>
    <SwiperSlide v-for="local in getLocals">
      <div class="bg-pale-ocean border-4 rounded-md border-black shadow-neo p-4 text-center m-5 vsm:min-h-[150px] vsm:flex vsm:items-center vsm:justify-center">
        {{local.name}},<br />{{local.age}}
      </div>
    </SwiperSlide>
  </SwiperWrapper>
</template>

<script lang="ts" setup>
import Widgets from "~/widgets";
import GlobalStore from "~/composables/store";


interface IGetLocal {
  name: string,
  age: string
}

const {getLocals}: {getLocals: IGetLocal[]} = GlobalStore.store.useInfoStore()

const {SwiperWrapper} = Widgets.wrappers
</script>
