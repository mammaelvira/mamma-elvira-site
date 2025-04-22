<script setup lang="ts">
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
})

const query = groq`
  *[ _type == "documents" && file.slug.current == "picnic-experience-lecce-2023" ]
    {
      "assetId": file.asset._ref,
      "slug": file.slug.current
    }`

const { data } = await useSanityQuery(query)
const { assetId, slug } = data?.value?.[0]
</script>

<template>
  <PlacesPageSchema>
    <header class="relative flex flex-col items-center mb-8">
      <h2
        class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
      >
        {{ $t('picnic.title') }}
      </h2>
      <h3 class="text-center text-lg md:text-2xl text-me-lapis">
        {{ $t('picnic.subtitle.s1') }}<br class="md:hidden" />
        {{ $t('picnic.subtitle.s2') }}
      </h3>

      <img
        class="absolute top-2 -right-6 w-28 rotate-7 filter drop-shadow-md"
        src="~/assets/graphics/logo/picnic-experience-lecce.svg"
        alt="Picnic Experience Lecce Logo"
      />
    </header>

    <p>
      {{ $t('picnic.description.d1') }}
      <br />
      {{ $t('picnic.description.d2') }}
    </p>
    <p>
      {{ $t('picnic.description.d3') }}
      <br />
      {{ $t('picnic.description.d4') }}
    </p>

    <div class="border-b-2 border-me-lavender my-6"></div>

    <!-- COLOPHON -->
    <p class="text-sm mb-4">
      <NuxtLink
        to="https://www.parcoarcheologicorudiae.it/"
        :external="true"
        target="_blank"
        class="underline decoration-me-lavender"
        >
        {{ $t('picnic.links.l1') }}
        </NuxtLink>
      {{ $t('picnic.description.d5') }}
      <NuxtLink
        to="https://www.beniculturali.it/ente/soprintendenza-archeologia-belle-arti-e-paesaggio-per-le-province-di-brindisi-lecce-e-taranto"
        :external="true"
        target="_blank"
        class="underline decoration-me-lavender"
        >
        {{ $t('picnic.links.l2') }}
        </NuxtLink>
    {{ $t('picnic.description.d6') }}
      <NuxtLink
        to="https://www.arvarcheologia.it/"
        :external="true"
        target="_blank"
        class="underline decoration-me-lavender"
        >
        {{ $t('picnic.links.l3') }}
        </NuxtLink>
      {{ $t('picnic.description.d7') }}
      <NuxtLink
        to="https://www.unisalento.it/"
        :external="true"
        target="_blank"
        class="underline decoration-me-lavender"
        >
        {{ $t('picnic.links.l4') }}
        </NuxtLink>
      {{ $t('picnic.description.d8') }}
      <NuxtLink
        to="https://www.comune.lecce.it/"
        :external="true"
        target="_blank"
        class="underline decoration-me-lavender"
        >
        {{ $t('picnic.links.l5') }}
        </NuxtLink>.
    </p>

    <p>
      <SanityFile :asset-id="assetId" :download="`${slug}.pdf`">
        <template #default="{ src }">
          <a :href="src" class="call-to-action inline-block bg-me-lavender">
            {{ $t('download') }}
          </a>
        </template>
      </SanityFile>
    </p>

    <template v-slot:place-image>
      <img
        src="~/assets/images/me_picnic-experience_ext-01.jpg"
        alt="Picnic Experience Lecce"
      />
    </template>
  </PlacesPageSchema>
</template>
