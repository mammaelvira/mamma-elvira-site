<script setup lang="ts">
const menuModalOpen = useMenuModalOpen();

const modalToggle = () => (menuModalOpen.value = !menuModalOpen.value);
</script>

<template>
  <button type="button" @click="modalToggle">menu</button>

  <Teleport to="body">
    <div v-if="menuModalOpen">
      modal open

      <button type="button" @click="modalToggle">close</button>
    </div>
  </Teleport>
</template>
