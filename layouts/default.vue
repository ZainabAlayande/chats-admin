<template>
  <div class="relative flex min-h-screen justify-between">
    <div class="w-72 min-h-screen bg-[#F7F9FB]">
      <PartialsSideBar />
    </div>

    <div class="flex-1 w-full min-h-full mx-auto bg-white">
      <PartialsTopBar />

      <div class="p-8">
        <slot />
        <NuxtSnackbar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"> </script>

<style scoped></style>
