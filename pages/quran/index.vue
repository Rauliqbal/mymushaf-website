<script setup>
const { data: quran } = await useFetch('https://equran.id/api/v2/surat')
</script>
<template>
  <main class="container">
    <div class="grid gap-6 md:grid-cols-3">
      <QuranCardSurah v-for="surah in quran.data" :key="surah.id" :surah="surah"/>
    </div>
  </main>
</template>