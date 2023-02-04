<template>
  <div class="bg-black w-[300px] h-[300px] mx-auto border-4 rounded-xl border-black shadow-neo overflow-hidden">
    <img :src="profileImage" alt="profileImage" class="h-full w-full"/>
  </div>
</template>

<script lang="ts" setup>
import GlobalStore from "~/composables/store";
import { storeToRefs } from "pinia";
const {profileImage} = storeToRefs(GlobalStore.store.useInfoStore())
</script>
