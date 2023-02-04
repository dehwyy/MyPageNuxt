<template>
  <AboutWrapper>
    <AboutSwiper />
  </AboutWrapper>
</template>

<script lang="ts" setup>
import Entities from "~/entities";
import Widgets from "~/widgets";
const { AboutSwiper } = Entities.visual
const {AboutWrapper} = Widgets.wrappers
</script>
