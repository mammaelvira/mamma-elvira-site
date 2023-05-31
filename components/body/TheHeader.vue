<script setup lang="ts">
const places = usePlaces()

const showActivityLinks = ref(false)

const toggleActivityLinks = () =>
  (showActivityLinks.value = !showActivityLinks.value)
const openLinks = () => setTimeout(() => (showActivityLinks.value = true), 600)
const closeLinks = () =>
  setTimeout(() => (showActivityLinks.value = false), 2400)
</script>

<template>
  <header
    class="fixed w-full p-8 z-100 bg-gradient-to-b from-me-stone via-me-stone"
  >
    <ul class="flex justify-between items-start gap-8">
      <li>
        <NuxtLink to="/" id="home-link" class="font-logo"
          ><img
            src="~/assets/graphics/logo/mammaelvira-logo_text_rect_alt_01.svg"
            alt="Logo Mamma Elvira"
            class="h-12"
        /></NuxtLink>
      </li>

      <li class="flex gap-6">
        <nav id="header-main-nav">
          <ul class="hidden md:flex items-start gap-12 -mt-2 font-title">
            <li class="relative">
              <span @click="toggleActivityLinks">Le nostre attività</span>

              <div
                class="absolute min-w-max flex-col gap-2 text-sm bg-me-stone p-2 -left-2"
                :class="showActivityLinks ? 'flex' : 'hidden'"
              >
                <NuxtLink
                  @click="showActivityLinks = false"
                  v-for="place in places"
                  :to="place.path"
                  :key="place.path"
                  :class="`text-${place.color}`"
                >
                  <span class="mr-2">•</span>
                  <span class="hover:underline"> {{ place.name }}</span>
                </NuxtLink>
              </div>
            </li>

            <li>
              <NuxtLink to="/about-us" class="hover:underline"
                >Chi siamo</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/recipes" class="hover:underline"
                >Le nostre ricette</NuxtLink
              >
            </li>

            <li>
              <NuxtLink to="/contacts" class="hover:underline"
                >Contatti</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </li>

      <li class="flex gap-6 items-start">
        <BodyLanguageSwitcher /><BodyMenuModal class="md:hidden -mt-3" />
      </li>
    </ul>
  </header>
</template>

<style scoped>
#header-main-nav > ul > li > span {
  @apply hover:underline;
}
</style>
