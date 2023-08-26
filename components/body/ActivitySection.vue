<script setup lang="ts">
const places = usePlaces()
</script>

<template>
  <section>
    <h3 class="font-title text-xl">Scopri le esperienze di Mamma Elvira:</h3>

    <nav
      class="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
    >
      <NuxtLink
        :to="place.path"
        v-for="place in places"
        :key="place?.path?.replace('/', '')"
      >
        <div
          :class="`bg-${place?.color}`"
          class="relative mt-4 h-full min-h-42 md:min-h-26 px-3 py-2 flex flex-col justify-between text-me-stone"
        >
          <h4 class="text-xl font-title">
            {{ place?.name }}
          </h4>
          <div>
            <div :class="place?.iconClass" class="text-2xl"></div>
            <h5>{{ place?.payoff }}</h5>
          </div>
          <div :id="place.path?.substring(1)" class="absolute -top-32"></div>
        </div>
      </NuxtLink>
    </nav>
  </section>
</template>
