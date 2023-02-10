<template>
    <div v-intersection-observer="onIntersectionObserver" :class="[randomClassColor, constClass, isVisible ? visibleClass : randomClassTransition]" class="bg-pale-violet text-xl p-4 gap-2 flex flex-col m-5 text-center justify-center border-4 rounded-md border-black shadow-neo p-4">
      <div class="text-4xl font-bold underline">
        {{title}}
      </div>
      <div class="w-5/6 mx-auto">
        {{desc}}
      </div>
      <div>
        My personal rate is <span class="font-bold">{{personalRate}}</span>
      </div>
      <div class="mb-5">
        <Panel :list="stack"><span class="underline font-bold">Stack</span> ↓</Panel>
      </div>
      <SwiperImage>
        <SwiperSlide v-for="image in images">
          <img :src="image.imageUrl" class="w-full h-full min-h-[300px] object-cover"/>
        </SwiperSlide>
      </SwiperImage>
    </div>
</template>
<!--TODO: redo screen of the apps-->
<script lang="ts" setup>
import Shared from "~/shared";
import { vIntersectionObserver } from '@vueuse/components'

const {IntersectionObserver} = Shared.utils

interface cardProps {
  title: string
  desc: string
  stack: string[]
  personalRate: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  images: {imageUrl: string, text: string}[]
}
defineProps<cardProps>()
const colors = ["bg-pale-ocean", "bg-pale-violet", "bg-pale-pink"]
const transitions = ["translate-x-20 opacity-0", "-translate-x-20 opacity-0", "translate-y-10 opacity-0"]

const constClass = "transition-all duration-1000" // const class
const visibleClass = 'transform-none opacity-100' // visible class

const [isVisible, onIntersectionObserver]= IntersectionObserver.useIntersecting()
const randomClassColor = Shared.utils.ArrayRandomizer.randomize(colors)[0]
const randomClassTransition = Shared.utils.ArrayRandomizer.randomize(transitions)[0]

const {SwiperImage, Panel} = Shared.ui
</script>
