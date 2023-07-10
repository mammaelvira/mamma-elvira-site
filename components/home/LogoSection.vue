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
      <h5 class="flex gap-2 mt-6 font-bold uppercase text-xs">
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
        <span class="opacity-40">+</span>
        <NuxtLink to="/picnic-experience"
          ><span class="text-me-lavender">picnic</span></NuxtLink
        >
      </h5>
    </div>
    <GraphicsColorBand />
  </section>
</template>
