<template>
  <section
    class="relative flex justify-center items-center h-screen -mt-32 md:-mt-24"
  >
    <div class="flex flex-col items-center">
      <figure>
        <figcaption><h1 class="hidden">Mamma Elvira</h1></figcaption>
        <img
          src="~/assets/graphics/logo/mammaelvira-logo_text_arc.svg"
          alt="Mamma Elvira"
          class="h-12"
        />
      </figure>

      <div class="grid grid-cols-3 gap-3 items-center text-center font-logo">
        <h2 class="pt-6">{{ $t('logoText') }}</h2>
        <img
          src="~/assets/graphics/logo/home_cameo_mammaelvira.svg"
          alt="Glifo Mamma Elvira"
          class="w-25 mt-4"
        />
        <h3 class="pt-6">{{ $t('logoSince') }} 2011</h3>
      </div>
      <h4 class="flex gap-2 mt-6 font-bold uppercase s-text-m">
        <NuxtLink to="/la-cucina"
        ><span class="text-me-olive">la cucina</span></NuxtLink
        >
        <span class="opacity-50">◆</span>
        <NuxtLink to="/casa"><span class="text-me-lapis">casa</span></NuxtLink>
        <span class="opacity-40">◆</span>
        <NuxtLink to="/corte-dei-pandolfi">
          <span class="text-me-yellow">corte dei pandolfi</span></NuxtLink
          >
          <span class="opacity-40">◆</span>
          <NuxtLink to="/enoteca">
            <span class="text-me-red">enoteca</span></NuxtLink
          >
          <span class="opacity-40">◆</span>
          <NuxtLink to="/scante">
            <span class="text-me-rust">'scante</span></NuxtLink
          >
        <!-- <span class="opacity-40">+</span>
        <NuxtLink to="/picnic-experience"
          ><span class="text-me-lavender">picnic</span></NuxtLink
        > -->
      </h4>
    </div>
    <GraphicsColorBand />
  </section>
</template>
