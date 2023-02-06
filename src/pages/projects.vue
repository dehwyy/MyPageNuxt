<template>
  <ProjectsCardsWrapper>
      <ProjectsCards />
  </ProjectsCardsWrapper>
</template>

<script lang="ts" setup>
import Entities from "~/entities";
import Widgets from "~/widgets";

const {ProjectsCards} = Entities.visual
const {ProjectsCardsWrapper} = Widgets.wrappers
</script>
