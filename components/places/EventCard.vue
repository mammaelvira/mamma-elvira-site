<script setup lang="ts">
interface Props {
  event: any
  place: { color: string; path: string }
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
    youtu: 'i-ph-youtube-logo-fill', // ex. short links 'youtu.be'
    facebook: 'i-ph-facebook-logo-fill',
    soundcloud: 'i-ph-soundcloud-logo-fill',
    web: 'i-ph-app-window-fill',
  }

  // default to web icon
  let linkIcon: string = icons['web']

  Array.from(Object.keys(icons)).forEach(
    (key: string) => link.includes(key) && (linkIcon = icons[key]),
  )

  return linkIcon
}

const performersWithBio = computed(
  () => props.event?.performers?.filter((perf) => perf?.bioText),
)

const performerWithLink = computed(() => {
  const links: { name: string; link: string }[] = []
  props.event?.performerLink?.forEach(
    (link: string, index: number) =>
      (link.toLowerCase() !== 'x' || '') &&
      links.push({ name: props.event?.performerName?.[index], link }),
  )
  return links
})
const performerWithoutLink = computed(
  () =>
    props.event?.performerName?.filter(
      (_name: string, index: number) =>
        props.event?.performerLink?.[index].toLowerCase() === 'x' || '',
    ) || [],
)

const shareOptions = ref({
  title: props.event?.ogTitle,
  text: props.event?.ogDescription,
  url: `https://mammaelvira.com/events${props.event?.path}`,
})

const { share, isSupported: isShareSupported } = useShare()
const startShare = () => {
  share(shareOptions)
}

const showBookingOptions = ref(false)
</script>

