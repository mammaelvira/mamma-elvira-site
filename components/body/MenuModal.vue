<script setup lang="ts">
const menuModalOpen = useMenuModalOpen()

const modalToggle = () => (menuModalOpen.value = !menuModalOpen.value)
</script>

<template>
  <div>
    <button type="button" @click="modalToggle">
      <span class="menu-icon flex flex-col max-h-min">
        <span class="bg-me-ink"></span>
        <span class="bg-me-ink"></span>
        <span class="bg-me-ink"></span>
        <span class="text-xs">menu</span>
      </span>
    </button>
  </div>
</template>

<style scoped>
.menu-icon > span {
  @apply h-1.25 w-8 mb-1;
}
</style>
