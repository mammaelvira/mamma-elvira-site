<script setup lang="ts">
const places = usePlaces()
</script>

<template>
  <section>
    <!-- <h3 class="font-title text-xl">Scopri le esperienze di Mamma Elvira:</h3> -->

    <nav
      class="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
    >
      <NuxtLink
        :to="place.path"
        v-for="place in places"
        :key="place?.path?.replace('/', '')"
        :aria-label="place?.name"
        class="activity-card"
      >
        <div class="activity-card-shape" :class="`bg-${place?.color}`">
          <img
            :src="`graphics/${place?.name
              ?.toLowerCase()
              .replaceAll(' ', '-')}.svg`"
            :alt="`${place?.name} Logo`"
            class="h-full w-full"
          />
        </div>

        <!-- <div
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
        </div> -->
      </NuxtLink>
    </nav>
  </section>
</template>

<style scoped>
.activity-card:hover :deep(div) {
  @apply shadow-inner;
}
.activity-card :deep(div) {
  @apply shadow-md;
}
.activity-card:hover :deep(div) img {
  @apply scale-[1.06]
    ease-in-out duration-400
    filter-drop-shadow;
}

.activity-card-shape {
  @apply h-full 
    flex items-center justify-center
    p-5 sm:p-10 md:p-15 lg:p-10 xl:p-12;
}
</style>
