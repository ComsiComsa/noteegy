<template>
  <div
      class="card mb-5"
  >
    <header class="card-header">
      <p class="card-header-title">
        {{ note.title }}
      </p>
    </header>

    <div class="card-content">
      <div class="content">
        {{ note.content }}

        <div class="has-text-right has-text-grey-light mt-2">
          {{ characterLength }} characters
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a
          @click="handleDeleteClicked"
          class="card-footer-item"
      >
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
/*
  imports
 */

import { defineProps, computed } from 'vue';

/*
  variables
 */

  const props = defineProps({
    note: {
      type: Object,
      required: true
    }
  })

  const emits = defineEmits(['deleteClicked'])

  const characterLength = computed(() => props.note.content.length)

/*
  methods
 */

  const handleDeleteClicked = () => {
    emits('deleteClicked')
  }
</script>
