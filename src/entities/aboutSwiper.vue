<template>
  <div class="flex flex-col w-[500px]">
    <AboutProfileImage />
    <AboutNameAge />
    <AboutInfo />
    <AboutTechs/>
  </div>
</template>

<script lang="ts" setup>
import Features from "~/features";

const {AboutTechs, AboutInfo, AboutNameAge, AboutProfileImage} = Features.templates
</script>
