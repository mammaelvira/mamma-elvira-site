<script setup lang="ts">
const query = useQueryCarouselImages()
const { data: images } = useSanityQuery(query)
</script>

<template>
  <div class="slides-track" ref="slidesTrack">
    <ul class="slides" v-for="slideIndex in 2" :class="`section-${slideIndex}`">
      <li
        class="slide"
        :key="`${image?._key}-${slideIndex}`"
        v-for="image in images"
      >
        <SanityImage
          :asset-id="image?.asset?._ref"
          :alt="image?.caption"
          auto="format"
          w="480px"
          fit="clip"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.slides-track {
  @apply w-full flex gap-10
  overflow-hidden;
}

.slides {
  @apply flex justify-between gap-10

  will-change: transform;
  animation: 35s slideLeft infinite linear;
}

.slide {
  @apply h-auto w-[90vw] md:w-[50vw] lg:w-[30vw] xl:w-[20vw]
    flex items-center justify-center;
}
.slide :deep(img) {
  @apply shadow-md;
}

@media (min-width: 768px) {
  .slides-container:hover .slides {
    animation-play-state: paused;
  }

  .slides:hover {
    transition: all 600ms ease-in-out;
    transform: scale(1.1);
    will-change: transform;
  }

  .slides-container:has(.slides:hover) {
  }
}

@keyframes slideLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
