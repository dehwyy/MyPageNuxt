<template>
  <NavbarWrapper>
    <NavbarItem v-for="i in 5">{{i}}</NavbarItem>
  </NavbarWrapper>
</template>

<script lang="ts" setup>
import Components from "~/shared";
import Widgets from "~/widgets";

const {NavbarItem} = Components.uis
const {NavbarWrapper} = Widgets.wrappers
</script>