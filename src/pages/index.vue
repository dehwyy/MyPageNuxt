<template>
  <AboutWrapper>
    <AboutImage />
    <AboutSwiper />
  </AboutWrapper>
</template>

<script lang="ts" setup>
import Entities from "~/entities";
import Widgets from "~/widgets";
const { AboutSwiper, AboutImage } = Entities.visual
const {AboutWrapper} = Widgets.wrappers
</script>
