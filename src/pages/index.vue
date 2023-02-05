<template>
  <AboutWrapper>
    <AboutBackground />
    <AboutSwiper />
  </AboutWrapper>
</template>

<script lang="ts" setup>
import Entities from "~/entities";
import Widgets from "~/widgets";
const { AboutSwiper, AboutBackground } = Entities.visual
const {AboutWrapper} = Widgets.wrappers
</script>
