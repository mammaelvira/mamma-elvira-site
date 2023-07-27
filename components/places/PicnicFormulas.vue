<template>
  <ul class="flex flex-wrap justify-center gap-6 md:gap-10">
    <PlacesEventFormula
      key="formula-1-calice"
      color="me-lavender"
      title="Calice o Cocktail"
      price="20"
      icon="i-emojione-v1-wine-glass"
    >
      <p>A scelta tra:</p>
      <br />
      <ul>
        <li>
          • <span class="font-title">Calice</span><br />
          <span class="pl-2.5">di Vino "Cantina Funiati"</span>
        </li>
        <li class="mt-4">• <span class="font-title">Cocktail</span></li>
      </ul>
    </PlacesEventFormula>

    <PlacesEventFormula
      key="formula-2-box"
      color="me-lavender"
      title="Box Degustazione"
      price="50x2"
      icon="i-emojione-v1-fork-and-knife-with-plate"
    >
      <p>
        <span class="font-title">Bottiglia</span> di Vino Cantina "Funiati"
        <br /><span class="font-title">+ Box con:</span>
      </p>

      <ul>
        <li>
          • Bombette di Martina Franca<br /><span class="pl-2.5">in umido</span>
        </li>
        <li>• Pitta con Verdure</li>
        <li>• Parmigiana</li>
        <li>• Salumi & Formaggi</li>
        <li>• Insalata di Farro</li>
        <li>• Crostata Arance, Fichi e Noci</li>
      </ul>
      <div
        class="absolute text-xs -right-6 top-20 px-1 py-0.5 text-me-stone shadow text-right bg-me-lavender"
      >
        minimo 2 persone<br />100€ a coppia
      </div>
    </PlacesEventFormula>
  </ul>
</template>
