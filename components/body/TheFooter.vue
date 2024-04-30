<template>
  <footer class="p-8">
    <BodyStripesHorizonal />

    <nav class="link-container font-title">
      <div>
        <div class="i-game-icons-wine-bottle text-me-red"></div>
        <NuxtLink to="/enoteca">Mamma Elvira Enoteca</NuxtLink>
      </div>
      <div>
        <div class="i-game-icons-fork-knife-spoon text-me-olive"></div>
        <NuxtLink to="/la-cucina">La Cucina di Mamma Elvira</NuxtLink>
      </div>
      <div>
        <div class="i-game-icons-fork-knife-spoon text-me-laterizio"></div>
        <NuxtLink to="/scante" class="relative"
          >'Scante
          <span
            class="absolute -right-5 -top-2 bg-me-laterizio text-me-stone text-xs px-1 rotate-12"
            >new</span
          ></NuxtLink>
      </div>
      <div>
        <div class="i-custom:corte-dei-pandolfi text-me-yellow"></div>
        <NuxtLink to="/corte-dei-pandolfi">Corte dei Pandolfi</NuxtLink>
      </div>
      <div>
        <div class="i-game-icons-bed text-me-lapis"></div>
        <NuxtLink to="/casa">Casa Mamma Elvira</NuxtLink>
      </div>

      <div>
        <div class="i-game-icons-basket text-me-lavender"></div>
        <NuxtLink to="/picnic-experience" class="relative"
          >Picnic Experience Lecce
          <span
            class="absolute -right-8 -top-2 bg-me-lavender text-me-stone text-xs px-1 rotate-12"
            >all'aperto</span
          ></NuxtLink
        >
      </div>

      <div>
        <div class="i-custom-delicatessen text-me-deepblue"></div>
        <a href="https://delicatessenlecce.com/" class="relative" target="_blank"
          >Delicatessen
          <span
            class="absolute -right-5 -top-2 bg-me-deepblue text-me-stone text-xs px-1 rotate-12"
            >new</span
          ></a
        >
      </div>
    </nav>

    <section class="mt-4">
      <div class="flex justify-between items-end">
        <div class="flex gap-2 items-center">
          <img
            src="~/assets/graphics/logo/home_cameo_mammaelvira.svg"
            alt="Glifo Mamma Elvira"
            class="h-15"
          />
          <div class="text-xs">
            <p>MammaElvira.com</p>
            <p>Copyright © 2011-{{ new Date().getFullYear() }}</p>
          </div>
        </div>
        <!-- <div class="social-container">
          <a href=""><div class="i-ph-instagram-logo"></div></a>
          <a href=""><div class="i-ph-facebook-logo"></div></a>
        </div> -->
      </div>
    </section>
    <section class="mt-8 text-xs">
      <p>
        {{ $t('privacy.description') }}
        <a
          href="https://www.rna.gov.it/RegistroNazionaleTrasparenza/faces/pages/TrasparenzaAiuto.jspx"
          target="_blank"
          class="underline text-me-mint">
          {{ $t('privacy.link') }}
          </a
        >
      </p>
    </section>
  </footer>
</template>

<style scoped>
.link-container > div {
  @apply flex items-center gap-2
    mb-2;
}

.social-container {
  @apply flex justify-end gap-4
    text-4xl text-me-lapis;
}
</style>
