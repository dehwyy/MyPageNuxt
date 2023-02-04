<template>
  <div class="w-[300px] mx-auto mt-5 flex flex-col gap-3 font-semibold">
    <div class="bg-white border-4 rounded-md border-black shadow-neo p-4 text-center">
      {{name}},<br />{{age}}
    </div>
    <div class="h-[120px] flex items-center justify-center bg-white border-4 rounded-md border-black shadow-neo p-4">
      {{info}}
    </div>
    <div class="h-[350px] flex flex-wrap gap-2 bg-white border-4 rounded-md border-black shadow-neo p-4">
      {{techText}}
      <div v-for="tech in techs" class="flex-auto text-center font-bold">
        {{tech}}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GlobalStore from "~/composables/store";
import { storeToRefs } from "pinia";

interface ILocalFields {
  name: string
  techText: string
  hobbies: string[]
  quotes: string[]
  age: string
  info: string
}

interface props {
  local: ILocalFields
}

const store = GlobalStore.store.useInfoStore()
const {techs} = storeToRefs(store)
const {local} = defineProps<props>()
const {age, name, hobbies, quotes, techText, info} = local
</script>
