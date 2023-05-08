<template>
  <PlacesPageSchema>
    <template v-slot:custom-icon>
      <GraphicsLogoPandolfi class="h-7.5 mr-3" />
    </template>

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

    <template v-slot:place-image
      ><figure>
        <img
          src="~/assets/images/me_corte_ext-01.jpg"
          alt="Corte dei Pandolfi - foto esterno"
        /></figure
    ></template>
  </PlacesPageSchema>
</template>
