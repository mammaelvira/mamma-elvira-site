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
    <!-- <template v-slot:custom-icon>
      <GraphicsLogoPandolfi class="h-7.5 mr-3" />
    </template> -->

    <header class="flex flex-col items-center mb-8">
      <h2
        class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
      >
        {{ $t('corteDeiPandolfi.title') }}
      </h2>
      <h3 class="relative text-center text-lg md:text-2xl text-me-lapis">
        {{ $t('corteDeiPandolfi.subtitle') }}
        <div class="absolute w-65 md:-right-60 -top-5 bg-me-yellow uppercase text-4 font-bold py-1 px-4 rotate-350 border-rounded border-2 border-black shadow-xl">
          {{ $t('corteDeiPandolfi.close') }}
        </div>
      </h3>
    </header>

    <p>
      {{ $t('corteDeiPandolfi.description.d1') }}
    </p>

    <p>
      {{ $t('corteDeiPandolfi.description.d2') }}
    </p>
    <p>
      {{ $t('corteDeiPandolfi.description.d3') }}
    </p>
    <p>
      {{ $t('corteDeiPandolfi.description.d4') }}
    </p>

    <template v-slot:place-image>
      <img
        src="~/assets/images/me_corte_ext-01.jpg"
        alt="Corte dei Pandolfi - foto esterno"
      />
    </template>
  </PlacesPageSchema>
</template>
