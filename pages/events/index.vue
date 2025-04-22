<script setup lang="ts">
import type { MammaElviraSanityEvent } from '~/composables/useQueryEvents'

const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
})

const query = useQueryEvents()

const { data: events } =
  await useSanityQuery<Array<MammaElviraSanityEvent>>(query)

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

const futureEvents = computed(() =>
  events?.value?.filter(
    (event) => new Date(event.datetimeEnd).getTime() > new Date().getTime(),
  ),
)
const pastEvents = computed(() =>
  events?.value
    ?.filter(
      (event) => new Date(event.datetimeEnd).getTime() < new Date().getTime(),
    )
    .reverse(),
)
</script>

<template>
  <article class="mt-6">
    <section class="mt-4 mb-12 flex flex-col">
      <header class="flex flex-col items-center">
        <h1
          class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
        >
          {{
            $t('events.title')
          }}
        </h1>
        <h2 class="text-center text-lg md:text-2xl text-me-lapis">
          {{
            $t('events.subtitle')
          }}
        </h2>
      </header>
    </section>

    <div v-if="events && events?.length > 0">
      <section v-if="futureEvents && futureEvents?.length > 0">
        <h3
          class="inline font-serif text-3xl md:text-4xl text-center border-b-2 border-me-mint pb-2"
        >
          {{
            $t('events.upcoming')
          }}
        </h3>
        <div class="flex flex-col gap-20 items-center mt-12">
          <PlacesEventCard
            v-for="event in futureEvents"
            :key="event?._id"
            :event="event"
            :place="
              places?.find((place) => place?.path === event?.activity?.path)
            "
            :show-activity-label="true"
            :is-collapsable="true"
          />
        </div>
      </section>

      <section v-if="pastEvents && pastEvents?.length > 0" class="mt-12">
        <h3
          class="inline font-serif text-3xl md:text-4xl text-center border-b-2 border-me-mint pb-2"
        >
          {{
            $t('events.past')
          }}
        </h3>
        <div
          v-if="events && events?.length > 0"
          class="flex flex-col gap-20 items-center mt-12"
        >
          <LazyPlacesEventCard
            v-for="event in pastEvents"
            :key="event?._id"
            :event="event"
            :place="
              places?.find((place) => place?.path === event?.activity?.path)
            "
            :show-activity-label="true"
            :is-collapsable="true"
          />
        </div>
      </section>
    </div>

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
  </article>
</template>
