<script setup lang="ts">
const i18nHead = useLocaleHead({ addSeoAttributes: true })
const localePath = useLocalePath()

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

const { y } = useWindowScroll()
const { height } = useWindowSize()
const isMediumScreen = useMediaQuery('(min-width: 768px)')

const percentageOfScreenHeigthScrolled = computed(
  () => (y.value / height.value) * 100,
)
</script>

<template>
  <article>
    <!-- <div class="fixed">
      {{ percentageOfScreenHeigthScrolled }} - {{ { isMediumScreen } }}
    </div> -->
    <section class="pt-4 pb-12 flex flex-col items-center">
      <header class="flex flex-col items-center">
        <h1
          class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
        >
          "La Mamma<br class="md:hidden" />
          è sempre la Mamma"
        </h1>
        <h2 class="text-center text-lg md:text-2xl text-me-lapis">
          {{ $t('aboutUs.title') }}
        </h2>
      </header>

      <section class="about-us-hero">
        <figure class="hero-figure md:rounded-tl-full">
          <img
            src="~/assets/images/me_casa_color-bottles.jpg"
            alt="Casa Mamma Elvira, bottiglie colorate negli spazi comuni"
            class="w-full h-full"
          />
          <figcaption class="text-sm text-right pt-2">
            {{ $t('aboutUs.figcaption.fig1') }}
            <NuxtLink :to="localePath('/about-us')" class="underline text-me-lapis">
              {{ $t('aboutUs.figcaption.fig2') }}
            </NuxtLink>
          </figcaption>
        </figure>

        <div
          class="md:max-w-128 h-full md:pl-8 md:rounded-tr-full border-me-lapis md:border-t md:border-r flex flex-col md:justify-end gap-6 items-center md:shadow-inner"
        >
          <p class="text-right md:text-left md:pr-16">
            {{ $t('aboutUs.hero.h1') }}
            <br />
            {{ $t('aboutUs.hero.h2') }}
          </p>
          <p class="md:pr-4 lg-:pr-8 lg:pt-16">
            {{ $t('aboutUs.hero.h3') }}
          </p>
        </div>

        <div class="hidden md:grid w-10 text-me-lapis -mt-0.3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.97 89.5">
            <polyline
              points="0.5 0.5 22.47 0.5 22.47 32.34 0.5 57.5 0.5 89.5"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="0.7"
            />
          </svg>
        </div>

        <div class="w-full flex justify-end">
          <div
            class="hidden md:grid w-10 text-me-lapis -mt-0.3"
            style="transform: scaleX(-1)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.97 89.5">
              <polyline
                points="0.5 0.5 22.47 0.5 22.47 32.34 0.5 57.5 0.5 89.5"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="0.7"
              />
            </svg>
          </div>
        </div>
      </section>

      <section class="pt-8 md:pt-0 md:-mt-16">
        <div class="flex flex-col gap-6 items-center">
          <p>
            {{ $t('aboutUs.description.d1') }}
          </p>

          <p class="text-right">
            {{ $t('aboutUs.description.d2') }}
            <br />
            {{ $t('aboutUs.description.d3') }}
          </p>

          <p>
            {{ $t('aboutUs.description.d4') }}
          </p>

          <p class="text-right">
            {{ $t('aboutUs.description.d5') }}
          </p>
          <p>
            {{ $t('aboutUs.description.d6') }}
            <NuxtLink to="/casa" class="underline text-me-lapis">
              {{ $t('aboutUs.description.links.l1') }}
            </NuxtLink>, 
            <NuxtLink to="/events" class="underline">
              {{ $t('aboutUs.description.links.l2') }}
            </NuxtLink>
            {{ $t('aboutUs.description.d7') }}
            <NuxtLink to="/picnic-experience" class="underline text-me-lavender">
              {{ $t('aboutUs.description.links.l3') }}
            </NuxtLink>.
          </p>
        </div>

        <!--<div class="flex flex-col gap-6 items-center">
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
            >, <NuxtLink to="/events" class="underline">eventi</NuxtLink> ed
            <NuxtLink to="/picnic-experience" class="underline text-me-lavender"
              >esperienze uniche</NuxtLink
            >.
          </p>
        </div> -->

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
          w="480"
          fit="clip"
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
          <div class="mt-2 border-b-2 border-me-lapis pb-2 sanity-content">
            <SanityContent :blocks="person?.description" />
          </div>
        </div>
      </div>
    </section> -->

    <BodyActivitySection />
  </article>
</template>

<style scoped>
.about-us-hero {
  @apply relative
    pt-8 md:pt-16
    grid grid-cols-1 md:grid-cols-2
    md:justify-end gap-8 md:gap-0;
}

.hero-figure {
  @apply md:max-w-128 -mx-8 md:-mx-[0px]
    overflow-hidden
    aspect-square
    border-me-lapis md:border-t md:border-l;
}

@media (max-width: 768px) {
  .hero-figure {
    border-top-left-radius: calc(13px * var(--rounded-value));
  }
}
</style>

<style>
.about-us-hero .hero-figure {
  --rounded-value: v-bind(percentageOfScreenHeigthScrolled);
}
</style>
