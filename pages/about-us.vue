<script setup lang="ts">
interface SanityImage {
  asset: { _ref: string }
}

interface Staff {
  _id: string

  name: string
  roles: string
  nickname: string
  image: SanityImage
  description: {}
}

const query = groq`*[_type == "staff"]{
  name,
  nickname,
  roles,
  activity[]->{name, payoff, path, colorValue},
  image,
  description,
  sortingOrder
} | order(sortingOrder)`

const { data: staff, refresh } = useSanityQuery<Staff>(query)
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
            <span class="font-serif">La cucina di Mamma Elvira</span> è un
            tesoro prezioso,
            <br />
            nato nel 2011 dalla mente creativa di Andrea Favale.
          </p>
          <p>
            È un mix perfetto di sapori, profumi e ricordi che rimangono
            impressi nella mente e nel palato per sempre.
          </p>
          <p class="text-right">
            <span class="font-serif">Lecce</span> è una città unica nel suo
            genere.
          </p>
          <p>
            <span class="font-serif">Lecce</span> è una città conosciuta nel
            mondo per la ricchezza architettonica del
            <span class="font-bold">Barocco</span> e per una cucina raffinata
            che valorizza al meglio il
            <span class="font-bold">territorio</span>, con un'ampia varietà di
            legumi, ortaggi, cereali.
          </p>

          <p>
            Il calore della sua <span class="font-bold">pietra</span> ti
            avvolge, la sua <span class="font-bold">luce</span> e i suoi
            <span class="font-bold">colori</span> ti accompagnano lungo i vicoli
            del Centro Storico, come i <span class="font-bold">profumi</span> di
            crema pasticcera o di sugo al pomodoro cotto per ore.
          </p>
        </div>
      </section>

      <p></p>
      <p>
        <br />
        Mamma Elvira nelle sue varie espressioni, dall'<NuxtLink to="/enoteca"
          >Enoteca</NuxtLink
        >
        alla <NuxtLink to="/la-cucina">Cucina</NuxtLink> alla
        <NuxtLink to="/casa">Casa</NuxtLink>fino alla nostra
        <NuxtLink to="/corte-dei-pandolfi">Oyster House</NuxtLink>, non è un
        luogo dove si prepara il cibo, ma è un grande tavolo di condivisione, di
        raccolta di esperienze, di risate e di racconti. È un luogo dove si
        passa del tempo insieme, si condividono momenti importanti e si creano
        ricordi. La cucina di Mamma Elvira ci insegna anche l'importanza della
        tradizione culinaria pugliese e ci fa scoprire la cultura e la storia
        del nostro Paese attraverso i sapori e le ricette tramandate nel tempo.
        La cucina di Mamma Elvira è tutto questo: un mondo di emozioni, di
        sapori e di esperienze uniche e irripetibili. È un luogo dove il cibo
        viene trasformato in un vero e proprio abbraccio, dove ogni piatto ha
        una storia da raccontare e dove il tempo sembra fermarsi per farci
        godere il piacere del cibo fatto con amore. Siamo appassionati di cibo e
        crediamo che la cucina sia una forma d'arte che ci permette di esplorare
        il mondo attraverso il palato. Condividiamo la nostra conoscenza e la
        nostra esperienza per aiutare tutti a migliorare le proprie abilità
        culinarie e a scoprire nuovi sapori e piaceri.
      </p>
    </section>

    <!-- STAFF -->
    <section>
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
    </section>
  </article>
</template>
