<script setup lang="ts">
interface Props {
  event: any
  place: { color: string }
  showActivityLabel: boolean
  isCollapsable: boolean
}
const props = withDefaults(defineProps<Props>(), {
  showActivityLabel: false,
  isCollapsable: true,
})

const descriptionSection = ref(null)
const { height } = useElementSize(descriptionSection)

const isDescriptionExpanded = ref(height.value > 180)

const iconResolver = (link: string) => {
  // GUARD: no link provided
  if (link.toLowerCase() === 'x') return ''

  const icons: { [key: string]: string } = {
    spotify: 'i-ph-spotify-logo-fill',
    instagram: 'i-ph-instagram-logo-fill',
    youtube: 'i-ph-youtube-logo-fill',
    facebook: 'i-ph-facebook-logo-fill',
    web: 'i-ph-app-window-fill',
  }

  // default to web icon
  let linkIcon: string = icons['web']

  Array.from(Object.keys(icons)).forEach(
    (key: string) => link.includes(key) && (linkIcon = icons[key])
  )

  return linkIcon
}

const performerWithLink = computed(() => {
  const links: { name: string; link: string }[] = []
  props.event?.performerLink?.forEach(
    (link: string, index: number) =>
      link.toLowerCase() !== 'x' &&
      links.push({ name: props.event?.performerName?.[index], link })
  )
  return links
})
const performerWithoutLink = computed(
  () =>
    props.event?.performerName?.filter(
      (_name: string, index: number) =>
        props.event?.performerLink?.[index].toLowerCase() === 'x' || ''
    ) || []
)
</script>

<template>
  <article :key="event?._id" class="relative md:w-3/4 lg:w-2/3 xl:w-1/2">
    <NuxtLink :to="`/events${event?.path || ''}`">
      <header>
        <div
          v-if="showActivityLabel"
          class="mb-2 rounded-tr-[3rem] pl-2"
          :class="`bg-${place?.color}`"
        >
          <NuxtLink :to="event?.activity?.path" class="text-shadow">
            <h5 class="pt-2 flex items-center gap-2 -ml-5">
              <span class="text-2xl text-shadow-md">@</span>
              <span class="font-title text-2xl md:text-3xl text-me-stone">
                {{ event?.activity?.name }}</span
              >
            </h5>
          </NuxtLink>

          <address class="text-sm pb-2">
            {{ event?.activity?.street }}, {{ event?.activity?.streetNumber }} -
            {{ event?.activity?.cap }} {{ event?.activity?.city }}
          </address>
        </div>

        <div
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
            class="hidden md:inline-flex text-3xl max-w-1/2 text-center font-title text-shadow"
          >
            {{ event?.title }}
          </h4>
          <figure class="relative -mr-3 -mt-6">
            <SanityImage
              v-if="event?.image?.asset"
              :asset-id="event?.image?.asset?._ref"
              auto="format"
              class="h-40 w-40 object-cover shadow-md"
            />
            <div v-else class="relative h-40 w-40"></div>
            <p
              v-if="event?.isSoldout"
              class="absolute top-1 -left-5 bg-yellow-400 px-2 py-1 font-title -rotate-12 shadow-md"
            >
              sold out 😱
            </p>
          </figure>
        </div>
      </header>
    </NuxtLink>
    <div
      class="mt-2 md:hidden rounded-r-lg shadow"
      :class="`bg-${place?.color}`"
    >
      <h4 class="px-2 py-1 text-2xl font-title text-me-stone">
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
      class="mt-2 border-l-4 border-b-4 pl-3 pb-2 rounded-bl-[3rem] relative overflow-hidden"
      :class="`border-${place?.color}`"
    >
      <section
        v-if="event?.description?.length > 0"
        ref="descriptionSection"
        :class="{
          'max-h-48 overflow-hidden': !isDescriptionExpanded && isCollapsable,
        }"
        class="relative"
      >
        <SanityContent :blocks="event?.description" />

        <div
          v-if="height > 180 && isCollapsable === true"
          :class="{
            'absolute w-full bottom-0 to-me-stone bg-gradient-to-b from-transparent':
              !isDescriptionExpanded,
          }"
        >
          <div
            class="flex justify-center items-end"
            :class="isDescriptionExpanded ? '' : 'h-28'"
          >
            <button
              @click="isDescriptionExpanded = !isDescriptionExpanded"
              class="border-2 border-gray-400 rounded-full px-3 py-1 bg-me-stone text-sm font-title"
              :class="isDescriptionExpanded ? 'mt-4' : 'shadow-md shadow-light'"
            >
              {{
                isDescriptionExpanded
                  ? 'Nascondi descrizione'
                  : 'Mostra descrizione completa'
              }}
            </button>
          </div>
        </div>
      </section>

      <!-- PERFORMERS -->
      <section
        v-show="event?.performerName?.length > 0"
        class="border-l-2 pl-4"
        :class="`border-${place?.color}`"
      >
        <h5 class="font-title text-sm mt-1">Performer:</h5>
        <nav class="mt-2 flex flex-wrap gap-6 md:gap-8">
          <div
            v-for="performer in performerWithLink"
            :key="performer?.name?.toLowerCase().replace(' ', '-')"
            class="shrink-0 flex items-center gap-2"
          >
            <span :class="iconResolver(performer?.link)"> </span>
            <a
              :href="performer?.link"
              target="_blank"
              class="font-serif underline text-shadow-md"
              :class="`decoration-${place?.color}`"
              >{{ performer?.name }}</a
            >
          </div>
          <div
            v-for="performer in performerWithoutLink"
            :key="performer?.toLowerCase().replace(' ', '-')"
            class="flex items-center gap-2"
          >
            <span class="i-ph-star"></span>
            <span class="font-serif text-shadow-md">{{ performer }}</span>
          </div>
        </nav>
      </section>

      <!-- CALLS TO ACTION -->
      <nav
        class="mt-4 ml-4"
        v-if="event?.referencePhone || event?.referenceEmail"
      >
        <ul>
          <li>
            <h4 class="font-title">
              Per informazioni:
              <span v-show="event?.referenceName" class="font-serif">{{
                event?.referenceName
              }}</span>
            </h4>

            <div class="flex gap-6">
              <a
                v-show="event?.referencePhone"
                :href="`tel:${event?.referencePhone}`"
                class="call-to-action"
                :class="`bg-${place?.color}`"
                >Chiama</a
              >

              <a
                v-show="event?.referenceEmail"
                :href="`mailto:${event?.referenceEmail}`"
                class="call-to-action-outline"
                :class="`border-${place?.color}`"
                >Scrivi una mail</a
              >
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div
      class="hidden decoration-me-red decoration-me-basil decoration-me-lapis decoration-me-peach decoration-me-mint decoration-me-lavender"
    ></div>
  </article>
</template>
