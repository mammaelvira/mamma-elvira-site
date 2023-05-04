<template>
  <div class="color-band">
    <div class="bg-me-lapis"></div>
    <div class="bg-me-mint"></div>
    <div class="bg-me-orange"></div>
    <div class="bg-me-pink"></div>
  </div>
</template>

<style scoped>
.color-band {
  @apply absolute bottom-8 md:bottom-0
  flex justify-center gap-1
  h-1/4;
}

.color-band > div {
  @apply h-full w-2;
}
</style>
