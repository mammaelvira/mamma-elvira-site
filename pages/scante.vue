<script setup lang="ts">
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
})
</script>

<template>
  <PlacesPageSchema>
    <header class="flex flex-col items-center mb-8">
      <h2
        class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
      >
       'Scante
      </h2>
      <h3 class="text-center text-lg md:text-2xl text-me-lapis">
        A pochi passi dal gusto
      </h3>
    </header>

    <p>
      <span>'Scante</span> è la nuova esperienza de
      <NuxtLink to="/la-cucina"><span>La Cucina di Mamma Elvira</span></NuxtLink
      >, che amplia a pochi passi di distanza le possibilità di sperimentare i
      sapori autentici della nostra cucina.
    </p>

    <template v-slot:place-image>
      <img
        src="~/assets/images/me_la-cucina_ext-04.jpg"
        alt="Scante"
      />
    </template>
  </PlacesPageSchema>
</template>
