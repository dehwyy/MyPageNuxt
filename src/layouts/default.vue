<template>
  <AppWrapper>
    <Navbar />
    <slot />
    <Footer />
  </AppWrapper>
</template>

<script lang="ts" setup>

import Footer from "~/components/footer.vue";
import AppWrapper from "~/components/appWrapper.vue";
</script>
