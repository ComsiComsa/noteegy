<template>
    <div class="notes">
        <AddEditNote
            v-model="newNote"
        >
            <template v-slot:buttons>
                <button
                    @click="addNote"
                    :disabled="!newNote.title || !newNote.content"
                    class="button is-link has-background-success"
                >
                    Add new note
                </button>
            </template>
        </AddEditNote>

        <template v-if="storeNotes.notesLoaded">
            <Note
                v-for="note in storeNotes.notes"
                :key="note.id"
                :note="note"
                @deleteClicked="deleteNote(note.id)"
            />

            <div
                v-if="!storeNotes.notes.length"
                class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-4"
            >
                No notes yet here ...
            </div>
        </template>

        <progress
            v-else
            class="progress is-success"
            max="100"
        />
    </div>
</template>

<script setup>
/*
  imports
 */

    import { reactive, onMounted } from 'vue';
    import { useStoreNotes } from '@/stores/storeNotes.js';

    import Note from '@/components/Notes/Note.vue';
    import AddEditNote from '@/components/Notes/AddEditNote.vue';

/*
  variables
 */

    const storeNotes = useStoreNotes()

    let newNote = reactive({
        title: '',
        content: ''
    })

/*
  methods
 */

    const addNote = () => {
        storeNotes.addNote(newNote)

        newNote.title = ''
        newNote.content = ''
    }

    const deleteNote = (id) => {
        storeNotes.deleteNote(id)
    }

/*
    lifecycle hooks
*/

    onMounted(() => {
    })
</script>