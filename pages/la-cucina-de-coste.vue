<template>
  <PlacesPageSchema>
    <header class="flex flex-col items-center mb-8">
      <h1
        class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
      >
        De Coste
      </h1>
      <h2 class="text-center text-lg md:text-2xl text-me-lapis">
        A pochi passi dal gusto
      </h2>
    </header>

    <p>
      <span>La Cucina De Coste</span> è la nuova esperienza de
      <NuxtLink to="/la-cucina"><span>La Cucina di Mamma Elvira</span></NuxtLink
      >, che amplia a pochi passi di distanza le possibilità di sperimentare i
      sapori autentici della nostra cucina.
    </p>

    <template v-slot:place-image>
      <img src="~/assets/images/me_la-cucina_ext-02.jpg" alt="" />
    </template>
  </PlacesPageSchema>
</template>
