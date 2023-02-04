<script lang="ts" setup>
import Widgets from "~/widgets";
import GlobalStore from "~/composables/store";
import { storeToRefs } from "pinia";
import { Ref } from "@vue/reactivity";

const {NavbarWrapper, NavItemWrapper} = Widgets.wrappers
const {useNavbarStore} = GlobalStore.store

const navbarStore = useNavbarStore()
const {navbarItemsData}: IUseNavbarStore<Ref> = storeToRefs(navbarStore)


</script>

<template>
    <NavbarWrapper>
      <NavItemWrapper v-for="i in navbarItemsData">
        <NuxtLink :to="i.href" :target="i.blank ? '_blank' :  ''">
          {{i.innerText}}
        </NuxtLink>
        </NavItemWrapper>
    </NavbarWrapper>
</template>

