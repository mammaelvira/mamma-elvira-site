<script setup lang="ts">
const body = ref()

// const { isFullscreen, toggle: toggleFullScreen } = useFullscreen(body)

function controlWindowWidth() {
  const windowWidth = ref(window.innerWidth)
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
  console.log(windowWidth)
  return windowWidth
}



</script>

<template>
  <header
    class="fixed w-full p-8 z-100 bg-gradient-to-b from-me-stone via-me-stone"
  >
    <ul class="flex justify-between items-start gap-8">

      <li>
        <NuxtLink v-if="controlWindowWidth().value >= 768" to="/" id="home-link" class="font-logo" >
          <img
            src="~/assets/graphics/logo/mammaelvira-logo_text_rect_alt_01.svg"
            alt="Logo Mamma Elvira"
            class="h-12"
          />
        </NuxtLink>

        <BodyLanguageSwitcher v-if="controlWindowWidth().value <= 768" />
      </li>

      <li class="flex gap-6">
        <nav id="header-main-nav">
          <ul class="hidden lg:flex items-start gap-12 -mt-2 font-title">
            <!-- ABOUT US -->
            <li>
              <NuxtLink to="/about-us" class="hover:underline">{{
                $t('aboutUs.nav')
              }}</NuxtLink>
            </li>

            <!-- ACTIVITIES -->
            <BodyMenuDropdown
              class="cursor-pointer hover:underline"
              :title="$t('ourPlaces')"
            />

            <li>
              <NuxtLink to="/casa" class="hover:underline">{{
                $t('home.nav')
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/events" class="hover:underline">{{
                $t('events.nav')
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/recipes" class="hover:underline">{{
                $t('recipes.title')
              }}</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/contacts" class="hove(r:underline">{{
                $t('contacts.nav')
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </li>

      
      <li class="flex gap-6 items-start">
        <BodyLanguageSwitcher v-if="controlWindowWidth().value >= 768" />
        <!-- <button
          type="button"
          :aria-label="
            isFullscreen ? 'exit fullscreen mode' : 'enter fullscreen mode'
          "
          :title="
            isFullscreen ? 'exit fullscreen mode' : 'enter fullscreen mode'
          "
          @click="toggleFullScreen"
          :class="
            isFullscreen
              ? 'i-radix-icons-exit-full-screen'
              : 'i-radix-icons-enter-full-screen'
          "
          class="hidden lg:flex"
        >
          {{ isFullscreen ? 'exit fullscreen' : 'enter fullscreen' }}
        </button> -->
        <BodyMenuModal class="lg:hidden -mt-3" />
      </li>
    </ul>
  </header>
</template>

<style scoped>
#header-main-nav > ul > li > span {
  @apply hover:underline
  cursor-pointer;
}
</style>
