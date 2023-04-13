<script setup lang="ts">
const route = useRoute()
const places = usePlaces()

const place = places.find((place) => place.path === route.fullPath)
</script>

<template>
  <article class="md:grid grid-cols-2 gap-6">
    <PlacesHeroTitle />

    <section class="mt-4 md:mt-0 place-section">
      <slot />

      <nav class="mt-6">
        <ul>
          <li>
            <h3 v-if="place?.menuUrl" class="font-title">Prenota un tavolo:</h3>

            <div class="flex gap-6">
              <a :href="`tel:${place?.telephone}`" class="call-to-action"
                >Chiama</a
              >

              <a :href="`mailto:${place?.email}`" class="call-to-action"
                >Scrivi una mail</a
              >
            </div>
          </li>

          <li v-if="place?.menuUrl" class="mt-4">
            <h3 class="font-title">Scopri la nostra offerta:</h3>
            <a :href="place?.menuUrl" class="call-to-action"
              >Consulta il menù</a
            >
          </li>

          <li class="mt-6">
            <address
              class="font-logo not-italic underline flex gap-4 items-center"
            >
              <div
                class="i-game-icons-family-house text-4xl"
                :class="`text-${place?.color}`"
              ></div>
              <a :href="place?.googleMapsUrl"
                >{{
                  `${place?.address.street}, ${place?.address.streetNumber}`
                }}
                <br />
                {{ `${place?.address.cap} - ${place?.address.city}` }}
              </a>
            </address>
          </li>
        </ul>
      </nav>

      <div
        class="hidden text-me-ink text-me-peach text-me-orange text-me-basil text-me-lapis text-me-mint text-me-red text-me-rose"
      >
        Mamma Elvira
      </div>
    </section>
  </article>
</template>
