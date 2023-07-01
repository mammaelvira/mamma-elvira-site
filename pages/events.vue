<script setup>
const query = groq`*[_type == "events" && isActive == true]{
  _id,
  title,
  activity -> {
    name,
    payoff,
    path,

    place,
    street, streetNumber, cap, city,

    colorValue
  },
  datetimeStart,
  datetimeEnd,
  description
}`

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
  <article>
    <header><h2>Gli Eventi</h2></header>

    <section v-if="activitiesWithActiveEvents?.length > 0">
      <PlacesActivityEvents
        v-for="activity in activitiesWithActiveEvents"
        :key="activity?.replace('/', '')"
        :id="`${activity?.replace('/', '')}-section`"
        :activity-path="activity"
        :events="events.filter((event) => event?.activity?.path === activity)"
      />
    </section>
  </article>
</template>
