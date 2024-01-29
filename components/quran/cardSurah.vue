<script setup>
defineProps({
  surah: Object
})
</script>
<template>
  <NuxtLink :to="'/surah/' + surah.id" class="bg-white flex space-between border border-primary rounded-xl p-2">
    <div class="flex items-center gap-3">
      <div class="relative flex items-center justify-center">
        <img width="44" height="44" src="/frame.svg" alt="">
        <p class="absolute text-sm">{{ surah.nomor }}</p>
      </div>
      <div>
        <h2 class="text-primary text-lg font-semibold">{{ surah.namaLatin }}</h2>
        <h6 class="text-secondary text-sm">{{ surah.tempatTurun }} - {{ surah.jumlahAyat }} Ayat</h6>
      </div>
      
    </div>
  </NuxtLink>
</template>