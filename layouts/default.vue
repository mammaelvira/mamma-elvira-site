<script setup lang="ts">
const menuModalOpen = useMenuModalOpen()
</script>

<template>
  <div id="app-layout">
    <dialog id="full-page-modal" class="z-50" :open="menuModalOpen"></dialog>
    <BodyTheHeader />

    <main class="p-8 pt-24">
      <slot />
    </main>

    <BodyTheFooter />
  </div>

  <div
    id="colors-loader"
    class="bg-me-red bg-me-basil bg-me-peach border-me-red border-me-basil border-me-mint border-me-lapis border-me-peach hidden"
  ></div>
</template>
