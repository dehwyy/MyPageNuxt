<template>
  <AppWrapper>
    <Navbar />
    <ContentWrapper>
      <slot />
    </ContentWrapper>
    <Footer />
  </AppWrapper>
</template>

<script lang="ts" setup>
import Widgets from "~/widgets";
const {ContentWrapper, AppWrapper} = Widgets.wrappers
</script>
