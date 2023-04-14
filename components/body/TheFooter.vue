<template>
  <footer class="p-8">
    <BodyStripesHorizonal />

    <nav class="link-container font-title">
      <div>
        <div class="i-game-icons-wine-bottle text-me-red"></div>
        <NuxtLink to="/enoteca">Mamma Elvira Enoteca</NuxtLink>
      </div>
      <div>
        <div class="i-game-icons-fork-knife-spoon text-me-basil"></div>
        <NuxtLink to="/la-cucina">La Cucina di Mamma Elvira</NuxtLink>
      </div>
      <div>
        <div class="i-game-icons-knife-fork text-me-mint"></div>
        <NuxtLink to="/la-cucina-de-coste" class="relative"
          >La Cucina De Coste
          <span
            class="absolute -right-5 -top-2 bg-me-mint text-me-stone text-xs px-1 rotate-12"
            >new</span
          ></NuxtLink
        >
      </div>
      <div>
        <div class="i-game-icons-oyster-pearl text-me-peach"></div>
        <NuxtLink to="/corte-dei-pandolfi">Corte dei Pandolfi</NuxtLink>
      </div>
      <div>
        <div class="i-game-icons-bed text-me-lapis"></div>
        <NuxtLink to="/casa">Casa Mamma Elvira</NuxtLink>
      </div>
    </nav>

    <section class="mt-4">
      <div class="flex justify-between items-end">
        <div class="flex gap-2 items-center">
          <img
            src="~/assets/graphics/logo/mammaelvira-logo_head-glyph.svg"
            alt="Glifo Mamma Elvira"
            class="h-7"
          />
          <div class="text-xs">
            <p>MammaElvira.com</p>
            <p>Copyright © 2011-{{ new Date().getFullYear() }}</p>
          </div>
        </div>
        <div class="social-container">
          <a href=""><div class="i-ph-instagram-logo"></div></a>
          <a href=""><div class="i-ph-facebook-logo"></div></a>
        </div>
      </div>
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
