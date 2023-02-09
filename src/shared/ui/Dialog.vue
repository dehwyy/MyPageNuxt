<template>
  <div class="text-white flex flex-col flex-grow justify-center">
    <button @click="isOpened = !isOpened" class="bg-gray-700 w-full border-4 rounded-md border-black shadow-neo p-4">{{extraText || ""}}</button>
    <transition-expand>
      <div v-if="isOpened" class="bg-gray-700 border-4 rounded-md border-black shadow-neo p-4 select-text">
        <div class="w-full" v-for="field in fields">{{field}}</div>
      </div>
    </transition-expand>
  </div>
</template>

<script lang="ts" setup>
 defineProps<{fields: Array<string | number>, extraText?: string}>()

 const isOpened = ref(false)
</script>
