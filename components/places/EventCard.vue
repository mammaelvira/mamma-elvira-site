<script setup lang="ts">
interface Props {
  event: any
  place: { color: string }
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <article :key="event?._id" class="relative" :data-event-id="event?._id">
    <header
      class="bg-gradient-to-r from-transparent flex justify-between items-center"
      :class="`to-${place?.color}`"
    >
      <div
        class="-ml-4 border-4 w-28 h-40 bg-me-stone shadow rounded-lg grow-0"
        :class="`border-${place?.color}`"
      >
        <time
          :datetime="event?.datetimeStart"
          class="flex flex-col items-center"
        >
          <p
            class="font-serif capitalize w-full text-center text-me-stone"
            :class="`bg-${place?.color}`"
          >
            {{
              new Date(event?.datetimeStart).toLocaleDateString('it-IT', {
                weekday: 'long',
              })
            }}
          </p>

          <p
            class="font-title text-4xl border-b-2"
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
                month: 'long',
              })
            }}
          </p>

          <p class="pt-3 text-sm text-center">
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

      <h4
        class="hidden md:inline-flex text-2xl max-w-1/2 text-center font-title text-shadow"
      >
        {{ event?.title }}
      </h4>
      <figure class="relative -mr-2 -mt-4">
        <SanityImage
          v-if="event?.image?.asset"
          :asset-id="event?.image?.asset?._ref"
          auto="format"
          class="h-40 w-40 object-cover shadow"
        />
        <div v-else class="relative h-40 w-40"></div>
        <p
          v-if="event?.isSoldout"
          class="absolute top-1 -left-5 bg-yellow-400 px-2 py-1 font-title -rotate-12 shadow-md"
        >
          sold out 😱
        </p>
      </figure>
    </header>

    <div
      class="mt-2 md:hidden rounded-r-lg shadow"
      :class="`bg-${place?.color}`"
    >
      <h4 class="px-2 py-1 text-xl font-title text-me-stone">
        {{ event?.title }}
      </h4>
    </div>

    <p
      v-if="event?.isSoldout"
      class="bg-yellow-400 px-2 py-1 font-title inline-block -ml-4 md:mt-2 shadow-md"
    >
      Evento Sold Out
    </p>
    <div
      v-if="event?.description?.length > 0"
      class="mt-2 border-l-4 border-b-4 pl-3 pb-2 rounded-bl-3xl overflow-ellipsis"
      :class="{
        [`border-${place?.color}`]: true,
        // 'md:line-clamp-6': !showFullDescription,
      }"
    >
      <SanityContent :blocks="event?.description" />
      <!-- <div
            class="hidden md:block absolute w-full bg-gradient-to-b from-transparent to-me-stone flex items-end"
            :class="{
              'bottom-0': !showFullDescription,
              '-bottom-8': showFullDescription,
              'mb-8': showFullDescription,
              'h-24': !showFullDescription,
            }"
          >
            <button
              class="-ml-4 -mb-8 rounded-full border-2 font-title px-2 bg-me-stone"
              :class="`border-${place?.color}`"
              @click="showFullDescription = !showFullDescription"
            >
              {{
                showFullDescription ? 'Nascondi descrizione' : 'Scopri di più'
              }}
            </button>
          </div> -->
    </div>
  </article>
</template>
