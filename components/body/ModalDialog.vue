<script setup lang="ts">
const menuModalOpen = useMenuModalOpen()
const localePath = useLocalePath()


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
            src="~/assets/graphics/logo/home_cameo_mammaelvira.svg"
            alt="Mamma Elvira glifo"
            class="h-10"
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
      <NuxtLink :to="localePath('/about-us')" @click="modalToggle">{{ $t('aboutUs.nav') }}</NuxtLink>

      <div class="flex flex-col">
        <button class="inline-flex">{{ $t('eatAndDrink')}}</button>
        <ul class="mt-4 text-xl flex flex-col gap-6">
          <li>
            <div class="bg-me-red"></div>
            <NuxtLink :to="localePath('/enoteca')" @click="modalToggle"
              >Mamma Elvira Enoteca</NuxtLink
            >
          </li>
          <li>
            <div class="bg-me-olive"></div>
            <NuxtLink :to="localePath('/la-cucina')" @click="modalToggle"
              >La Cucina di Mamma Elvira</NuxtLink
            >
          </li>
          <li>
            <div class="bg-me-laterizio"></div>
            <NuxtLink :to="localePath('/scante')" @click="modalToggle">'Scante</NuxtLink>
          </li>
          <li>
            <div class="bg-me-lavender"></div>
            <NuxtLink :to="localePath('/picnic-experience')" @click="modalToggle"
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

      <NuxtLink :to="localePath('/casa')" @click="modalToggle">La Casa</NuxtLink>

      <NuxtLink :to="localePath('/events')" @click="modalToggle">{{ $t('events.nav')}}</NuxtLink>

      <NuxtLink to="http://drinkpuglia.com" target="_blank" @click="modalToggle" class="relative w-40">
        Drink Puglia
        <span class="absolute -right-5 -top-2 bg-me-laterizio text-me-stone text-xs px-1 rotate-12">
            new
        </span>
      </NuxtLink>

      <NuxtLink :to="localePath('/contacts')" @click="modalToggle">{{ $t('contacts.nav')}}</NuxtLink>
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
