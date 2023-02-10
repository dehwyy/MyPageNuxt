<template>
  <div v-intersection-observer="onIntersectionObserver" :class="[constClass, isVisible ? visibleClass : unvisibleClassY]" class="duration-[1500ms] mx-auto bg-[url('/giga.jpg')] w-[45%] min-w-[400px] h-[400px] vsm:min-w-[270px] vsm:h-[270px] bg-cover bg-no-repeat relative rounded-2xl">
      <div class="select-none flex absolute bottom-[10px] left-[50%] translate-x-[-50%] text-6xl font-semibold text-white">
        dehwyy
      </div>
  </div>
</template>

<script lang="ts" setup>
import Shared from "~/shared";
import { vIntersectionObserver } from '@vueuse/components'

const {IntersectionObserver} = Shared.utils

const constClass = "transition-all duration-1000" // const class
const visibleClass = 'transform-none opacity-100' // visible class
const unvisibleClassY = 'translate-y-96 opacity-0' // unvisible class y axis

const [isVisible, onIntersectionObserver]= IntersectionObserver.useIntersecting()
</script>
