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
        {{
          $t('enoteca.title')
        }}
      </h2>
      <h3 class="text-center text-lg md:text-2xl text-me-lapis">
        {{
          $t('enoteca.subtitle')
        }}
      </h3>
    </header>

    <p>
      {{ $t('enoteca.description.d1') }}
    </p>
    <p>
      {{ $t('enoteca.description.d2') }}
    </p>
    <p>
      {{ $t('enoteca.description.d3') }}
    </p>

    <template v-slot:place-image>
      <img
        src="~/assets/images/me-enoteca_ext-01.jpg"
        alt="Mamma Elvira Enoteca - foto esterno"
      />
    </template>
  </PlacesPageSchema>
</template>
