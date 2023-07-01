<script setup lang="ts">
interface Props {
  activityPath: string
  events: any // #TODO add event Interface
}
const props = withDefaults(defineProps<Props>(), {
  activityPath: '/assets',
  events: [],
})
</script>

<template>
  <article>{{ activityPath }}: {{ events.length }}</article>
</template>
