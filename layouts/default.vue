<script setup lang="ts">
const menuModalOpen = useMenuModalOpen()
</script>

<template>
  <div id="app-layout">
    <dialog id="full-page-modal" :open="menuModalOpen"></dialog>
    <BodyTheHeader />

    <main class="p-8 pt-24">
      <slot />
    </main>

    <BodyTheFooter />
  </div>
</template>
