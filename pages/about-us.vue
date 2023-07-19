<script setup lang="ts">
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
})

// interface SanityImage {
//   asset: { _ref: string }
// }

// interface Staff {
//   _id: string

//   name: string
//   roles: string
//   nickname: string
//   image: SanityImage
//   description: {}
// }

// const query = groq`*[_type == "staff"]{
//   name,
//   nickname,
//   roles,
//   activity[]->{name, payoff, path, colorValue},
//   image,
//   description,
//   sortingOrder
// } | order(sortingOrder)`

// const { data: staff, refresh } = useSanityQuery<Staff>(query)
</script>

<template>
  <article>
    <section class="mt-4 mb-12 flex flex-col">
      <header class="flex flex-col items-center">
        <h1
          class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
        >
          "La Mamma<br class="md:hidden" />
          è sempre la Mamma"
        </h1>
        <h2 class="text-center text-lg md:text-2xl text-me-lapis">
          Racconto di come nasce un progetto<br class="md:hidden" />
          di Ristorazione di qualità
        </h2>
      </header>

      <section class="">
        <div class="mt-8 flex flex-col gap-6 items-center">
          <p class="text-right">
            <span class="font-serif">Il mondo di Mamma Elvira</span> è un tesoro
            prezioso,
            <br />
            nato nel 2011 dalla mente creativa di Andrea Favale.
          </p>
          <p>
            È un mix perfetto di sapori, profumi e ricordi che rimangono
            impressi nella mente e nel palato per sempre.
          </p>
        </div>
      </section>

      <section>
        <div class="mt-8 flex flex-col gap-6 items-center">
          <p>
            La cucina proposta da
            <span class="font-serif">Mamma Elvira</span> ci insegna l'importanza
            della <span class="font-bold">tradizione</span> culinaria pugliese e
            ci fa scoprire la <span class="font-bold">cultura</span> e la
            <span class="font-bold">storia</span> dell'Italia attraverso i
            <span class="font-bold"></span>sapori e le
            <span class="font-bold">ricette</span> tramandate nel tempo.
          </p>

          <p class="text-right">
            <span class="font-serif">Mamma Elvira</span> è tutto questo: un
            mondo di <span class="font-bold">emozioni</span>, di
            <span class="font-bold">sapori</span> e di
            <span class="font-bold">esperienze uniche</span> e irripetibili.
            <br />
            Sono <span class="font-bold">luoghi</span> dove il cibo viene
            trasformato in un vero e proprio abbraccio, dove ogni
            <span class="font-bold">piatto</span>, ogni
            <span class="font-bold">calice</span> ha una
            <span class="font-bold">storia da raccontare</span> e dove il
            <span class="font-bold">tempo sembra rallentare</span> per farci
            godere il piacere del cibo fatto con amore.
          </p>

          <p>
            Siamo appassionati di <span class="font-bold">gusto</span> e
            crediamo che il <span class="font-bold">buon cibo</span> e il
            <span class="font-bold">buon vino</span> siano una forma d'arte che
            ci permette di
            <span class="font-bold">esplorare il mondo</span> attraverso il
            palato.
          </p>

          <p class="text-right">
            Condividiamo la nostra conoscenza e la nostra esperienza per aiutare
            tutti a migliorare le proprie abilità culinarie e a
            <span class="font-bold">scoprire nuovi sapori e piaceri</span>.
          </p>
          <p>
            <span class="font-serif">Mamma Elvira</span> non è però solo
            ristorazione, ma anche
            <NuxtLink to="/casa" class="underline text-me-lapis"
              >case di villeggiatura</NuxtLink
            >, <NuxtLink to="/casa" class="underline">eventi</NuxtLink> ed
            <NuxtLink to="/picnic-experience" class="underline text-me-lavender"
              >esperienze uniche</NuxtLink
            >.
          </p>
        </div>
      </section>
    </section>

    <!-- STAFF -->
    <!-- <section>
      <header class="flex flex-col">
        <h3 class="font-serif text-3xl">Lo Staff di Mamma Elvira</h3>

        <BodyStripesHorizonal />
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="person in staff" :key="person?._id">
          <div class="flex gap-4">
            <SanityImage
              v-if="person?.image?.asset"
              :asset-id="person?.image?.asset?._ref"
              auto="format"
              class="h-36 w-36 object-cover"
            />
            <header class="my-4">
              <h3 class="font-serif text-xl">{{ person.name }}</h3>
              <h5 v-show="!!person?.nickname">"{{ person?.nickname }}"</h5>
              <h4 v-for="(role, index) in person?.roles">
                {{ role }} @
                <NuxtLink
                  :to="person?.activity?.[index]?.path"
                  class="underline font-title"
                  :style="`color: ${person?.activity?.[index]?.colorValue?.hex}`"
                  >{{ person?.activity?.[index]?.name }}</NuxtLink
                >
              </h4>
            </header>
          </div>
          <div class="mt-2 border-b-2 border-me-lapis pb-2">
            <SanityContent :blocks="person?.description" />
          </div>
        </div>
      </div>
    </section> -->

    <BodyActivitySection />
  </article>
</template>
