<script setup lang="ts">
const route = useRoute()
const places = usePlaces()

const place = computed(() =>
  places.find((place) => place.path === route.fullPath)
)

const query = groq`*[_type == "events" && isActive == true]{
  title,
  activity -> {
    name,
    payoff,
    path,

    place,
    street, streetNumber, cap, city,

    colorValue
  },
  image,
  datetimeStart,
  datetimeEnd,
  description
}`

const { data: events, refresh } = useSanityQuery(query)

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
        <div class="flex items-center gap-2">
          <span
            :class="`${place?.iconClass}`"
            :style="`color: ${activityEvents[0]?.activity?.colorValue?.hex};`"
          ></span>
          <span
            class="font-title text-shadow"
            :style="`color: ${activityEvents[0]?.activity?.colorValue?.hex};`"
            >{{ activityEvents[0]?.activity?.name }}</span
          >
        </div>
      </h3>
    </header>

    <div class="my-8 flex flex-col gap-4">
      <article v-for="event in activityEvents">
        <header class="flex justify-between">
          <div
            class="border-4 w-32 md:w-24 shadow rounded-lg"
            :class="`border-${place?.color}`"
          >
            <time
              :datetime="event?.datetimeStart"
              class="flex flex-col items-center"
            >
              <p
                class="font-serif capitalize w-full text-center text-me-stone"
                :class="`bg-${place.color}`"
              >
                {{
                  new Date(event?.datetimeStart).toLocaleDateString('it-IT', {
                    weekday: 'long',
                  })
                }}
              </p>

              <p
                class="font-title text-3xl border-b-2"
                :class="`border-${place?.color}`"
              >
                {{
                  new Date(event?.datetimeStart).toLocaleDateString('it-IT', {
                    day: 'numeric',
                  })
                }}
              </p>

              <p
                class="font-serif capitalize border-b-2"
                :class="`border-${place?.color}`"
              >
                {{
                  new Date(event?.datetimeStart).toLocaleDateString('it-IT', {
                    month: 'short',
                  })
                }}
              </p>

              <p class="pt-1 text-sm text-center">
                dalle
                <span class="font-title">
                  {{
                    new Date(event?.datetimeStart).toLocaleTimeString('it-IT', {
                      hour: 'numeric',
                      minute: '2-digit',
                    })
                  }}</span
                >
                <br />

                alle

                <span class="font-title">
                  {{
                    new Date(event?.datetimeEnd).toLocaleTimeString('it-IT', {
                      hour: 'numeric',
                      minute: '2-digit',
                    })
                  }}</span
                >
              </p>
            </time>
          </div>
          <div
            class="grow bg-gradient-to-r from-transparent"
            :class="`to-${place?.color}`"
          >
            <h4 class="font-serif text-2xl px-4 pt-4">
              {{ event.title.split('-')[0] }}
              <br />
              {{ event.title.split('-')[1] }}
            </h4>
          </div>
          <SanityImage
            v-if="event?.image?.asset"
            :asset-id="event?.image?.asset?._ref"
            auto="format"
            class="h-36 w-36 object-cover shadow"
          />
        </header>

        <div class="mt-2 border-l-4 pl-3" :class="`border-${place?.color}`">
          <SanityContent :blocks="event?.description" />
        </div>
      </article>
    </div>

    <div
      class="hidden to-me-red to-me-peach to-me-orange to-me-pink to-me-lapis to-me-cyan to-me-basil to-me-mint to-me-lavender to-me-stone to-me-ink"
    ></div>
  </section>
</template>
