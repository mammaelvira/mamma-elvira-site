<script setup lang="ts">
const localePath = useLocalePath()


</script>

<template>
  <header
    class="fixed w-full p-8 z-100 bg-gradient-to-b from-me-stone via-me-stone"
  >
    <ul class="flex justify-between items-start gap-8">

      <li>
        <NuxtLink :to="localePath('/')" id="home-link" class="font-logo hidden md:block" >
          <img
            src="~/assets/graphics/logo/mammaelvira_logo_2024.svg"
            alt="Logo Mamma Elvira"
            class="h-12"
          /> 
        </NuxtLink>

        <BodyLanguageSwitcher class="block md:hidden" />
      </li>

      <li class="flex gap-6">
        <nav id="header-main-nav">
          <ul class="hidden lg:flex items-start gap-12 -mt-2 font-title">
            <!-- ABOUT US -->
            <li>
              <NuxtLink :to="localePath('/about-us')" class="hover:underline">{{
                $t('aboutUs.nav')
              }}</NuxtLink>
            </li>

            <!-- ACTIVITIES -->
            <BodyMenuDropdown
              class="cursor-pointer hover:underline"
              :title="$t('ourPlaces')"
            />

            <li>
              <NuxtLink 
              class="hover:underline"
              to="https://casamammaelvira.com" 
              target='_blank'
              :external="true"
              >
                {{$t('home.nav')}}
                </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://drinkpuglia.com" target="_blank" :external="true" class="hover:underline relative">
                Drink Puglia
                <span class="absolute -right-5 -top-2 bg-me-laterizio text-me-stone text-xs px-1 rotate-12">
                  new
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/events')" :external="true" target="_blank" class="hover:underline">{{
                $t('events.nav')
              }}</NuxtLink>
            </li>

            <li>
              <NuxtLink :to="localePath('/contacts')" class="hove(r:underline">{{
                $t('contacts.nav')
              }}</NuxtLink>
            </li>

          </ul>
        </nav>
      </li>

      
      <li class="flex gap-6 items-start">
        <div  class="hidden md:block">
          <BodyLanguageSwitcher />
        </div>
       
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
