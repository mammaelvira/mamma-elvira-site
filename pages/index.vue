<script setup lang="ts">
const places = usePlaces()
</script>

<template>
  <article>
    <HomeLogoSection />

    <section class="flex mb-4">
      <figure>
        <img src="~/assets/images/me_la-cucina_ext-01.jpg" alt="" srcset="" />

        <figcaption class="py-2 text-center text-me-basil">
          La Cucina di Mamma Elvira ~ Ristorazione
        </figcaption>
      </figure>

      <div class="color-band">
        <div class="bg-me-lapis"></div>
        <div class="bg-me-mint"></div>
        <div class="bg-me-orange"></div>
        <div class="bg-me-pink"></div>
      </div>

      <figure>
        <img src="~/assets/images/me_casa_ext-01.jpg" alt="" srcset="" />
        <figcaption class="py-2 text-center text-me-lapis">
          Casa Mamma Elvira ~ Soggiorni
        </figcaption>
      </figure>
    </section>

    <section class="intro-section">
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
    </section>

    <section>
      <h3 class="font-title text-xl">Scopri le esperienze di Mamma Elvira:</h3>

      <div class="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <NuxtLink :to="place.path" v-for="place in places">
          <div
            :class="`bg-${place.color}`"
            class="mt-4 h-full px-3 py-2 flex flex-col justify-between text-me-stone"
          >
            <h4 class="text-xl font-title">
              {{ place.name }}
            </h4>
            <div>
              <div :class="place.iconClass" class="text-2xl"></div>
              <h5>{{ place.payoff }}</h5>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="mt-12">
      <figure><img src="~/assets/images/me-map_draft.jpg" alt="" /></figure>
    </section>
    <div class="hidden">
      <section class="flex justify-center">
        <a class="call-to-action" href="#me-experience"
          >Scopri le Esperienze Mamma Elvira</a
        >
      </section>
      <section>cosa: cards</section>
      <section>perchè: valori</section>
      <section>dove: contatti</section>
    </div>
  </article>
</template>

<style scoped>
.intro-section p {
  @apply mb-4 text-xl;
}

.color-band {
  @apply flex justify-center
  gap-1 min-h-max;
}

.color-band > div {
  @apply h-full w-2;
}
</style>
