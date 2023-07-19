<script setup lang="ts">
const route = useRoute()
const places = usePlaces()

const place = computed(() =>
  places.find((place) => place.path === route.fullPath)
)

const query = useQueryEvents()

const { data: events, refresh } = await useSanityQuery(query)

const activityEvents = computed(() =>
  events?.value?.filter((event) => event?.activity?.path === route.fullPath)
)

const otherActivitiesEvents = computed(() =>
  events?.value?.filter((event) => event?.activity?.path !== route.fullPath)
)
</script>

<template>
  <section v-if="activityEvents?.length > 0">
    <header>
      <h3 class="font-serif text-2xl">
        Prossimi eventi di <br />
        <span class="flex items-center gap-2">
          <span
            :class="`${place?.iconClass}`"
            :style="`color: ${activityEvents[0]?.activity?.colorValue?.hex};`"
          ></span>
          <span
            class="font-title text-shadow"
            :style="`color: ${activityEvents[0]?.activity?.colorValue?.hex};`"
            >{{ activityEvents[0]?.activity?.name }}</span
          >
        </span>
      </h3>
    </header>

    <div class="mt-8 flex flex-col gap-16 items-center">
      <PlacesEventCard
        v-for="event in activityEvents"
        :key="`event-${event?.path?.replace('/', '')}`"
        :event="event"
        :place="place"
        :show-activity-label="false"
        :is-collapsable="true"
      />
    </div>
    <div
      class="hidden to-me-red to-me-peach to-me-orange to-me-pink to-me-lapis to-me-cyan to-me-basil to-me-mint to-me-lavender to-me-stone to-me-ink"
    ></div>
  </section>
</template>
