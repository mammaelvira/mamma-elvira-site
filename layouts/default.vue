<template>
  <div id="app-layout">
    <SeoKit />

    <Transition name="slide-fade">
      <BodyModalDialog />
    </Transition>

    <BodyTheHeader />

    <main class="p-8 pt-24">
      <slot />
    </main>

    <BodyTheFooter />
  </div>

  <!-- HIDDEN utility -->
  <div
    id="colors-loader"
    class="bg-me-red bg-me-basil bg-me-peach bg-me-lavender border-me-red border-me-basil border-me-mint border-me-lapis border-me-peach border-me-lavender hidden"
  ></div>
</template>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(80px);
  opacity: 0;
}
</style>
