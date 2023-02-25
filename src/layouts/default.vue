<template>
    <AppWrapper>
      <Navbar />
      <ClientOnly>
        <div class="fixed top-28 right-10 z-50 premd:right-5 lowest:right-3 premd:top-24">
          <Helper />
        </div>
      </ClientOnly>
      <ContentWrapper>
        <slot />
      </ContentWrapper>
      <Footer />
    </AppWrapper>
</template>

<script lang="ts" setup>
import Widgets from "~/widgets";
import Helper from "~/components/Helper.vue";
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
