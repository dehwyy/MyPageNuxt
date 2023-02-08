<template>
    <div :class="randomClassColor" class="p-4 gap-2 flex flex-col m-5 text-center justify-center border-4 rounded-md border-black shadow-neo p-4">
      <div class="text-4xl font-semibold">
        {{title}}
      </div>
      <div>
        {{desc}}
      </div>
      <div>
        My person rate is <span class="font-bold">{{personalRate}}</span>
      </div>
      <div class="mb-5">
        <Panel :list="stack">Stack:</Panel>
      </div>
      <SwiperImage>
        <SwiperSlide v-for="image in images">
          <img :src="image.imageUrl" class="w-full h-full min-h-[300px] object-cover"/>
        </SwiperSlide>
      </SwiperImage>
    </div>
</template>

<script lang="ts" setup>
import Shared from "~/shared";

interface cardProps {
  title: string
  desc: string
  stack: string[]
  personalRate: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  images: {imageUrl: string, text: string}[]
}
defineProps<cardProps>()
const colors = ["bg-pale-green", "bg-pale-yellow", "bg-pale-ocean"]

const randomClassColor = Shared.utils.ArrayRandomizer.randomize(colors)[0]
const {SwiperImage, Panel} = Shared.ui
</script>
