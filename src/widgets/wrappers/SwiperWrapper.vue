<template>
  <swiper :slides-per-view="1" class="w-[400px] mx-auto mt-5 flex font-semibold p-10">
    <slot />
  </swiper>
</template>

<script lang="ts" setup>
import { Swiper } from 'swiper/vue'

</script>
