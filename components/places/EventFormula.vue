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
    class="border-4 min-h-64 min-w-60 max-w-max bg-me-stone shadow rounded-lg flex flex-col items-center"
    :class="`border-${color}`"
  >
    <h4
      class="font-serif w-full text-center text-me-stone"
      :class="`bg-${color}`"
    >
      {{ title }}
    </h4>

    <p class="font-title text-3xl pt-1">
      {{ price }}
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
