<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();


const availableLocales = computed(
  () => locales.value?.filter((lang) => lang.code !== locale.value),
);

//aggiorno

</script>

<template>
  <div class="flex gap-4">
    <a
      href="#"
      v-for="locale in availableLocales"
      :key="locale.code"
      @click.prevent.stop="setLocale(locale.code)"
      class="flex items-center gap-1 text-sm uppercase font-bold -mt-1.25"
    >
      <div
        :class="
          locale.code === 'it'
            ? 'i-emojione-v1-flag-for-italy'
            : 'i-emojione-v1-flag-for-united-kingdom'
        "
      ></div>
      <p>{{ locale.code }}</p>
    </a>
  </div>
</template>
