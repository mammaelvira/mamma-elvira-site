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
        {{ $t('casaMammaElvira.title') }}
      </h2>
      <h3 class="text-center text-lg md:text-2xl text-me-lapis">
        {{ $t('casaMammaElvira.subtitle') }}
      </h3>
    </header>

    <p>
      {{ $t('casaMammaElvira.description.d1') }}
    </p>

    <p>
      {{ $t('casaMammaElvira.description.d2') }}
    </p>

    <p>
      {{ $t('casaMammaElvira.description.d3') }}
    </p>
    <p>
      {{ $t('casaMammaElvira.description.d4') }}
    </p>

    <p>
      {{ $t('casaMammaElvira.description.d5') }}
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
