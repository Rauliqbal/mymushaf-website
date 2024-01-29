<script setup>
const { data: quran } = await useFetch('https://equran.id/api/v2/surat')
</script>
<template>
  <main class="container">
    <h1>Quran List</h1>
    <div class="grid gap-4 md:grid-cols-3">
      <QuranCardSurah v-for="surah in quran.data" :key="surah.id" :surah="surah"/>
    </div>
  </main>
</template>