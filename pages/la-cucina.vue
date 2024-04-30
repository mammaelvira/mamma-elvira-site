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
      {{ $t('laCucina.description.d1') }}
    </p>
    <p>
      {{ $t('laCucina.description.d2') }}
    </p>
    <p>
      {{ $t('laCucina.description.d3') }}
    </p>
    <p>
      {{ $t('laCucina.description.d4') }}
    </p>
    <p>
      {{ $t('laCucina.description.d5') }}
    </p>

    <p>
      {{ $t('laCucina.description.d6') }}
    </p>

    <template v-slot:place-image>
      <img
        src="~/assets/images/me_la-cucina_ext-03.jpg"
        alt="La Cucina di Mamma Elvira"
      />
    </template>
  </PlacesPageSchema>
</template>
