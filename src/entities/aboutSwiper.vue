<template>
  <div class="flex flex-col w-[1000px] lg:w-[85vw] select-none">
    <AboutProfileImage v-intersection-observer="onIntersectionObserver1" :class="['delay-500', constClass, isVisible1 ? visibleClass : unvisibleClassY]"/>
    <div class="flex gap-12 lg:flex-col lg:gap-0">
      <AboutNameAge v-intersection-observer="onIntersectionObserver2" :class="[constClass, isVisible2 ? visibleClass : unvisibleClassXM]"/>
      <AboutInfo v-intersection-observer="onIntersectionObserver5" :class="[constClass, isVisible5 ? visibleClass : unvisibleClassXP]"/>
    </div>
    <AboutTechs v-intersection-observer="onIntersectionObserver3" :class="[constClass, isVisible3 ? visibleClass : unvisibleClassY]"/>
    <AboutHobbies v-intersection-observer="onIntersectionObserver4" :class="[constClass, isVisible4 ? visibleClass : unvisibleClassY]"/>
  </div>
</template>

<script lang="ts" setup>
import Features from "~/features";
import { vIntersectionObserver } from '@vueuse/components'
import Shared from "~/shared";

const {IntersectionObserver} = Shared.utils
const constClass = "transition-all duration-1000" // const class
const visibleClass = 'transform-none opacity-100' // visible class
const unvisibleClassY = 'translate-y-10 opacity-0' // unvisible class y axis
const unvisibleClassXM = '-translate-x-20 opacity-0' // unvisible class -x axis
const unvisibleClassXP = 'translate-x-20 opacity-0' // unvisible class +x axis

const [isVisible1, onIntersectionObserver1]= IntersectionObserver.useIntersecting()
const [isVisible2, onIntersectionObserver2]= IntersectionObserver.useIntersecting()
const [isVisible3, onIntersectionObserver3]= IntersectionObserver.useIntersecting()
const [isVisible4, onIntersectionObserver4]= IntersectionObserver.useIntersecting()
const [isVisible5, onIntersectionObserver5]= IntersectionObserver.useIntersecting()

const {AboutTechs, AboutInfo, AboutNameAge, AboutProfileImage, AboutHobbies} = Features.fromAbout
</script>
