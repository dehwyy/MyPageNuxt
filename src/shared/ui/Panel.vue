<template>
  <div class="flex flex-col items-center gap-4 text-xl">
    <div @click="isOpened = !isOpened" class="select-none cursor-pointer text-xl bg-white px-10 underline border-4 border-black py-1 rounded">
      <slot />
    </div>
    <div v-if="isOpened" :class="randomClassColor"  class="grid grid-cols-2 gap-4 border-4 rounded-md border-black shadow-neo p-4">
      <div v-for="item in list" class="underline font-bold">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import Shared from "~/shared";

interface IProps<T = string | number> {
  list: Array<T>
}
defineProps<IProps>()
const colors = ["bg-pale-green", "bg-pale-yellow", "bg-pale-ocean"]


const randomClassColor = Shared.utils.ArrayRandomizer.randomize(colors)[0]

const isOpened = ref(false)
</script>
