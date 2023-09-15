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
        Picnic
      </h2>
      <h3 class="text-center text-lg md:text-2xl text-me-lapis">
        Scoprire Lecce, <br class="md:hidden" />
        un Cestino per volta
      </h3>

      <img
        class="absolute top-2 -right-6 w-28 rotate-7 filter drop-shadow-md"
        src="~/assets/graphics/logo/picnic-experience-lecce.svg"
        alt="Picnic Experience Lecce Logo"
      />
    </header>

    <p>
      Picnic Experience è un'iniziativa nata nel 2021 con la volontà di
      promuovere il territorio leccese, il suo patrimonio umano, storico ed
      artistico. <br />
      La location è il <span>Parco Archeologico di Rudiae</span> con il
      suggestivo Anfiteatro Romano che fa da cornice alle serate dal 2021.
    </p>
    <p>
      Per il 2023, le serate Picnic Experience si terranno
      <span class="">tutti i martedì</span>, a partire dal 18 luglio e fino al
      12 settembre. <br />
      Alle visite guidate seguono eventi di musica, Dj Set, Performance, Poesia,
      Improvvisazione e Cinema, con un immancabile
      <span>Cestino Picnic</span> preparato da Mamma Elvira e il Vino delle
      migliori Cantine locali.
    </p>

    <div class="border-b-2 border-me-lavender my-6"></div>

    <!-- COLOPHON -->
    <p class="text-sm mb-4">
      Il
      <NuxtLink
        to="https://www.parcoarcheologicorudiae.it/"
        :external="true"
        target="_blank"
        class="underline decoration-me-lavender"
        >Parco Archeologico Rudiae</NuxtLink
      >
      è fruibile grazie ad un accordo di promozione e valorizzazione stipulato
      tra la
      <NuxtLink
        to="https://www.beniculturali.it/ente/soprintendenza-archeologia-belle-arti-e-paesaggio-per-le-province-di-brindisi-lecce-e-taranto"
        :external="true"
        target="_blank"
        class="underline decoration-me-lavender"
        >Soprintendenza archeologia belle arti e paesaggio Brindisi e
        Lecce</NuxtLink
      >
      e
      <NuxtLink
        to="https://www.arvarcheologia.it/"
        :external="true"
        target="_blank"
        class="underline decoration-me-lavender"
        >Archeologia Ricerca e Valorizzazione SRL - A.R.Va</NuxtLink
      >
      - spin off
      <NuxtLink
        to="https://www.unisalento.it/"
        :external="true"
        target="_blank"
        class="underline decoration-me-lavender"
        >Unisalento</NuxtLink
      >
      in collaborazione con il
      <NuxtLink
        to="https://www.comune.lecce.it/"
        :external="true"
        target="_blank"
        class="underline decoration-me-lavender"
        >Comune di Lecce</NuxtLink
      >.
    </p>

    <p>
      <SanityFile :asset-id="assetId" :download="`${slug}.pdf`">
        <template #default="{ src }">
          <a :href="src" class="call-to-action inline-block bg-me-lavender"
            >Scarica il programma 2023
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
