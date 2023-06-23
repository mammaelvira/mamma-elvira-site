<script setup lang="ts">
const menuModalOpen = useMenuModalOpen()

const modalToggle = () => (menuModalOpen.value = !menuModalOpen.value)

const places = usePlaces()

const showActivityLinks = ref(false)

const toggleActivityLinks = () =>
  (showActivityLinks.value = !showActivityLinks.value)
</script>

<template>
  <aside v-if="menuModalOpen">
    <nav>
      <ul class="flex flex-col items-start gap-12 -mt-2 font-title">
        <li>
          <NuxtLink to="/about-us" class="hover:underline">La Mamma</NuxtLink>
        </li>
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
          <NuxtLink to="/recipes" class="hover:underline"
            >Le nostre ricette</NuxtLink
          >
        </li>

        <li>
          <NuxtLink to="/contacts" class="hover:underline">Contatti</NuxtLink>
        </li>
      </ul>
    </nav>

    <button type="button" @click="modalToggle">close</button>
  </aside>
</template>

<style scoped>
aside {
  @apply bg-green-300 h-screen w-screen;
}
</style>
