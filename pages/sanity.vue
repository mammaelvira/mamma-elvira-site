<script setup lang="ts">
interface Staff {
  name: string
  role: string
  nickname: string
  description: {}
}

const query = groq`*[_type == "staff"]{
  name,
  nickname,
  image,
  role,
  description
}`

const { data: staff, refresh } = useSanityQuery(query)
</script>

<template>
  <div class="flex flex-col gap-12">
    <section v-for="person in staff" :key="person.id">
      <div class="flex gap-4">
        <SanityImage
          :asset-id="person.image.asset._ref"
          auto="format"
          class="h-48"
        />
        <header>
          <h1>{{ person.name }}</h1>
          <h3>"{{ person.nickname }}"</h3>
          <h2>{{ person.role }}</h2>
        </header>
      </div>

      <SanityContent :blocks="person.description" />
    </section>
  </div>
</template>
