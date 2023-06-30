<template>
  <div id="app-layout">
    <div id="full-page-modal"></div>

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
