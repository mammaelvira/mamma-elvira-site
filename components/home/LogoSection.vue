<script setup lang="ts">
const localePath = useLocalePath()
</script>


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
      <h4 class="flex gap-2 mt-6 font-bold uppercase text-sm flex-wrap justify-center">
        <NuxtLink :to="localePath('/la-cucina')"
        ><span class="text-me-olive">cucina</span></NuxtLink
        >
    
        <NuxtLink :to="localePath('/casa')"><span class="text-me-lapis">casa</span></NuxtLink>
    
        <NuxtLink :to="localePath('/corte-dei-pandolfi')">
          <span class="text-me-yellow">corte</span></NuxtLink
          >

          <NuxtLink :to="localePath('/enoteca')">
            <span class="text-me-red">enoteca</span></NuxtLink
          >
 
          <NuxtLink :to="localePath('/scante')">
            <span class="text-me-grey">'scante</span></NuxtLink
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
