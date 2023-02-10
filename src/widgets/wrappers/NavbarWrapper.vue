<template>
  <div class="z-10 bg-white h-24 flex items-center border-b-2 border-b-black fixed top-0 left-0 right-0">
    <div v-if="!isAccessible" class="w-full h-full absolute z-50"/>
    <div class="flex lowest:flex-col gap-16 lowest:h-4 lowest:gap-3 w-[500px] mx-auto justify-center relative z-10">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{isAccessible: boolean}>()
</script>


