<template>
  <div class="edit-note">
    <AddEditNote
        v-model="note"
        bg-color="link"
    >
      <template v-slot:buttons>
          <button
              @click="$router.push('/notes')"
              class="button is-link is-light mr-2"
          >
              Cancel
          </button>

          <button
              @click="handleSaveClicked"
              class="button is-link has-background-link"
              :disabled="!note.title || !note.content"
          >
              Save Note
          </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
  imports
 */

import { useRoute, useRouter } from 'vue-router';

import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';

/*
  variables
 */

  const route = useRoute()
  const router = useRouter()
  const storeNotes = useStoreNotes()

  const note = storeNotes.getNoteById(route.params.id)

/*
  methods
 */

  const handleSaveClicked = () => {
    const payload = {
      id: route.params.id,
      ...note
    }

    storeNotes.updateNote(payload)
    router.push('/notes')
  }

</script>