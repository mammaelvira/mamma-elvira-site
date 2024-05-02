<script setup lang="ts">
import type { MammaElviraSanityEvent } from '~/composables/useQueryEvents'

const route = useRoute()
const places = usePlaces()

const place = computed(() =>
  places.find((place) => place.path.split('/').at(-1) === route.fullPath.split('/').at(-1)
),
)


const query = useQueryEvents()

const { data: events } =
  await useSanityQuery<Array<MammaElviraSanityEvent>>(query)

const activityEvents = computed(() =>
  events?.value?.filter((event) => event?.activity?.path.split('/').at(-1) === route.fullPath.split('/').at(-1)),
)



const futureActivityEvents = computed(() =>
  activityEvents?.value?.filter(
    (event) => new Date(event.datetimeEnd).getTime() > new Date().getTime(),
  ),
)


const pastActivityEvents = computed(() =>
  activityEvents?.value
    ?.filter(
      (event) => new Date(event.datetimeEnd).getTime() < new Date().getTime(),
    )
    .reverse(),
)



const otherActivitiesEvents = computed(() =>
  events?.value?.filter((event) => event?.activity?.path !== route.fullPath),
)
</script>

<template>
  <div v-if="activityEvents && activityEvents?.length > 0" class="mt-12">
    <section
      v-if="futureActivityEvents && futureActivityEvents?.length > 0"
      class="mt-6"
    >
      <header>
        <h3 class="font-serif text-2xl">
          {{
             $t('upcoming')
          }}
          <br />
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

      <div class="mt-8 flex flex-col gap-20 items-center">
        <PlacesEventCard
          v-for="event in futureActivityEvents"
          :key="`event-${event?.path?.replace('/', '')}`"
          :event="event"
          :place="place"
          :show-activity-label="false"
          :is-collapsable="true"
        />
      </div>
      <div
        class="hidden to-me-red to-me-peach to-me-orange to-me-pink to-me-lapis to-me-cyan to-me-olive to-me-mint to-me-lavender to-me-stone to-me-ink"
      ></div>
    </section>

    <section
      v-if="pastActivityEvents && pastActivityEvents?.length > 0"
      class="mt-18"
    >
      <header>
        <h3 class="font-serif text-2xl">
          {{
             $t('archive')
          }}
          <br />
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

      <div class="mt-8 flex flex-col gap-20 items-center">
        <PlacesEventCard
          v-for="event in pastActivityEvents"
          :key="`event-${event?.path?.replace('/', '')}`"
          :event="event"
          :place="place"
          :show-activity-label="false"
          :is-collapsable="true"
        />
      </div>
      <div
        class="hidden to-me-red to-me-peach to-me-orange to-me-pink to-me-lapis to-me-cyan to-me-olive to-me-mint to-me-lavender to-me-stone to-me-ink"
      ></div>
    </section>
  </div>
</template>
