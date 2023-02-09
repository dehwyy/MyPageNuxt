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

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
