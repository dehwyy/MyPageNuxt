<template>
  <div class="flex flex-col gap-10 w-[500px]">
    <AboutNameAge />
    <AboutInfo />
    <AboutTechs/>
  </div>
</template>

<script lang="ts" setup>
import Features from "~/features";


const {AboutTechs, AboutInfo, AboutNameAge} = Features.templates
</script>
