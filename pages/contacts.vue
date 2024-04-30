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
  <article class="mt-6">
    <section class="mt-4 mb-12 flex flex-col">
      <header class="flex flex-col items-center">
        <h1
          class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
        >
          {{ $t('contacts.title') }}
        </h1>
        <h2 class="text-center text-lg md:text-2xl text-me-lapis">
          {{ $t('contacts.subtitle') }}
        </h2>
      </header>
    </section>

    <BodyActivitySection />
  </article>
</template>
