<script setup>
const query = useQueryEvents()

const { data: events, refresh } = useSanityQuery(query)

/**
 * @returns an Array of single values of activities path
 *
 * ex. "/activity"
 * */
const activitiesWithActiveEvents = computed(() => [
  ...new Set(
    events.value
      ?.map((event) => event?.activity)
      .map((activity) => activity?.path)
  ),
])
</script>

<template>
  <article class="mt-6">
    <header><h2 class="font-serif text-3xl">Gli Eventi</h2></header>

    <p class="mt-8">Seleziona un locale:</p>
    <nav class="mt-4 mb-8 grid md:grid-cols-3 gap-4 md:gap-8">
      <NuxtLink
        v-for="activity in activitiesWithActiveEvents"
        :to="{ hash: `#${activity.replace('/', '')}-section` }"
        class="border-2 px-3 py-2 font-title text-shadow max-w-max rounded-full shadow-md"
        :style="`border-color: ${
          events.find((event) => event?.activity?.path === activity)?.activity
            ?.colorValue?.hex
        }; color:   ${
          events.find((event) => event?.activity?.path === activity)?.activity
            ?.colorValue?.hex
        }`"
      >
        {{
          events.find((event) => event?.activity?.path === activity)?.activity
            ?.name
        }}</NuxtLink
      >
    </nav>

    <section v-if="activitiesWithActiveEvents?.length > 0">
      <PlacesActivityEvents
        v-for="activity in activitiesWithActiveEvents"
        :key="activity?.replace('/', '')"
        :activity-path="activity"
        :events="events.filter((event) => event?.activity?.path === activity)"
        class="relative"
      />
    </section>
  </article>
</template>
