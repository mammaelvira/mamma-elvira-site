<template>
  <PlacesPageSchema>
    <header class="flex flex-col items-center mb-8">
      <h1
        class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
      >
        Enoteca
      </h1>
      <h2 class="text-center text-lg md:text-2xl text-me-lapis">
        Il piacere di incontrarsi
      </h2>
    </header>

    <p>
      Dal 2011 l'<span>Enoteca di Mamma Elvira</span> è un punto di riferimento
      per tutti gli appassionati di vino.
    </p>
    <p>
      I nostri prodotti rappresentano il meglio di quello che la Puglia può
      offrire in ambito enogastronomico.
    </p>
    <p>
      Grazie alla capacità sviluppata di abbinare alle etichette una selezione
      di piatti freddi e caldi, vi guideremo in un viaggio immersivo negli
      autentici sapori pugliesi.
    </p>

    <template v-slot:place-image>
      <img src="~/assets/images/me-enoteca_ext-01.jpg" alt="" />
    </template>
  </PlacesPageSchema>
</template>
