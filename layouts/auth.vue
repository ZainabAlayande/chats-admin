<template>
        <slot />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    'loginguard',
  ],
});
</script>
 