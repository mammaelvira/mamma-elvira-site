<script setup lang="ts">
const menuModalOpen = useMenuModalOpen()

const modalToggle = () => (menuModalOpen.value = !menuModalOpen.value)
</script>

<template>
  <div>
    <button type="button" @click="modalToggle">
      <div class="menu-icon flex flex-col max-h-min">
        <div class="bg-me-ink"></div>
        <div class="bg-me-ink"></div>
        <div class="bg-me-ink"></div>
        <span class="text-xs">menu</span>
      </div>
    </button>
  </div>
</template>

<style scoped>
.menu-icon div {
  @apply h-1.25 w-8 mb-1;
}
</style>
