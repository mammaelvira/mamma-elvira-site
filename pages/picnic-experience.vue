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
        Scoprire Lecce, <br class="md:hidden" />
        un Cestino per volta
      </h2>
    </header>

    <p>
      Picnic Experience è un'iniziativa nata nel 2021 con la volontà di
      promuovere il territorio leccese, il suo patrimonio umano, storico ed
      artistico. <br />
      La location è il <span>Parco Archeologico di Rudiae</span> con il
      suggestivo Anfiteatro Romano che fa da cornice alle serate dal 2021.
    </p>
    <p>
      Per il 2023, le serate Picnic Experience si terranno
      <span class="">tutti i martedì</span>, a partire dal 18 luglio e fino al
      12 settembre. <br />
      Alle visite guidate seguono eventi di musica, Dj Set, Performance, Poesia,
      Improvvisazione e Cinema, con un immancabile
      <span>Cestino Picnic</span> preparato da Mamma Elvira e il Vino delle
      migliori Cantine locali.
    </p>

    <div class="border-b-2 border-me-lavender my-6"></div>

    <p>
      Il Parco Archeologico di Rudiae è fruibile grazie a un accordo di
      promozione e valorizzazione stipulato tra la Soprintendenza archeologia
      belle arti e paesaggio Brindisi e Lecce, il Comune di Lecce e la società
      Archeologia Ricerca e Valorizzazione SRL - A.R.Va - spin off Unisalento.
    </p>
    <template v-slot:place-image>
      <img src="~/assets/images/me_picnic-experience_ext-01.jpg" alt="" />
    </template>
  </PlacesPageSchema>
</template>
