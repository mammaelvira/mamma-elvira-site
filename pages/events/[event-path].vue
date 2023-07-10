<script setup lang="ts">
const route = useRoute()

const query = groq`*[_type == "events" && path == $eventpath]{
  _id,
  title,

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
  performerLink
}`
const { data: event, refresh } = await useSanityQuery(query, {
  eventpath: `/${route.params.eventpath}`,
})

const places = usePlaces()
const place = places.find(
  (place) => place.path === event.value?.[0]?.activity?.path
)

useSeoMeta({
  // function that returns for reactivity
  title: () => event?.value?.[0]?.ogTitle || 'Mamma Elvira',
  description: () => event?.value?.[0]?.ogDescription || 'mammaelvira.com',
  ogImage: () =>
    event?.value?.[0]?.ogImage ||
    'https://mammaelvira.com/mammaelvira_website-cover.png',
  ogTitle: () => event?.value?.[0]?.ogTitle || 'Mamma Elvira',
  ogDescription: () => event?.value?.[0]?.ogDescription || 'mammaelvira.com',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([defineEvent({ name: event?.value?.[0].ogTitle })])
</script>

<template>
  <section class="flex flex-col gap-16 items-center">
    <PlacesEventCard
      :event="event?.[0]"
      :place="place"
      :show-activity-label="true"
      :is-collapsable="false"
    />

    <NuxtLink to="/events" class="call-to-action" :class="`bg-${place?.color}`"
      >Scopri gli altri eventi di Mamma Elvira</NuxtLink
    >
  </section>
</template>
