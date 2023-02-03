<script lang="ts" setup>
import Components from "~/shared";
import Widgets from "~/widgets";
import GlobalStore from "~/composables/store";
import { storeToRefs } from "pinia";
import { Ref } from "@vue/reactivity";

const {NavbarItem} = Components.uis
const {NavbarWrapper} = Widgets.wrappers
const {useNavbarStore} = GlobalStore.store

const navbarStore = useNavbarStore()
const {navbarItemsData}: IUseNavbarStore<Ref> = storeToRefs(navbarStore)

</script>

<template>
    <NavbarWrapper>
      <NavbarItem v-for="i in navbarItemsData">{{i.innerText}}</NavbarItem>
    </NavbarWrapper>
</template>

