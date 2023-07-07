<script setup lang="ts">
const places = usePlaces()

const showActivityLinks = ref(false)

const toggleActivityLinks = () =>
  (showActivityLinks.value = !showActivityLinks.value)

// VueUse onClickOutside
const target = ref(null)
onClickOutside(target, () => (showActivityLinks.value = false))
</script>

<template>
  <li class="relative" ref="target">
    <span
      @click="toggleActivityLinks"
      :class="showActivityLinks ? 'underline' : ''"
      >Mangiare e bere</span
    >

    <div
      class="absolute min-w-max flex-col gap-2 text-sm bg-me-stone px-3 py-2 -left-2 rounded-b-2xl shadow-md"
      :class="showActivityLinks ? 'flex' : 'hidden'"
    >
      <NuxtLink
        @click="showActivityLinks = false"
        v-for="place in places"
        :to="place.path"
        :key="`modal-link-${place.path.replace('/', '')}`"
        :class="`text-${place.color}`"
      >
        <span class="mr-2">•</span>
        <span class="hover:underline"> {{ place.name }}</span>
      </NuxtLink>
    </div>
  </li>
</template>
