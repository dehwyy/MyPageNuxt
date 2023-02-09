<template>
  <div class="flex flex-col items-center gap-4 text-xl w-full">
    <div @click="isOpened = !isOpened" class="select-none cursor-pointer text-xl bg-white px-10 py-4 border-4 border-black py-1 rounded">
      <slot />
    </div>
    <transition-expand>
      <div v-if="isOpened" :class="randomClassColor" class="grid grid-cols-2 gap-4 border-4 rounded-md border-black shadow-neo p-4">
        <div v-for="item in list" class="underline font-bold">
          {{item}}
        </div>
      </div>
    </transition-expand>
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
