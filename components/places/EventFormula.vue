<script setup lang="ts">
interface Props {
  color: string
  title: string
  price: string
  icon: string
}
const props = withDefaults(defineProps<Props>(), {
  color: '#3f689d',
  icon: 'i-emojione-v1-wine-glass',
})
</script>

<template>
  <li
    class="border-4 min-h-64 w-62 bg-me-stone shadow rounded-xl flex flex-col items-center"
    :class="`border-${color}`"
  >
    <div class="relative w-full" :class="`bg-${color}`">
      <h4
        class="font-serif text-2xl my-2 text-shadow-md text-center text-me-stone"
      >
        {{ title }}
      </h4>

      <div
        class="absolute top-8 -right-7 bg-gray-500 border-4 border-me-lavender rounded-full w-13 h-13 flex items-center justify-center"
      >
        <span
          class="filter drop-shadow-md text-3xl inline-block rotate-14"
          :class="icon"
        ></span>
      </div>
    </div>

    <p class="font-title text-3xl pt-1">
      <span class="text-2xl">€</span> {{ price }}
    </p>

    <ul class="border-y-2 m-2 py-2 text-sm" :class="`border-${color}`">
      <li>• Biglietto Main Event</li>
      <li>• Biglietto DJ Set</li>
      <li>
        •
        <span
          class="text-xs inline-block px-1 text-me-stone shadow"
          :class="`bg-${color}`"
          >opzionale</span
        >

        Visita guidata<br />
        al Parco Archeologico
      </li>
    </ul>

    <div class="pb-3 px-4 text-sm relative w-full">
      <slot />
    </div>
  </li>
</template>
