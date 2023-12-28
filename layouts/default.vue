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
    class="bg-me-red bg-me-olive bg-me-peach bg-me-lavender border-me-red border-me-olive border-me-mint border-me-lapis border-me-peach border-me-lavender hidden bg-me-yellow border-me-yellow text-me-yellow text-me-lavender bg-me-laterizio border-me-laterizio text-me-laterizio"
  ></div>
</template>

<style>
/* RESET file
https://github.com/unocss/unocss/tree/main/packages/reset */
@import '@unocss/reset/tailwind-compat.css';
</style>

<style scoped>
/* // TRANSITIONS */
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
