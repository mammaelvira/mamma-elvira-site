<script setup>
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
  datetimeStart,
  datetimeEnd,
  description
}`

const { data: events, refresh } = useSanityQuery(query)
</script>

<template>
  <div>{{ events?.[0]?.activity }}</div>
</template>
