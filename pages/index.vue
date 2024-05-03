<script setup lang="ts">
const i18nHead = useLocaleHead({ addSeoAttributes: true })
const localePath = useLocalePath()



useHead({
  title: 'Homepage',
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
})

useSeoMeta({
  ogImage: 'https://mammaelvira.com/mammaelvira_website-cover.png',
  ogTitle: 'Benvenuti da Mamma Elvira', // #TODO: add other languages?
  ogDescription: 'Esperienze del Territorio, a Lecce dal 2011',
  twitterCard: 'summary_large_image',
  ogLocale: 'it-IT',
})
</script>

<template>
  <article class="flex flex-col items-center">
    <HomeLogoSection />

    <section>
      <div class="my-8 flex flex-col gap-6 items-center">
          <p>{{ $t('home.welcome.p0') }}
          </p>
        <!-- 
          
          <p>
            NOTE: This is the original text from the template. FOR SEO
          Siamo felici di condividere con voi la passione per l'<span
            class="font-bold"
            >enogastronomia</span
          >, per le bellezze della città di
          <span class="font-bold">Lecce</span> e le
          <span class="font-bold">esperienze uniche</span> che offre.
        </p> -->

        <p>
          {{ $t('home.welcome.p1') }}
         <NuxtLink
            :to="localePath('/enoteca')"
            class="underline text-me-red"
            >Enoteca</NuxtLink
          >
          {{ $t('home.welcome.p2') }}
          <NuxtLink :to="localePath('la-cucina')" class="underline text-me-olive">
            Cucina</NuxtLink
          >
          {{ $t('home.welcome.p2') }}
          <NuxtLink :to="localePath('/corte-dei-pandolfi')" class="underline text-me-peach">
            Corte
          </NuxtLink>
          {{ $t('home.welcome.p3') }}
          <NuxtLink :to="localePath('/casa')" class="underline text-me-lapis">
             Casa
          </NuxtLink>
          {{ $t('home.welcome.p4') }}
          <NuxtLink :to="localePath('/picnic-experience')" class="underline text-me-lavender">
            Picnic
          </NuxtLink>
          {{ $t('home.welcome.p5') }}
        </p>

        <p class="text-right">
          {{ $t('home.welcome.catchphrase') }}
        </p>
       
        <!-- <p>
          <span class="font-serif">Mamma Elvira</span> nelle sue varie
          espressioni, dall'<NuxtLink
            to="/enoteca"
            class="underline text-me-red"
            >Enoteca</NuxtLink
          >, alla
          <NuxtLink to="/la-cucina" class="underline text-me-olive">
            Cucina</NuxtLink
          >, alla
          <NuxtLink to="/corte-dei-pandolfi" class="underline text-me-peach">
            Corte</NuxtLink
          >
          passando dalla
          <NuxtLink to="/casa" class="underline text-me-lapis"> Casa</NuxtLink>
          fino ai nostri speciali eventi
          <NuxtLink to="/picnic-experience" class="underline text-me-lavender"
            >Picnic</NuxtLink
          >, non è solo un luogo dove si prepara il
          <span class="font-bold">cibo</span>, ma è un grande
          <span class="font-bold">tavolo</span> di
          <span class="font-bold">condivisione</span>, di raccolta di
          <span class="font-bold">esperienze</span>, di risate, di
          <span class="font-bold">racconti</span>.
        </p>

        <p class="text-right">
          È un luogo dove si passa del
          <span class="font-bold">tempo</span> insieme, si condividono
          <span class="font-bold">momenti</span> importanti e si creano
          <span class="font-bold">ricordi</span>.
        </p> -->

      </div>
    </section>

    <section class="w-full pb-8">
      <div class="-mx-8">
        <LazyHomeImagesCarousel />
      </div>
    </section>

    <section class="p-2 md:p-8 lg:p-12 xl:p-16 flex items-center w-full">
      <GraphicsPlacesMap class="w-full max-h-screen lg:p-8" />
    </section>

    <section class="pb-8">
      <div class="mt-8 flex flex-col gap-6 items-center">
        <p class="text-right">
          {{ $t('home.welcome.p6') }}
        </p>
        <p>
          {{ $t('home.welcome.p7') }}
        </p>

        <p>
          {{ $t('home.welcome.p8') }}
        </p>
      </div>

      <!-- <div class="mt-8 flex flex-col gap-6 items-center">
        <p class="text-right">
          <span class="font-serif">Lecce</span> è una città unica nel suo
          genere.
        </p>
        <p>
          <span class="font-serif">Lecce</span> è una città conosciuta nel mondo
          per la ricchezza architettonica del
          <span class="font-bold">Barocco</span> e per una cucina raffinata che
          valorizza al meglio il <span class="font-bold">territorio</span>, con
          un'ampia varietà di legumi, ortaggi, cereali.
        </p>

        <p>
          Il calore della sua <span class="font-bold">pietra</span> ti avvolge,
          la sua <span class="font-bold">luce</span> e i suoi
          <span class="font-bold">colori</span> ti accompagnano lungo i vicoli
          del Centro Storico, come i <span class="font-bold">profumi</span> di
          crema pasticcera o di sugo al pomodoro cotto per ore.
        </p>
      </div> -->
    </section>

    <BodyActivitySection />
  </article>
</template>
