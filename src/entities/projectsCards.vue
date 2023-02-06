<template>
  <div class="bg-white p-4 bg-pale-yellow m-5 text-center justify-center bg-white border-4 rounded-md border-black shadow-neo p-4">
    <div class="text-4xl font-semibold">
      {{nextCards.title}}
    </div>
    <div class="">
      {{nextCards.description}}
    </div>
    <div class="">
      <img :src="nextCards.images[0].imageUrl" class="w-full h-full min-h-[300px] object-cover"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
// remove this import
import GlobalStore from "~/composables/store";

const {nextCards} = GlobalStore.store.useProjectsStore()
</script>
