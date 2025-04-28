<script setup lang="ts">
const localePath = useLocalePath()

interface ActivityExternal {
  _id: string
  name: string
  payoff?: string
  colorValue: { hex: string }
  logo: {
    _type: string; 
    asset: { 
      _ref: string; 
      _type: string;
      _id: string;
      url: string; 
    } 
  }
  link: string
  path: string
}

const query = groq`
  *[_type == "activitiesExternal"]{
    _id,
    name,
    payoff,
    colorValue,
    link,
    path,
    logo {
      asset-> {
        _id,
        url
      }
    }
  }
`

const { data: activitiesExternal } =
  await useSanityQuery<Array<ActivityExternal>>(query)

  console.log(activitiesExternal)
</script>

<template>
  <section>
    <!-- <h3 class="font-title text-xl">Scopri le esperienze di Mamma Elvira:</h3> -->

    <nav
      class="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 auto-rows-fr"
    >
      

      <NuxtLink
        v-for="activity in activitiesExternal"
        :to="localePath(activity.path)"
        class="activity-card"
      >
        <div
          class="activity-card-shape"
          :style="`background-color: ${activity.colorValue.hex};`"
        >
        
        <SanityImage
          :key="activity.logo.asset._id"
          :asset-id="activity.logo.asset._id"
          auto="format"
          width="640px"
          :alt="`${activity?.name} logo`"
        />
        
        

        </div>
      </NuxtLink>

    </nav>
  </section>
</template>

<style scoped>
.activity-card:hover :deep(div) {
  @apply shadow-inner;
}
.activity-card :deep(div) {
  @apply shadow-md;
}
.activity-card:hover :deep(div) img {
  @apply scale-[1.06]
    ease-in-out duration-400
    filter-drop-shadow;
}

.activity-card-shape {
  @apply h-full 
    flex items-center justify-center
    p-5 sm:p-10 md:p-15 lg:p-10 xl:p-12;
}
</style>


<!-- <NuxtLink
        :to="place.path"
        v-for="place in places"
        :key="place?.path?.replace('/', '')"
        :aria-label="place?.name"
        class="activity-card"
      >
      {{ 
      console.log(('place')),
      console.log(place) 
      }}
        <div v-if="place" class="activity-card-shape" :class="`bg-${place?.color}`">
          <img
            :src="`graphics/${place?.path
              ?.toLowerCase()
              .replaceAll('/', '')
              .replaceAll(' ', '-')}.svg`"
            :alt="`${place?.path} Logo`"
            class="h-full w-full"
          />
        </div>
      </NuxtLink> -->
      <!-- Developed by BeeBest replaced with card injection by Sanity -->


       <!-- <NuxtLink
        v-for="activity in activitiesExternal"
        :to="localePath(activity.path)"
        class="activity-card"
      >
        <div
        class="activity-card-shape"
        :style="`background-color: ${activity.colorValue.hex};`">
          
        <SanityImage 
        :asset-id="activity.logo.asset._ref" 
        auto="format" 
        maxW="640px" 
        fit="clip" 
        :alt="`${activity?.name} logo`" />


        </div>
      </NuxtLink> -->

      <!-- 
        <a
        href="https://delicatessenlecce.com/"
        target="_blank"
        class="activity-card"
      >
        <div class="activity-card-shape bg-me-deepblue">
          <img src="/graphics/delicatessen.svg" alt="Delicatessen Logo" />
        </div>
      </a> 
    -->

      <!-- <div
          :class="`bg-${place?.color}`"
          class="relative mt-4 h-full min-h-42 md:min-h-26 px-3 py-2 flex flex-col justify-between text-me-stone"
        >
          <h4 class="text-xl font-title">
            {{ place?.name }}
          </h4>
          <div>
            <div :class="place?.iconClass" class="text-2xl"></div>
            <h5>{{ place?.payoff }}</h5>
          </div>
          <div :id="place.path?.substring(1)" class="absolute -top-32"></div>
        </div> -->
