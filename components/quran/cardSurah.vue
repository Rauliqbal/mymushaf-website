<script setup>
defineProps({
  surah: Object
})
</script>
<template>
  <NuxtLink :to="'/surah/' + surah.id" class="card-surah bg-white flex justify-between items-center border border-primary rounded-xl p-3">
    <div class="flex items-center gap-3">
      <div class="relative flex items-center justify-center">
        <img width="44" height="44" src="/frame.svg" alt="">
        <p class="absolute text-sm font-bold">{{ surah.nomor }}</p>
      </div>
      <div>
        <h2 class="text-primary text-lg font-bold">{{ surah.namaLatin }}</h2>
        <h6 class="text-secondary text-sm">{{ surah.tempatTurun }} - {{ surah.jumlahAyat }} Ayat</h6>
      </div>
    </div>
    <h6 class="font-arabic text-3xl text-primary">{{ surah.nama }}</h6>
  </NuxtLink>
</template>
<style>
.card-surah {
  box-shadow: 0px 9px 0px 0px rgba(76, 32, 12, 40%);
}
</style>