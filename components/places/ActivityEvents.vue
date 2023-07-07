<script setup lang="ts">
interface Props {
  activityPath: string
  events: any // #TODO add event Interface
}
const props = withDefaults(defineProps<Props>(), {
  activityPath: '/',
  events: [],
})

const places = usePlaces()
</script>

<template>
  <article class="mt-8 mb-12 relative">
    <header>
      <h3
        class="font-title text-3xl text-shadow text-me-stone inline-block py-3 px-4 -ml-8 pl-6 lg:pl-8"
        :style="`background-color: ${events?.[0]?.activity?.colorValue?.hex}`"
      >
        <NuxtLink :to="events?.[0]?.activity?.path">
          {{ events?.[0]?.activity?.name }}</NuxtLink
        >
      </h3>
    </header>

    <section class="my-8 flex flex-col gap-12 md:max-w-3/4 md:ml-4">
      <PlacesEventCard
        v-for="event in events"
        :key="event?.path?.replace('/', '')"
        :event="event"
        :place="places.find((place) => place.path === event?.activity?.path)"
      />
    </section>

    <div
      :id="`${activityPath.replace('/', '')}-section`"
      class="absolute -top-24"
    ></div>
  </article>
</template>
