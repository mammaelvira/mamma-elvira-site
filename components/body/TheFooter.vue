<template>
  <footer class="p-8">
    <div class="footer-border">
      <div class="bg-me-lapis"></div>
      <div class="bg-me-mint mr-4"></div>
      <div class="bg-me-orange mr-8"></div>
      <div class="bg-me-pink mr-12"></div>
    </div>

    <nav class="link-container font-title">
      <div>
        <div class="i-game-icons-wine-bottle text-me-red"></div>
        <NuxtLink to="/enoteca">Enoteca</NuxtLink>
      </div>
      <div>
        <div class="i-game-icons-fork-knife-spoon text-me-green"></div>
        <NuxtLink to="/la-cucina">La Cucina</NuxtLink>
      </div>
      <div>
        <div class="i-game-icons-knife-fork text-me-mint"></div>
        <NuxtLink to="/la-cucina-de-coste" class="relative"
          >La Cucina de Coste
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
        <NuxtLink to="/casa">Casa</NuxtLink>
      </div>
    </nav>

    <section class="mt-4">
      <div class="flex justify-between items-end">
        <div class="text-xs">
          <p>MammaElvira.com</p>
          <p>Copyright © 2011-{{ new Date().getFullYear() }}</p>
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
.footer-border {
  @apply flex flex-col
    -ml-8 mb-4;
}
.footer-border div {
  @apply h-2 mb-1;
}

.link-container > div {
  @apply flex items-center gap-2
    mb-2;
}

.social-container {
  @apply flex justify-end gap-4
    text-4xl text-me-lapis;
}
</style>
