<template>
  <ul class="flex flex-wrap justify-center gap-6 md:gap-10">
    <PlacesEventFormula
      key="formula-1-calice"
      color="me-lavender"
      title="Calice o Cocktail"
      price="15"
      icon="i-emojione-v1-wine-glass"
    >
      <p class="font-title text-2xl pl-4">x 1</p>

      <p class="pl-6 mt-2">
        <span class="font-title">Calice</span> di Vino Cantina Funiati <br />o
        <span class="font-title">Cocktail</span>
      </p>
    </PlacesEventFormula>

    <PlacesEventFormula
      key="formula-2-box"
      color="me-lavender"
      title="Box Degustazione"
      :price="false"
      icon="i-emojione-v1-fork-and-knife-with-plate"
    >
      <p class="font-title -mt-2">Box</p>

      <ul class="pl-2">
        <li>Bombette di Martina Franca in umido</li>
        <li>Pitta con Verdure</li>
        <li>Parmigiana</li>
        <li>Salumi & Formaggi</li>
        <li>Insalata di Farro</li>
        <li>Crostata Arance, Fichi e Noci</li>
      </ul>

      <p class="my-3">
        <span class="font-title">Bottiglia</span> di Vino Cantina "Funiati"
      </p>
      <a
        href="tel:+393761798201"
        class="absolute text-xs -right-6 top-10 px-1 py-0.5 text-me-stone shadow text-right bg-me-lavender"
      >
        per prenotare un cestino<br />chiamare 376 179 8201
      </a>
    </PlacesEventFormula>
  </ul>
</template>
