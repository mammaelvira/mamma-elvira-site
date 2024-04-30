<template>
  <div class="stripes">
    <div class="bg-me-rust"></div>
    <div class="bg-me-red mr-4"></div>
    <div class="bg-me-yellow mr-8"></div>
    <div class="bg-me-lapis mr-12"></div>
    <div class="bg-me-olive mr-16"></div>
  </div>
</template>

<style scoped>
.stripes {
  @apply flex flex-col
    -ml-8 mb-4;
}
.stripes div {
  @apply h-2 mb-1;
}
</style>
