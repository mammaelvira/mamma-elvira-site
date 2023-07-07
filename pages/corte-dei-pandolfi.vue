<template>
  <PlacesPageSchema>
    <template v-slot:custom-icon>
      <GraphicsLogoPandolfi class="h-7.5 mr-3" />
    </template>

    <header class="flex flex-col items-center mb-8">
      <h1
        class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
      >
        Corte
      </h1>
      <h2 class="text-center text-lg md:text-2xl text-me-lapis">
        Profumo di mare crudo
      </h2>
    </header>

    <p>
      La Oyster House di Mamma Elvira, nei pressi del Duomo, dedicata al Pesce e
      ai Frutti di Mare.
    </p>

    <p>Un'esperienza completa tra i sapori delle famose Marine Salentine.</p>
    <p>
      200 km di costa da gustare comodamente seduti in una delle piazze più
      esclusive della Città.
    </p>
    <p>
      Alla <span>Corte dei Pandolfi</span> è possibile assaporare ostriche
      freschissime accompagnate dai gustosi Cocktail proposti dal nostro Barman.
    </p>

    <template v-slot:place-image>
      <img
        src="~/assets/images/me_corte_ext-01.jpg"
        alt="Corte dei Pandolfi - foto esterno"
      />
    </template>
  </PlacesPageSchema>
</template>
