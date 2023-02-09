<script lang="ts" setup>
import Widgets from "~/widgets";
import GlobalStore from "~/composables/store";
import { storeToRefs } from "pinia";
import { Ref } from "@vue/reactivity";

const {NavbarWrapper, NavItemWrapper} = Widgets.wrappers

const {useNavbarStore} = GlobalStore.store
const navbarStore = useNavbarStore()
const {navbarItemsData}: IUseNavbarStore<Ref> = storeToRefs(navbarStore)

const isAccessible = ref(false) as Ref<boolean>


const setAccessible = () => {
  isAccessible.value = !isAccessible.value
  setTimeout(() => {
    isAccessible.value = true
  }, 800)
}

onMounted(async () => {
  setTimeout(() => {
    isAccessible.value = true
  }, 800)
})


</script>

<template>
    <NavbarWrapper :is-accessible="isAccessible">
      <NavItemWrapper v-for="i in navbarItemsData">
        <NuxtLink :to="i.href" :target="i.blank ? '_blank' :  ''" @click="setAccessible">
          {{i.innerText}}
        </NuxtLink>
        </NavItemWrapper>
    </NavbarWrapper>
</template>

