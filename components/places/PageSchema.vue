<script setup lang="ts">
const route = useRoute()
const places = usePlaces()

const place = places.find((place) =>
  place.path.includes(route.fullPath?.split('/')?.at(-1) as string),
)
</script>

<template>
  <article class="flex flex-col justify-center">
    <div class="flex flex-col justify-center md:flex-row gap-8">
      <section class="w-full max-w-max md:w-1/2 lg:w-1/3 xl:w-1/4">
        <header
          :class="`bg-${place?.color}`"
          class="p-4 text-me-stone rounded-tr-[3rem]"
        >
          <div class="flex items-center font-title text-3xl">
            <slot name="custom-icon">
              <span :class="place?.iconClass" class="mr-3"></span>
            </slot>
            <h1>{{ place?.name }}</h1>
          </div>
          <div class="mt-6 -ml-4">
            <h2 class="inline border-t-4 border-me-stone pl-4 pt-3 italic">
              {{ $t(place?.payoff) }}
            </h2>
          </div>
        </header>

        <div
          class="border-4 border-t-0 rounded-bl-[3rem] overflow-hidden"
          :class="`border-${place?.color}`"
        >
          <video
            v-if="place?.videoUrl"
            muted
            autoplay
            loop
            playsinline
            poster=""
            :src="place?.videoUrl"
            class="w-full max-h-160 object-cover"
          ></video>
          <figure
            class="activity-page-image-container w-full max-h-160 rounded-bl-[3rem]"
          >
            <slot name="place-image" />
          </figure>
        </div>
      </section>

      <section
        class="mt-4 md:mt-0 md:w-1/2 lg:w-1/3 place-section flex flex-col justify-between"
      >
        <div><slot /></div>

        <nav class="mt-6">
          <ul>
            <!-- BOOKING ACTIONS -->
            <li>
              <h3 v-if="place?.menuUrl" class="font-title">
                {{ $t('prenotation.title') }}:
              </h3>
              <!-- Online booking ACTIVE -->
              <div v-if="place?.bookingUrl" class="flex gap-6">
                <a 
                  :href="place?.bookingUrl"
                  class="call-to-action"
                  :class="`bg-${place?.color}`">
                  {{ $t('prenotation.online') }}
                </a>

                <a
                  :href="`tel:${place?.telephone}`"
                  class="call-to-action-outline"
                  :class="`border-${place?.color}`">
                  {{ $t('prenotation.phone') }}
                  </a>
              </div>
              <!-- Online booking NOT ACTIVE -->
              <div v-else class="flex gap-6">
                <div class="flex gap-6">
                  <a
                    :href="`tel:${place?.telephone}`"
                    class="call-to-action"
                    :class="`bg-${place?.color}`">
                    {{ $t('prenotation.phone') }}
                  </a>

                  <a
                    :href="`mailto:${place?.email}`"
                    class="call-to-action-outline"
                    :class="`border-${place?.color}`">
                    {{ $t('prenotation.email') }}
                    </a>
                </div>
              </div>
            </li>

            <!-- MENU ACTION -->
            <li v-if="place?.menuUrl" class="mt-4">
              <h3 class="font-title">
                {{ $t('menu.title') }}:
              </h3>
              <a
                :href="place?.menuUrl"
                class="call-to-action"
                :class="`bg-${place.color}`"
                target="_blank"
                >
                {{ $t('menu.button') }}
                </a
              >
            </li>

            <!-- LINK DRINK PUGLIA -->
            <li>
              <p>
                {{ $t('drink')}}
                <a href="http://drinkpuglia.com" target="_blank" class="call-to-action-text">DrinkPuglia</a>
              </p>
             </li>

            <!-- ADDRESS -->
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

            <!-- SOCIAL LINKS -->
            <li
              class="mt-8 flex gap-12 text-4xl"
              :class="`text-${place?.color}`"
            >
              <a :href="place?.instagramUrl" target="_blank"
                ><div class="i-ph-instagram-logo">Instagram link</div></a
              >
              <a :href="place?.facebookUrl" target="_blank"
                ><div class="i-ph-facebook-logo">Facebook link</div></a
              >
            </li>
          </ul>
        </nav>

        <div
          class="hidden text-me-ink text-me-peach text-me-orange text-me-olive text-me-lapis text-me-mint text-me-red text-me-pink text-me-lavender"
        >
          Mamma Elvira
        </div>
      </section>
    </div>

    <!-- PICNIC EXPERIENCE FORMULAS -->
    <section v-if="place?.path?.includes('picnic')" class="mt-8">
      <header>
        <h4 class="font-serif text-2xl">
          {{
            $t('formulas')
          }}
          <br />
          <span class="flex items-center gap-2">
            <span :class="`${place?.iconClass} text-${place?.color}`"></span>
            <span
              :class="`text-${place?.color}`"
              class="font-title text-shadow"
              >{{ place?.name }}</span
            >
          </span>
        </h4>
      </header>
      <div class="mt-4 flex justify-center"><PlacesPicnicFormulas /></div>
    </section>

    <PlacesEventsSection class="mt-8" />

    <BodyActivitySection class="mt-16" />
  </article>
</template>

<style scoped>
.activity-page-image-container :deep(img) {
  @apply w-full max-h-160
    object-cover;
}
</style>
