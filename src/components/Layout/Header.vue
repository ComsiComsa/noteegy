<template>
  <header class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          Noteegy
        </div>

        <a
            role="button"
            class="navbar-burger"
            :class="{ 'is-active': showMobileNav }"
            @click="showMobileNav = !showMobileNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
          class="navbar-menu"
          :class="{ 'is-active': showMobileNav }"
      >
        <div class="navbar-end">
          <RouterLink to="notes" class="navbar-item" active-class="is-active">
            Notes
          </RouterLink>

          <RouterLink to="stats" class="navbar-item" active-class="is-active">
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
/*
  imports
 */

import { ref } from 'vue';

/*
  variables
 */

const showMobileNav = ref(false)
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: -1;

    transform: translateY(-5%);
    visibility: hidden;
    opacity: 0;
    display: initial;
    transition: all .3s;
  }

  .navbar-menu.is-active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
}
</style>