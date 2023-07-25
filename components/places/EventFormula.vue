<script setup lang="ts">
interface Props {
  color: string
  title: string
  price: string
}
const props = withDefaults(defineProps<Props>(), {
  color: '#3f689d',
})
</script>

<template>
  <li
    class="border-4 min-h-64 min-w-48 max-w-max bg-me-stone shadow rounded-lg flex flex-col items-center"
    :class="`border-${color}`"
  >
    <h4
      class="font-serif w-full text-center text-me-stone"
      :class="`bg-${color}`"
    >
      {{ title }}
    </h4>

    <p class="font-title text-4xl border-b-2" :class="`border-${color}`">
      {{ price }}
    </p>

    <ul class="border-b-2 m-2 pb-2 text-sm" :class="`border-${color}`">
      <li>• Biglietto Main Event</li>
      <li>• Biglietto DJ Set</li>
      <li class="relative">
        • Visita guidata al Parco Archeologico
        <span
          class="absolute inline-block text-xs rotate-10 -right-4 -top-2.5 px-1 text-me-stone shadow"
          :class="`bg-${color}`"
          >opzionale</span
        >
      </li>
    </ul>

    <p class="pb-3 text-sm relative">
      <slot />
    </p>
  </li>
</template>
