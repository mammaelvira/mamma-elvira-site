<script setup lang="ts">
const menuModalOpen = useMenuModalOpen()

const modalToggle = () => (menuModalOpen.value = !menuModalOpen.value)
</script>

<template>
  <aside
    v-if="menuModalOpen"
    class="fixed w-screen bg-me-grey z-200 p-8 rounded-tr-[3rem]"
  >
    <header class="flex justify-between items-start">
      <NuxtLink to="/" class="flex flex-col items-center" @click="modalToggle">
        <figure>
          <img
            src="~/assets/graphics/logo/mammaelvira-logo_text_arc_stone.svg"
            alt="Mamma Elvira"
            class="h-5"
          />
        </figure>
        <figure>
          <img
            src="~/assets/graphics/logo/mammaelvira-logo_head-glyph_stone.svg"
            alt="Mamma Elvira glifo"
            class="h-8"
          /></figure
      ></NuxtLink>
      <button
        type="button"
        @click="modalToggle"
        class="text-me-stone font-title uppercase"
      >
        chiudi
      </button>
    </header>

    <nav
      class="mt-6 h-11/12 flex flex-col justify-between text-me-stone font-title text-3xl text-shadow"
    >
      <NuxtLink to="/about-us" @click="modalToggle">Chi siamo</NuxtLink>

      <div class="flex flex-col">
        <button class="inline-flex">Mangiare e bere</button>
        <ul class="mt-4 text-xl flex flex-col gap-6">
          <li>
            <div class="bg-me-red"></div>
            <NuxtLink to="/enoteca" @click="modalToggle"
              >Mamma Elvira Enoteca</NuxtLink
            >
          </li>
          <li>
            <div class="bg-me-olive"></div>
            <NuxtLink to="/la-cucina" @click="modalToggle"
              >La Cucina di Mamma Elvira</NuxtLink
            >
          </li>
          <li>
            <div class="bg-me-laterizio"></div>
            <NuxtLink to="/scante" @click="modalToggle">'Scante</NuxtLink>
          </li>
          <li>
            <div class="bg-me-yellow"></div>
            <NuxtLink to="/corte-dei-pandolfi" @click="modalToggle"
              >Corte dei Pandolfi</NuxtLink
            >
          </li>
          <li>
            <div class="bg-me-lavender"></div>
            <NuxtLink to="/picnic-experience" @click="modalToggle"
              >Picnic Experience Lecce</NuxtLink
            >
          </li>
          <li>
            <div class="bg-me-deepblue"></div>
            <a
              href="https://delicatessenlecce.com/"
              @click="modalToggle"
              target="_blank"
              >Delicatessen</a
            >
          </li>
        </ul>
      </div>

      <NuxtLink to="/casa" @click="modalToggle">La Casa</NuxtLink>

      <NuxtLink to="/events" @click="modalToggle">Eventi</NuxtLink>

      <NuxtLink to="/recipes" @click="modalToggle">Le ricette</NuxtLink>

      <NuxtLink to="/contacts" @click="modalToggle">Contatti</NuxtLink>
    </nav>
  </aside>
</template>

<style scoped>
aside {
  height: 100vh;
  height: 100dvh;
}

li {
  @apply flex items-center gap-2 -ml-8;
}
li > div {
  @apply h-3 w-16 shadow-md
  rounded-r-full;
}
</style>
