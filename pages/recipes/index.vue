<template>
  <article>
    <header>
      <h1>Le ricette</h1>
      <h2>I segreti della Mamma in cucina</h2>
    </header>
    <section class="">
      <div class="mt-8 flex flex-col gap-6 items-center">
        <p>
          <span class="font-serif">Lecce</span> è una città conosciuta nel mondo
          per la ricchezza architettonica del
          <span class="font-bold">Barocco</span> e per una cucina raffinata che
          valorizza al meglio il <span class="font-bold">territorio</span>, con
          un'ampia varietà di legumi, ortaggi, cereali.
        </p>
        <p class="text-right">
          <span class="font-serif">Lecce</span> è una città unica nel suo
          genere.
        </p>
      </div>
    </section>

    <section>
      <div class="mt-8 flex flex-col gap-6 items-center">
        <p>
          Il calore della sua <span class="font-bold">pietra</span> ti avvolge,
          la sua <span class="font-bold">luce</span> e i suoi
          <span class="font-bold">colori</span> ti accompagnano lungo i vicoli
          del Centro Storico, come i <span class="font-bold">profumi</span> di
          crema pasticcera o di sugo al pomodoro cotto per ore.
        </p>

        <p class="text-right">
          Alcune specialità e piatti tipici della città di Lecce che vale la
          pena provare per continuare a sorprendersi:
        </p>

        <ol id="lecce-dish-list">
          <li>
            <h5>Rustico Leccese</h5>
            <p>
              un tipico calzone di pasta sfoglia ripieno di mozzarella, pomodoro
              e besciamella
            </p>
          </li>

          <li>
            <a
              href="https://www.ilcuoreinpentola.it/ricette/dolci/pasticciotti-leccesi/"
              ><h5>Pasticciotto Leccese</h5></a
            >

            <p>
              un dolce tipico della città di Lecce, spesso servito a colazione a
              base di pasta frolla ripiena di crema pasticcera
            </p>
          </li>

          <li>
            <h5>Frisella</h5>
            <p>
              un tipo di pane croccante e secco condito con con pomodori
              freschi, olio d'oliva e basilico, spesso servito come antipasto
            </p>
          </li>
          <li>
            <h5>Orecchiette alla leccese</h5>
            <p>
              pasta di forma concava servita con sugo di pomodoro a cui si
              possono aggiungere verdure o carne
            </p>
          </li>
          <li>
            <h5>Zuppa di Pesce</h5>
            <p>
              un primo piatto tradizionale preparato con una varietà di frutti
              di mare come cozze, vongole, gamberi e calamari
            </p>
          </li>
          <li>
            <h5>Purè di Fave</h5>
            <p>
              zuppa densa e cremosa di fave, spesso servita con cicoria e
              salsiccia
            </p>
          </li>
          <li>
            <h5>Pittule</h5>
            <p>
              un tipo di frittella salata fatta con farina di ceci, patate,
              cipolle e prezzemolo, spesso servite come antipasto o come snack
            </p>
          </li>
        </ol>
      </div>
    </section>
  </article>
</template>

<style scoped>
#lecce-dish-list {
  @apply flex flex-col gap-6;
}

#lecce-dish-list li {
  @apply pl-2 border-l-8 border-me-mint;
}

#lecce-dish-list li:nth-child(odd) {
  @apply;
}

#lecce-dish-list h5 {
  @apply font-bold underline text-me-lapis;
}

#lecce-dish-list p {
  @apply pl-2;
}
</style>
