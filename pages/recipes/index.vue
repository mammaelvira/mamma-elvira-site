<script setup lang="ts">
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
})

const query = useQueryRecipes()

const { data: recipes } = await useSanityQuery(query)
</script>

<template>
  <article class="mt-6">
    <section class="mt-4 mb-12 flex flex-col">
      <header class="flex flex-col items-center">
        <h1
          class="inline font-serif text-4xl md:text-5xl text-center border-b-2 border-me-mint pb-2"
        >
          Le ricette
        </h1>
        <h2 class="text-center text-lg md:text-2xl text-me-lapis">
          I segreti della Mamma in cucina
        </h2>
      </header>
    </section>

    <section class="flex flex-col gap-16 items-center mb-16">
      <article
        v-for="recipe in recipes"
        :key="recipe._id"
        class="relative md:w-3/4 lg:w-2/3 xl:w-1/2"
      >
        <header>
          <div
            class="bg-gradient-to-r from-transparent flex justify-between items-center to-me-mint h-40"
          >
            <h3
              class="text-xl md:text-3xl max-w-1/2 font-title text-me-stone text-shadow bg-me-mint px-4 py-2 -ml-4 rounded-r-lg shadow"
            >
              {{ recipe?.title }}
            </h3>

            <figure class="-mr-3 -mt-6">
              <SanityImage
                v-if="recipe?.image?.asset"
                :asset-id="recipe?.image?.asset?._ref"
                auto="format"
                maxW="480px"
                fit="clip"
                class="h-40 w-40 object-cover shadow-md border-6 border-me-mint"
                :alt="`${recipe?.title} image`"
              />
              <div v-else class="relative h-40 w-40"></div>
            </figure>
          </div>
        </header>

        <div
          class="mt-2 border-l-4 border-b-4 border-me-mint pl-3 pb-2 rounded-bl-[3rem] relative overflow-hidden"
        >
          <section class="mb-8 sanity-content">
            <SanityContent :blocks="recipe?.description" />
          </section>
        </div>
      </article>
    </section>

    <BodyActivitySection />
  </article>
</template>
