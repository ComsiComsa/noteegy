<template>
  <Header />

  <main class="container py-3 is-max-desktop">
    <RouterView />
  </main>
</template>

<script setup>
/*
    Imports
 */

import Header from '/src/components/layout/Header.vue';
</script>