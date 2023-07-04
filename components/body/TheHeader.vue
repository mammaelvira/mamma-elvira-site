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
          <ul class="hidden lg:flex items-start gap-12 -mt-2 font-title">
            <!-- ABOUT US -->
            <li>
              <NuxtLink to="/about-us" class="hover:underline"
                >"La Mamma"</NuxtLink
              >
            </li>

            <!-- ACTIVITIES -->
            <BodyMenuDropdown class="cursor-pointer" />

            <li>
              <NuxtLink to="/casa" class="hover:underline">La Casa</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/events" class="hover:underline">Eventi</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/recipes" class="hover:underline"
                >Le ricette</NuxtLink
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
        <BodyLanguageSwitcher /><BodyMenuModal class="lg:hidden -mt-3" />
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
