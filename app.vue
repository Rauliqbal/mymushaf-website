<template>
   <div class="relative min-h-screen overflow-hidden">
      <Header/>
      <NuxtPage class="py-7"/>
      
      <div class="-z-10 absolute -top-16 -right-10 bg-primary blur-3xl w-[130px] h-[130px]"></div>
      <div class="-z-10 absolute -bottom-16 -left-16 bg-primary blur-3xl w-[130px] h-[130px]"></div>
   </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
   transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
   opacity: 0;
}
</style>
