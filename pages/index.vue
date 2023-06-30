<script setup lang="ts">
const places = usePlaces()
</script>

<template>
  <article>
    <HomeLogoSection />

    <section>
      <div class="my-8 flex flex-col gap-6 items-center">
        <p>
          Siamo felici di condividere con voi la passione per l'<span
            class="font-bold"
            >enogastronomia</span
          >
          e per la città di <span class="font-bold">Lecce</span>.
        </p>
        <p class="text-right">
          <span class="font-serif">Mamma Elvira</span> è un tesoro prezioso.
          <br />

          È un mix perfetto di <span class="font-bold">sapori</span>,
          <span class="font-bold">profumi</span> e
          <span class="font-bold">ricordi</span> che rimangono impressi nella
          mente e nel palato per sempre.
        </p>
        <p>
          <span class="font-serif">Mamma Elvira</span> nelle sue varie
          espressioni, dall'<NuxtLink
            to="/enoteca"
            class="underline text-me-red"
            >Enoteca</NuxtLink
          >, alla
          <NuxtLink to="/la-cucina" class="underline text-me-basil">
            Cucina</NuxtLink
          >, alla
          <NuxtLink to="/casa" class="underline text-me-lapis"> Casa</NuxtLink>
          fino alla nostra
          <NuxtLink to="/corte-dei-pandolfi" class="underline text-me-peach">
            Corte</NuxtLink
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
        </p>
      </div>
    </section>

    <section class="p-2 md:p-8 lg:p-12 xl:p-16"><GraphicsPlacesMap /></section>

    <!-- <section>
   <div class="flex flex-col">
        <div class="bg-me-lapis h-2 mb-1"></div>
        <div class="bg-me-mint mx-4 h-2 mb-1"></div>
        <div class="bg-me-orange mx-8 h-2 mb-1"></div>
        <div class="bg-me-pink mx-12 h-2"></div>
      </div> 

      <div class="flex mb-4">
        <figure class="pt-10 relative">
          <img src="~/assets/images/me_la-cucina_ext-01.jpg" alt="" srcset="" />

          <figcaption class="py-2 text-center text-me-basil font-title">
            La Cucina di Mamma Elvira
          </figcaption>
          <h4
            class="absolute bottom-16 -ml-8 px-8 py-2 bg-me-basil font-serif text-me-stone text-xl"
          >
            Ristorazione
          </h4>
        </figure>

        <div class="color-band">
          <div class="bg-me-lapis"></div>
          <div class="bg-me-mint"></div>
          <div class="bg-me-orange"></div>
          <div class="bg-me-pink"></div>
        </div>

        <figure class="pt-10 relative">
          <img src="~/assets/images/me_casa_ext-01.jpg" alt="" srcset="" />
          <figcaption class="py-2 text-center text-me-lapis font-title">
            Casa Mamma Elvira
          </figcaption>
          <h4
            class="absolute bottom-16 right-0 -mr-8 px-8 py-2 bg-me-lapis font-serif text-me-stone text-xl"
          >
            Accoglienza
          </h4>
        </figure>
      </div>
    </section> -->

    <section>
      <div class="mt-8 flex flex-col gap-6 items-center">
        <p>
          La cucina proposta da <span class="font-serif">Mamma Elvira</span> ci
          insegna l'importanza della
          <span class="font-bold">tradizione</span> culinaria pugliese e ci fa
          scoprire la <span class="font-bold">cultura</span> e la
          <span class="font-bold">storia</span> dell'Italia attraverso i
          <span class="font-bold"></span>sapori e le
          <span class="font-bold">ricette</span> tramandate nel tempo.
        </p>

        <p class="text-right">
          <span class="font-serif">Mamma Elvira</span> è tutto questo: un mondo
          di <span class="font-bold">emozioni</span>, di
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
          Siamo appassionati di <span class="font-bold">gusto</span> e crediamo
          che il <span class="font-bold">buon cibo</span> e il
          <span class="font-bold">buon vino</span> siano una forma d'arte che ci
          permette di
          <span class="font-bold">esplorare il mondo</span> attraverso il
          palato.
        </p>

        <p class="text-right">
          Condividiamo la nostra conoscenza e la nostra esperienza per aiutare
          tutti a migliorare le proprie abilità culinarie e a
          <span class="font-bold">scoprire nuovi sapori e piaceri</span>.
        </p>
        <p></p>
      </div>
    </section>

    <section>
      <h3 class="font-title text-xl">Scopri le esperienze di Mamma Elvira:</h3>

      <div
        class="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
      >
        <NuxtLink :to="place.path" v-for="place in places">
          <div
            :class="`bg-${place.color}`"
            class="relative mt-4 h-full px-3 py-2 flex flex-col justify-between text-me-stone"
          >
            <h4 class="text-xl font-title">
              {{ place.name }}
            </h4>
            <div>
              <div :class="place.iconClass" class="text-2xl"></div>
              <h5>{{ place.payoff }}</h5>
            </div>
            <div :id="place.path.substring(1)" class="absolute -top-32"></div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- <section class="mt-12">
      <h3 class="text-center text-2xl bg-me-mint -mx-8 p-6 text-me-stone">
        <span class="font-serif">Mamma Elvira</span> nel cuore di
        <span class="font-serif">Lecce</span>
      </h3>
      <BodyStripesHorizonal class="mt-1" />

      <figure><img src="~/assets/images/me-map_draft.jpg" alt="" /></figure>
    </section> -->

    <!-- <section class="intro-section">
      <p>
        <span class="font-logo text-me-lapis">Lecce</span> è una città unica nel
        suo genere.
        <br />
        Il calore della sua Pietra ti avvolge, la sua Luce ti accompagna lungo i
        vicoli del centro storico, come i Profumi di
        <span class="underline">crema pasticcera</span> o di
        <span class="underline">sugo al pomodoro</span>
        cotto per ore.
      </p>

      <p>
        <span class="font-logo text-me-mint">Mamma Elvira</span> nasce da queste
        emozioni per far scoprise sapori, aromi e prodotti del Salento e non
        solo.
      </p>

      <p>
        <span class="font-logo text-me-orange">Mamma Elvira</span> è un insieme
        di Esperienze diffuse nel Centro Storico di Lecce, nei punti più
        caratteristici della città, dove la Pietra trasformata dalle abili mani
        degli Artisti locali ha creato scorci architettonici indimenticabili.
      </p>
    </section> -->
  </article>
</template>
