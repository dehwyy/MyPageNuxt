<template>
  <div class="flex flex-col w-[1000px] select-none">
    <AboutProfileImage />
    <div class="flex gap-12">
      <AboutNameAge />
      <AboutInfo />
    </div>
    <AboutTechs/>
    <AboutHobbies />
  </div>
</template>

<script lang="ts" setup>
import Features from "~/features";

const {AboutTechs, AboutInfo, AboutNameAge, AboutProfileImage, AboutHobbies} = Features.templates
</script>
