<script setup>
const query = useQueryEvents()

const { data: events, refresh } = await useSanityQuery(query)

const places = usePlaces()

// /**
//  * @returns an Array of single values of activities path
//  *
//  * ex. "/activity"
//  * */
// const activitiesWithActiveEvents = computed(() => [
//   ...new Set(
//     events.value
//       ?.map((event) => event?.activity)
//       .map((activity) => activity?.path)
//   ),
// ])
</script>

<template>
  <article class="mt-6">
    <section class="mt-4 mb-12 flex flex-col">
      <header class="flex flex-col items-center">
        <h1
          class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
        >
          Gli Eventi
        </h1>
        <h2 class="text-center text-lg md:text-2xl text-me-lapis">
          Vivere Lecce, i ritmi, le tradizioni, le sperimentazioni
        </h2>
      </header>
    </section>

    <!-- <section>
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
    </section> -->

    <!-- <section v-if="activitiesWithActiveEvents?.length > 0">
      <PlacesActivityEvents
        v-for="activity in activitiesWithActiveEvents"
        :key="activity?.replace('/', '')"
        :activity-path="activity"
        :events="events.filter((event) => event?.activity?.path === activity)"
        class="relative"
      />
    </section> -->

    <section
      v-if="events?.length > 0"
      class="flex flex-col gap-16 items-center"
    >
      <PlacesEventCard
        v-for="event in events"
        :key="event?._id"
        :event="event"
        :place="places?.find((place) => place?.path === event?.activity?.path)"
        :show-activity-label="true"
        :is-collapsable="true"
      />
    </section>
  </article>
</template>
