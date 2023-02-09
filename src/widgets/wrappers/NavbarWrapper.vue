<template>
  <div class="z-10 bg-white h-24 py-5 flex items-center border-b-2 border-b-black fixed top-0 left-0 right-0 relative">
    <div v-if="!isAccessible" class="w-full h-full bg-pale-green absolute z-50"/>
    <div class="flex gap-16 w-[500px] mx-auto justify-center relative z-40">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{isAccessible: boolean}>()
</script>


