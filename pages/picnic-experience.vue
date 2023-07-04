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

    <p>Testo descrittivo da inserire</p>

    <template v-slot:place-image>
      <img src="~/assets/images/me_picnic-experience_ext-01.jpg" alt="" />
    </template>
  </PlacesPageSchema>
</template>
