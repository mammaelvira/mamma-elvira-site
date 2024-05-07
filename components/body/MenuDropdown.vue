<script setup lang="ts">
const places = usePlaces()
const localePath = useLocalePath()

function localizePath(path) {
      if (path) {
        return localePath(path);
      } else {
        return null;
      }
}

const showActivityLinks = ref(false)

const toggleActivityLinks = () =>
  (showActivityLinks.value = !showActivityLinks.value)

// vueUse onClickOutside
const target = ref(null)
onClickOutside(target, () => (showActivityLinks.value = false))
// vueUse useScroll
const el = ref(process.client ? window : null)
const { isScrolling } = useScroll(el)
watch(isScrolling, () => {
  if (isScrolling) showActivityLinks.value = false
})
</script>

<template>
  <li class="relative" ref="target">
    <span
      @click="toggleActivityLinks"
      :class="showActivityLinks ? 'underline' : ''"
      >{{ $t('eatAndDrink') }}</span
    >

    <div
      class="absolute min-w-max flex-col gap-2 text-sm bg-me-stone px-3 py-2 -left-2 rounded-b-2xl shadow-md"
      :class="showActivityLinks ? 'flex' : 'hidden'"
    >
      <NuxtLink
        @click="showActivityLinks = false"
        v-for="place in places"
        :to="localizePath(place.path)"
        :key="`modal-link-${place.path.replace('/', '')}`"
        :class="`text-${place.color}`"
      >
        <span class="mr-2">•</span>
        <span class="hover:underline"> {{ place.name }}</span>
      </NuxtLink>

      <a
        @click="showActivityLinks = false"
       href="https://delicatessenlecce.com/" target="_blank"

        class="text-me-deepblue"
      >
        <span class="mr-2">•</span>
        <span class="hover:underline"> Delicatessen</span>
      </a>
    </div>
  </li>
</template>
