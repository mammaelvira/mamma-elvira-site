<script setup lang="ts">
const menuModalOpen = useMenuModalOpen()

const modalToggle = () => (menuModalOpen.value = !menuModalOpen.value)
</script>

<template>
  <div>
    <button type="button" @click="modalToggle">
      <div class="menu-icon">
        <div class="bg-me-lapis"></div>
        <div class="bg-me-mint"></div>
        <div class="bg-me-orange"></div>
        <span class="text-xs">menu</span>
      </div>
    </button>

    <Teleport to="#full-page-modal">
      <Transition name="slide-fade">
        <aside v-if="menuModalOpen">
          modal open

          <button type="button" @click="modalToggle">close</button>
        </aside>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.menu-icon {
  @apply flex flex-col items-center;
}
.menu-icon div {
  @apply h-1.25 w-8
    mb-1;
}
.menu-icon div:last-of-type {
  @apply mb-0;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(60px);
  opacity: 0;
}
</style>
