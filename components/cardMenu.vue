<script setup>
defineProps({
  image: String,
  label : String,
  subLabel : String,
  to : String
})
</script>
<template>
  <NuxtLink :to="to" class="flex flex-col items-start bg-white rounded-lg p-4 hover:shadow-lg hover:shadow-slate-00 transition duration-300">
    <img class="w-20" :src="'/images/'+image" :alt="'logo' + label">
    <div class="mt-4">
      <h4 class="font-semibold text-2xl">{{ label }}</h4>
      <h6 class="text-secondary mt-1">{{ subLabel }}</h6>
    </div>
  </NuxtLink>
</template>