<template>
  <article class="relative md:w-3/4 lg:w-2/3 xl:w-1/2">
    <!-- ACTIVITY-LABEL -->
    <div
      v-if="showActivityLabel"
      class="mb-2 rounded-tr-[3rem] pl-2"
      :class="`bg-${place?.color}`"
    >
      <NuxtLink :to="event?.activity?.path" class="text-shadow">
        <h3 class="pt-2 flex items-center gap-2 -ml-5">
          <span class="text-2xl text-shadow-md">@</span>
          <span class="font-title text-2xl md:text-3xl text-me-stone">
            {{ event?.activity?.name }}</span
          >
        </h3>
      </NuxtLink>

      <address class="text-sm pb-2">
        {{ event?.activity?.street }}, {{ event?.activity?.streetNumber }} -
        {{ event?.activity?.cap }} {{ event?.activity?.city }}
      </address>
    </div>

    <!-- HEADER (LINK TO EVENT-PAGE) -->
    <NuxtLink :to="event?.path ? `/events${event?.path}` : ('' as string)">
      <header>
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
              <span
                class="font-serif capitalize w-full text-center text-me-stone"
                :class="`bg-${place?.color}`"
              >
                {{
                  new Date(event?.datetimeStart).toLocaleDateString('it-IT', {
                    weekday: 'long',
                  })
                }}
              </span>

              <span
                class="font-title text-4xl border-b-2"
                :class="`border-${place?.color}`"
              >
                {{
                  new Date(event?.datetimeStart).toLocaleDateString('it-IT', {
                    day: 'numeric',
                  })
                }}
              </span>

              <span
                class="font-serif capitalize border-b-2"
                :class="`border-${place?.color}`"
              >
                {{
                  new Date(event?.datetimeStart).toLocaleDateString('it-IT', {
                    month: 'long',
                  })
                }}
              </span>

              <span class="pt-3 text-sm text-center">
                dalle
                <i class="font-title not-italic">
                  {{
                    new Date(event?.datetimeStart).toLocaleTimeString('it-IT', {
                      hour: 'numeric',
                      minute: '2-digit',
                    })
                  }}</i
                >
                <br />

                alle

                <i class="font-title not-italic">
                  {{
                    new Date(event?.datetimeEnd).toLocaleTimeString('it-IT', {
                      hour: 'numeric',
                      minute: '2-digit',
                    })
                  }}</i
                >
              </span>
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
              :alt="`${event?.title} cover image`"
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
    <!-- MOBILE TITLE -->
    <div
      class="mt-2 md:hidden rounded-r-lg shadow"
      :class="`bg-${place?.color}`"
    >
      <h4 class="px-2 py-1 text-2xl font-title text-me-stone">
        {{ event?.title }}
      </h4>
    </div>
    <!-- SOLD OUT -->
    <p
      v-if="event?.isSoldout"
      class="bg-yellow-400 px-2 py-1 font-title inline-block -ml-4 md:mt-2 shadow-md"
    >
      Evento Sold Out
    </p>

    <!-- TEXT-SECTION (+CTA) -->
    <div
      class="card-border-container mt-2 border-l-4 border-b-4 pl-3 pb-2 rounded-bl-[3rem] relative overflow-hidden -mr-8 md:mr-0 pr-8 md:pr-3"
      :class="`border-${place?.color}`"
    >
      <!-- DESCRIPTION -->
      <section
        v-if="event?.description?.length > 0"
        ref="descriptionSection"
        :class="{
          'max-h-48 overflow-hidden': !isDescriptionExpanded && isCollapsable,
        }"
        class="relative"
      >
        <!-- DESCRIPTION (INTRO) -->
        <div class="sanity-content">
          <SanityContent
            :blocks="event?.description"
            :key="
              event?.description?.[0]?._key ?? `event-description-${event?._id}`
            "
          />
        </div>

        <!-- PROGRAM / LINEUP -->
        <div
          class="border-l-2 pl-4 mb-4"
          :class="`border-${place?.color}`"
          v-if="event?.program"
        >
          <h3 class="font-title mt-1 mb-2">Programma</h3>
          <ul>
            <li v-for="timeslot in event?.program" :key="timeslot._key">
              <h4>
                <span class="font-title text-sm px-2">{{
                  new Date(timeslot.timeSlotStart).toLocaleTimeString('it-IT', {
                    hour: 'numeric',
                    minute: '2-digit',
                  })
                }}</span>
                <span>{{
                  timeslot.timeSlotDescription.includes(':')
                    ? timeslot.timeSlotDescription.split(':')[0] +
                      ': ' +
                      timeslot.timeSlotDescription.split(':')[1]
                    : timeslot.timeSlotDescription
                }}</span>
              </h4>
            </li>
          </ul>
        </div>

        <!-- FORMULA / OFFER -->
        <div
          v-if="place?.path === '/picnic-experience'"
          class="border-l-2 pl-4 mb-4"
          :class="`border-${place?.color}`"
        >
          <h3 class="font-title mt-1 mb-4">Formule</h3>

          <ul class="flex flex-wrap gap-8">
            <PlacesEventFormula
              key="formula-1-calice"
              :color="place.color"
              title="Calice o Cocktail"
              price="20€"
            >
              A scelta tra:
              <br /><br />
              <ul>
                <li>
                  • <span class="font-title">Calice</span> di Vino Cantina
                  "Funiati"
                </li>
                <li>• <span class="font-title">Cocktail</span></li>
              </ul>
            </PlacesEventFormula>

            <PlacesEventFormula
              key="formula-2-box"
              :color="place.color"
              title="Box Degustazione"
              price="50x2€"
            >
              <span class="font-title">Bottiglia</span> di Vino Cantina
              "Funiati" <br /><span class="font-title">+ Box con:</span><br />
              <ul>
                <li>• Bombette</li>
                <li>• Pitta con Verdure</li>
                <li>• Parmigiana</li>
                <li>• Salumi & Formaggi</li>
                <li>• Insalata di Farro</li>
                <li>• Crostata Arance, Fichi e Noci</li>
              </ul>
              <div
                class="absolute text-xs -right-8 top-6 px-1 text-me-stone shadow"
                :class="`bg-${place?.color}`"
              >
                minimo due persone
              </div>
            </PlacesEventFormula>
          </ul>
        </div>

        <!-- PICNIC EXPERIENCE: COLOPHON -->
        <p v-if="place.path === '/picnic-experience'" class="text-sm mb-4">
          Il
          <NuxtLink
            to="https://www.parcoarcheologicorudiae.it/"
            :external="true"
            target="_blank"
            class="underline"
            >Parco Archeologico Rudiae</NuxtLink
          >
          è fruibile grazie ad un accordo di promozione e valorizzazione
          stipulato tra la
          <NuxtLink
            to="https://www.beniculturali.it/ente/soprintendenza-archeologia-belle-arti-e-paesaggio-per-le-province-di-brindisi-lecce-e-taranto"
            :external="true"
            target="_blank"
            class="underline"
            >Soprintendenza archeologia belle arti e paesaggio Brindisi e
            Lecce</NuxtLink
          >
          e
          <NuxtLink
            to="https://www.arvarcheologia.it/"
            :external="true"
            target="_blank"
            class="underline"
            >Archeologia Ricerca e Valorizzazione SRL - A.R.Va</NuxtLink
          >
          - spin off
          <NuxtLink
            to="https://www.unisalento.it/"
            :external="true"
            target="_blank"
            class="underline"
            >Unisalento</NuxtLink
          >
          in collaborazione con il
          <NuxtLink
            to="https://www.comune.lecce.it/"
            :external="true"
            target="_blank"
            class="underline"
            >Comune di Lecce</NuxtLink
          >.
        </p>

        <!-- DESCRIPTION TOGGLER -->
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

      <!-- PERFORMERS BIO -->
      <section
        v-if="performersWithBio?.length > 0"
        class="border-l-2 pl-4 mb-4"
        :class="`border-${place?.color}`"
      >
        <h4 class="font-title text-sm mt-1">
          Performer{{ performersWithBio?.length > 1 ? 's' : '' }}
          Info:
        </h4>
        <ul class="mt-2 flex flex-wrap gap-6 md:gap-8">
          <li v-for="performer in performersWithBio" :key="performer?._key">
            <details>
              <summary>
                <h5 class="inline font-serif underline text-shadow-md pl-2">
                  {{ performer?.name }}
                </h5>
                <span class="block text-xs overflow-hidden">
                  {{
                    performer?.bioText?.[0]?.children?.[0]?.text
                      ?.match(/.{1,60}/g)?.[0]
                      .concat('..')
                  }}
                </span>
              </summary>
              <div class="mt-2 sanity-content">
                <SanityContent :blocks="performer?.bioText" />
              </div>
            </details>
          </li>
        </ul>
      </section>

      <!-- PERFORMERS LINKS -->
      <section
        v-show="event?.performerName?.length > 0"
        class="border-l-2 pl-4"
        :class="`border-${place?.color}`"
      >
        <h4 class="font-title text-sm mt-1">
          Performer{{ event?.performerName?.length > 1 ? 's' : '' }}
          Link:
        </h4>
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
      <section
        v-if="event?.referencePhone || event?.referenceEmail"
        class="mt-4 -ml-4 pl-8 -mb-2 pb-2 border-t-4 bg-gradient-to-r from-transparent -mr-8 md:-mr-4"
        :class="`border-${place?.color} to-${place?.color}`"
      >
        <!-- <h4 class="font-title">
          Per informazioni:
          <span v-show="event?.referenceName" class="font-serif">{{
            event?.referenceName
          }}</span>
        </h4> -->
        <div class="flex">
          <button
            type="button"
            @click="showBookingOptions = !showBookingOptions"
            class="call-to-action mr-4 md:mr-8 flex items-center gap-1"
            :class="`bg-${place?.color}`"
          >
            <span class="i-ph-info-fill"></span>
            <span> Informazioni</span>
          </button>

          <button
            type="button"
            v-if="isShareSupported"
            @click="startShare"
            class="call-to-action-outline bg-me-stone flex items-center gap-1"
            :class="`border-${place?.color}`"
          >
            <span class="i-radix-icons-share-2"></span>
            <span>Condividi</span>
          </button>
          <button
            type="button"
            v-if="true"
            @click="startShare"
            class="call-to-action-outline bg-me-stone flex items-center gap-1"
            :class="`border-${place?.color}`"
          >
            <span class="i-radix-icons-share-2"></span>
            <span>Condividi</span>
          </button>
        </div>

        <div>
          <Transition name="slide-fade">
            <nav
              v-show="showBookingOptions"
              class="-mt-4 ml-4 flex items-center"
            >
              <div
                class="border-l-2 border-b-2 rounded-lb-3xl inline-block h-11 w-8 -mt-10"
                :class="`border-${place?.color}`"
              ></div>
              <a
                v-show="event?.referencePhone"
                :href="`tel:${event?.referencePhone}`"
                class="call-to-action flex items-center gap-1"
                :class="`bg-${place?.color}`"
              >
                <span class="i-ph-phone-fill"></span> <span>Chiama</span></a
              >
              <div
                class="border-b-2 inline-block w-4 h-1px"
                :class="`border-${place?.color}`"
              ></div>
              <a
                v-show="event?.referenceEmail"
                :href="`mailto:${event?.referenceEmail}`"
                class="call-to-action-outline bg-me-stone flex items-center gap-1"
                :class="`border-${place?.color}`"
              >
                <span class="i-ph-envelope-simple-open"></span>
                <span>Scrivi mail</span></a
              >
            </nav>
          </Transition>
        </div>
      </section>
    </div>

    <!-- HIDDEN UTILITIES -->
    <div
      class="hidden decoration-me-red decoration-me-basil decoration-me-lapis decoration-me-peach decoration-me-mint decoration-me-lavender outline-me-red outline-me-basil outline-me-lapis outline-me-peach outline-me-mint outline-me-lavender"
    ></div>
  </article>
</template>

<style scoped>
details[open] > summary > span {
  @apply hidden;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active,
.card-border-container {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>
