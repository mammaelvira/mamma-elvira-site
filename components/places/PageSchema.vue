<script setup lang="ts">
const route = useRoute()
const places = usePlaces()

const place = places.find((place) => place.path === route.fullPath)
</script>

<template>
  <article class="md:grid grid-cols-2 gap-6">
    <section>
      <header :class="`bg-${place?.color}`" class="p-4 text-me-stone">
        <div></div>
        <div class="flex items-center font-title text-3xl">
          <span :class="place?.iconClass" class="mr-3"></span>
          <h1>{{ place?.name }}</h1>
        </div>
        <div class="mt-6 -ml-4">
          <h2 class="inline border-t-4 border-me-stone pl-4 pt-3 italic">
            {{ place?.payoff }}
          </h2>
        </div>
      </header>
      <div class="border-4 border-t-0" :class="`border-${place?.color}`"></div>

      <div class="border-4 border-t-0" :class="`border-${place?.color}`">
        <video
          v-if="place?.videoUrl"
          muted
          autoplay
          loop
          playsinline
          poster=""
          :src="place?.videoUrl"
        ></video>
        <slot name="place-image" />
      </div>
    </section>

    <section class="mt-4 md:mt-0 place-section">
      <slot />

      <nav class="mt-6">
        <ul>
          <li>
            <h3 v-if="place?.menuUrl" class="font-title">Prenota un tavolo:</h3>

            <div class="flex gap-6">
              <a
                :href="`tel:${place?.telephone}`"
                class="call-to-action"
                :class="`bg-${place?.color}`"
                >Chiama</a
              >

              <a
                :href="`mailto:${place?.email}`"
                class="call-to-action-outline"
                :class="`border-${place?.color}`"
                >Scrivi una mail</a
              >
            </div>
          </li>

          <li v-if="place?.menuUrl" class="mt-4">
            <h3 class="font-title">Scopri la nostra offerta:</h3>
            <a
              :href="place?.menuUrl"
              class="call-to-action"
              :class="`bg-${place.color}`"
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
