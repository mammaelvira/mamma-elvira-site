<script setup></script>

<template>
  <PlacesPageSchema>
    <header class="flex flex-col items-center mb-8">
      <h1
        class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
      >
        Picnic
      </h1>
      <h2 class="text-center text-lg md:text-2xl text-me-lapis">
        Scoprire Lecce, <br />
        un cestino per volta
      </h2>
    </header>

    <p>
      Scoprire alcuni dei luoghi e paesaggi più belli di Lecce attraverso un
      nuovo format che unisce il buon cibo alle espressioni della cultura
      salentina.
    </p>

    <p>
      Scegli il tuo cestino di degustazione con i migliori prodotti
      enogastronomici di Delicatessen e goditi lo spettacolo del Parco
      Archeologico di Rudiae al ritmo della musica di artisti salentini e
      internazionali.
    </p>
    <template v-slot:place-image>
      <img src="~/assets/images/me_picnic-experience_ext-01.jpg" alt="" />
    </template>
  </PlacesPageSchema>
</template>
