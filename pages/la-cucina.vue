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
        La Cucina
      </h2>
      <h3 class="text-center text-lg md:text-2xl text-me-lapis">
        La Mamma è la migliore Cuoca del Mondo
      </h3>
    </header>

    <p>
      <span>La Cucina di Mamma Elvira</span> - Osteria Contemporanea è il luogo
      ideale per vivere l'esperienza culinaria leccese.
    </p>
    <p>
      La cucina salentina e in particolare quella leccese è rinomata per la sua
      varietà e la sua semplicità.
    </p>
    <p>
      È una cucina basata su ingredienti freschi, locali e di stagione cucinati
      in modo autentico e genuino.
    </p>
    <p>
      Il menù de <span>La Cucina di Mamma Elvira</span> propone sempre piatti
      studiati in base ai prodotti stagionali con abbinamenti sorprendenti e
      innovativi che puntano ad esaltare i sapori.
    </p>
    <p>
      La caratteristica della cucina salentina è quella di avere un'ampia
      varietà di piatti vegetariani grazie alla ricchezza della campagna
      circostante.
    </p>

    <p>
      La carta dei Vini e delle Birre è ampia e rappresenta perfettamente il
      territorio italiano.
    </p>

    <template v-slot:place-image>
      <img
        src="~/assets/images/me_la-cucina_ext-03.jpg"
        alt="La Cucina di Mamma Elvira"
      />
    </template>
  </PlacesPageSchema>
</template>
