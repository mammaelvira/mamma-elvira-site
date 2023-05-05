<script setup lang="ts">
const places = usePlaces()
</script>

<template>
  <header
    class="fixed w-full p-8 z-100 bg-gradient-to-b from-me-stone via-me-stone"
  >
    <ul class="flex justify-between items-start gap-8">
      <li>
        <NuxtLink to="/" id="home-link" class="font-logo"
          ><img
            src="~/assets/graphics/logo/mammaelvira-logo_text_rect_alt.svg"
            alt="Logo Mamma Elvira"
            class="h-12"
        /></NuxtLink>
      </li>

      <li>
        <div class="flex items-start gap-6">
          <nav
            class="-mt-0.75 hidden md:flex items-center gap-4 lg:gap-8 text-xs lg:text-sm font-title"
          >
            <NuxtLink
              v-for="place in places"
              :to="place.path"
              :key="place.path"
              :class="`text-${place.color}`"
              >{{ place.name }}</NuxtLink
            >
          </nav>

          <BodyLanguageSwitcher />

          <BodyMenuModal class="md:hidden" />
        </div>
      </li>
    </ul>
  </header>
</template>
