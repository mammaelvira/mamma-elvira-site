<script setup lang="ts">
interface SanityImage {
  asset: { _ref: string }
}

interface Staff {
  _id: string

  name: string
  roles: string
  nickname: string
  image: SanityImage
  description: {}
}

const query = groq`*[_type == "staff"]{
  name,
  nickname,
  roles,
  activity[]->{name, payoff, path, colorValue},
  image,
  description,
  sortingOrder
} | order(sortingOrder)`

const { data: staff, refresh } = useSanityQuery<Staff>(query)
</script>

<template>
  <article>
    <section class="mt-4 mb-12 flex justify-center">
      <header class="flex flex-col items-center">
        <h1
          class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
        >
          "La Mamma<br class="md:hidden" />
          è sempre la Mamma"
        </h1>
        <h2 class="text-center text-lg md:text-2xl text-me-lapis">
          Racconto di come nasce un progetto<br class="md:hidden" />
          di Ristorazione di qualità
        </h2>
      </header>
    </section>

    <!-- STAFF -->
    <section>
      <header class="flex flex-col">
        <h3 class="font-serif text-3xl">Lo Staff di Mamma Elvira</h3>

        <BodyStripesHorizonal />
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="person in staff" :key="person?._id">
          <div class="flex gap-4">
            <SanityImage
              v-if="person?.image?.asset"
              :asset-id="person?.image?.asset?._ref"
              auto="format"
              class="h-36 w-36 object-cover"
            />
            <header class="my-4">
              <h3 class="font-serif text-xl">{{ person.name }}</h3>
              <h5 v-show="!!person?.nickname">"{{ person?.nickname }}"</h5>
              <h4 v-for="(role, index) in person?.roles">
                {{ role }} @
                <NuxtLink
                  :to="person?.activity?.[index]?.path"
                  class="underline font-title"
                  :style="`color: ${person?.activity?.[index]?.colorValue?.hex}`"
                  >{{ person?.activity?.[index]?.name }}</NuxtLink
                >
              </h4>
            </header>
          </div>
          <div class="mt-2 border-b-2 border-me-lapis pb-2">
            <SanityContent :blocks="person?.description" />
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
