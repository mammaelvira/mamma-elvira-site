<template>
  <section
    class="relative flex justify-center items-center h-screen -mt-32 md:-mt-24"
  >
    <div class="flex flex-col items-center">
      <img
        src="~/assets/graphics/logo/mammaelvira-logo_text_arc.svg"
        alt="Mamma Elvira"
        class="h-12"
      />
      <div class="grid grid-cols-3 gap-3 items-center text-center font-logo">
        <h3 class="pt-6">a Lecce</h3>
        <img
          src="~/assets/graphics/logo/mammaelvira-logo_head-glyph_lapis.svg"
          alt="Glifo Mamma Elvira"
          class="w-16 mt-4"
        />
        <h4 class="pt-6">{{ $t('logoSince') }} 2011</h4>
      </div>
      <h2 class="text-xl mt-4" style="font-family: 'PT Sans'">
        Esperienze del Territorio
      </h2>
      <h5 class="flex gap-2 mt-2 font-bold uppercase text-xs">
        <NuxtLink to="/enoteca">
          <span class="text-me-red">enoteca</span></NuxtLink
        >
        <span class="opacity-40">+</span>
        <NuxtLink to="/la-cucina"
          ><span class="text-me-basil">cucina</span></NuxtLink
        >
        <span class="opacity-40">+</span>
        <NuxtLink to="/corte-dei-pandolfi">
          <span class="text-me-peach">corte</span></NuxtLink
        >
        <span class="opacity-40">+</span>
        <NuxtLink to="/casa"><span class="text-me-lapis">casa</span></NuxtLink>
      </h5>
    </div>
    <div class="color-band">
      <div class="bg-me-lapis"></div>
      <div class="bg-me-mint"></div>
      <div class="bg-me-orange"></div>
      <div class="bg-me-pink"></div>
    </div>
  </section>
</template>

<style scoped>
.color-band {
  @apply absolute bottom-8 md:bottom-0
  flex justify-center gap-1
  h-1/4;
}

.color-band > div {
  @apply h-full w-2;
}
</style>
