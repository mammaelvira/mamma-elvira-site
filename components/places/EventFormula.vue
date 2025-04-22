<script setup lang="ts">
interface Props {
  color: string
  title: string
  price: string | false
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
          class="filter drop-shadow-md text-3xl inline-block animation-wiggle"
          :class="icon"
        ></span>
      </div>
    </div>

    <ul class="border-y-2 py-2 text-sm" :class="`border-${color}`">
      <li>
        <time class="font-title" datetime="20:30">20:30</time
        ><span class="text-base">Ingresso al Parco</span>
      </li>
      <li>
        <time class="font-title" datetime="21:00">21:00</time
        ><span class="text-base">Main Event</span>
      </li>
      <li>
        <time class="font-title" datetime="22:30">22:30</time
        ><span class="text-base">DJ Set</span>
      </li>
      <li class="mt-3">
        <p class="text-xs">
          • Visita guidata<br />
          al Parco Archeologico
          <span
            class="text-xs inline px-1 text-me-stone shadow"
            :class="`bg-${color}`"
            >facoltativa</span
          >
        </p>
      </li>
    </ul>

    <div class="px-4 text-sm relative w-full">
      <slot />
    </div>

    <p class="font-title text-3xl md:pt-4 pb-2 -ml-5" v-if="price">
      <span class="text-2xl">€</span> {{ price }}
    </p>
  </li>
</template>

<style scoped>
ul li {
  @apply flex items-center gap-3 mb-2;
}

li time {
  @apply text-lg;
}

.animation-wiggle {
  animation: wiggle 2s ease-in-out infinite;
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(27deg);
  }
  50% {
    transform: rotate(14deg);
  }
}
</style>
