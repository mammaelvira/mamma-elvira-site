<script setup lang="ts">
const route = useRoute()
const places = usePlaces()
const place = places.find((place) => place.path === route.fullPath)
</script>

<template>
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
    <div class="border-4 border-t-0" :class="`border-${place?.color}`">
      <!-- <h3 :class="`text-${place?.color}`" class="px-3 font-logo text-xl">
        {{ place?.place }}
      </h3> -->
    </div>

    <!-- <BodyStripesHorizonal class="mt-1" /> -->

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
    </div>
  </section>
</template>
