<script setup lang="ts">
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
})

const route = useRoute()

const query = groq`*[_type == "events" && path == $eventpath]{
  _id,
  _updatedAt, // for social card cache
  title,
  path,

  "ogImage": ogImage.asset -> url,
  ogTitle,
  ogDescription,

  isSoldout,
  activity -> {
    name,
    payoff,
    path,

    place,
    street, streetNumber, cap, city,

    colorValue { hex }
  },
  image,
  datetimeStart,
  datetimeEnd,

  referenceEmail,
  referenceName,
  referencePhone,

  description,

  performerName,
  performerLink,

  performers
}`
const { data: event } = await useSanityQuery(query, {
  eventpath: `/${route.params?.eventpath}`,
})

const places = usePlaces()
const place = computed(() =>
  places.find((place) => place.path === event.value?.[0]?.activity?.path)
)

useSeoMeta({
  // function that returns for reactivity
  title: () => event?.value?.[0]?.ogTitle || 'Mamma Elvira',
  description: () => event?.value?.[0]?.ogDescription || 'mammaelvira.com',
  ogImage: () =>
    `${
      event?.value?.[0]?.ogImage
    }?w=1200&update=${event?.value?.[0]?._updatedAt?.replaceAll(':', '-')}` ||
    'https://mammaelvira.com/mammaelvira_website-cover.png',
  ogTitle: () => event?.value?.[0]?.ogTitle || 'Mamma Elvira',
  ogDescription: () => event?.value?.[0]?.ogDescription || 'mammaelvira.com',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineEvent({
    name: event?.value?.[0].ogTitle,
    startDate: event?.value?.[0].datetimeStart,
    endDate: event?.value?.[0].datetimeEnd,
    organizer: {
      name: 'Mamma Elvira',
    },
    location: {
      '@type': 'Place',
      name: event?.value?.[0].activity?.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${event?.value?.[0].activity?.street}, ${event?.value?.[0].activity?.streetNumber}`,
        postalCode: event?.value?.[0].activity?.cap,
        addressLocality: event?.value?.[0].activity?.city,
        addressCountry: 'Italy',
      },
    },
    performers() {
      const performers: { '@type': string; name: string; url?: string }[] = []

      event?.value?.[0]?.performerName?.forEach(
        (performer: string, index: number) =>
          performers.push({
            '@type': 'Person',
            name: performer,
            url:
              event?.value?.[0].performerLink[index] !== ('' || 'x')
                ? event?.value?.[0].performerLink[index]
                : null,
          })
      )

      return performers
    },
    eventAttendanceMode: 'OfflineEventAttendanceMode',
    eventStatus: 'EventScheduled',
  }),
])
</script>

<template>
  <section class="flex flex-col gap-16 items-center">
    <div class="hidden">
      <h1>Evento:</h1>
      <h2>{{ event?.[0].activity?.name }}</h2>
    </div>

    <PlacesEventCard
      :event="event?.[0]"
      :place="place"
      :show-activity-label="true"
      :is-collapsable="false"
      class="mt-4"
    />

    <NuxtLink to="/events" class="call-to-action" :class="`bg-${place?.color}`"
      >Scopri gli altri eventi di Mamma Elvira</NuxtLink
    >
  </section>
</template>
