<template>
  <AppWrapper>
    <VitePwaManifest />
    <Navbar />
    <ContentWrapper>
      <slot />
    </ContentWrapper>
    <Footer />
  </AppWrapper>
</template>

<script lang="ts" setup>
import Widgets from "~/widgets";
import { VitePwaManifest } from "#components";
const {ContentWrapper, AppWrapper} = Widgets.wrappers
</script>
