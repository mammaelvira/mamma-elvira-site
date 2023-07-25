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
        Casa
      </h2>
      <h3 class="text-center text-lg md:text-2xl text-me-lapis">
        Questa Casa non è un albergo
      </h3>
    </header>

    <p>
      <span>Casa Mamma Elvira</span> è il comfort nel cuore di Lecce, nelle
      immediate vicinanze del
      <a
        class="underline"
        href="https://it.wikipedia.org/wiki/Castello_di_Lecce"
        >Castello Carlo V</a
      >.
    </p>

    <p>
      È una struttura con Camere, Suite e Appartamenti in grado di accogliere
      sia gli ospiti che vogliono scoprire le meraviglie della Città del
      Barocco, sia di chi si trova in Città per lavoro.
    </p>

    <p>
      Gli <span>Appartamenti</span> sono dotati di cucina attrezzata e ampi
      spazi.
    </p>
    <p>
      Le <span>Camere</span> hanno un design pulito ed elegante con grandi
      finestre luminose.
    </p>

    <p>
      Le <span>Suite</span> si sviluppano con spazi esclusivi che rappresentano
      la soluzione ideale per un soggiorno rilassante.
    </p>

    <p>
      <NuxtLink
        class="call-to-action inline-block bg-me-lapis"
        to="https://casamammaelvira.com"
        target="_blank"
        :external="true"
        >Visita il Sito dedicato
      </NuxtLink>
    </p>
  </PlacesPageSchema>
</template>
