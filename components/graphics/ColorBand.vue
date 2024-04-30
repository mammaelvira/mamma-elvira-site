<template>
  <div class="color-band">
    <div class="bg-me-olive"></div>
    <div class="bg-me-lapis"></div>
    <div class="bg-me-yellow"></div>
    <div class="bg-me-red"></div>
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
