<script setup>
useHead({
   title: "Home - My Mushaf",
});

import {MENUS} from '~/data/utils.ts'
</script>
<template>
   <main class="container">
      <div class="grid grid-cols-2 gap-4">
         <CardMenu v-for="menu in MENUS" :image="menu.image" :label="menu.label" :to="menu.url" subLabel="32 Doa"/>
      </div>
   </main>
</template>
