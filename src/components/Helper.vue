<template>
  <transition-fade :duration="500">
    <div v-if="isVisible" class="w-[300px] premd:w-[175px] h-[210px] bg rounded-2xl text-white z-50 border-4 border-black shadow-neo">
      <div class="w-5 h-5 absolute top-2 right-4 cursor-pointer" @click="() => isVisible = false">
        <CrossIcon/>
      </div>
      <div class="pt-2 text-center font-inco text-2xl premd:text-[20px] underline underline-offset-2">
        HINT!
      </div>
      <div class="pt-2 premd:pt-0 text-justify font-inco w-[90%] premd:text-[13px] mx-auto">
        This page is interactive! You can interact with several blocks with
        "Slide" on desktop and "Click" on other devices! (Usually this blocks are colored)
      </div>
    </div>
  </transition-fade>
</template>

<script lang="ts" setup>
import CrossIcon from "~/assets/cross.svg"
const isVisible = ref(false)
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 5000)
})
</script>

<style>
  .bg {
      background: rgba(45, 45, 45, 1);
  }
</style>
