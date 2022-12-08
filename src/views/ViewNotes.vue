<template>
  <div class="notes">
    <div class="card has-background-success p-4 mb-5">
      <div class="field">
        <div class="control">
          <input
              v-model="newNote.title"
              class="input"
              placeholder="Note title"
          />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea
              v-model="newNote.content"
              class="textarea" rows="4"
              placeholder="Add a new note"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
              class="button is-link has-background-success-dark"
              @click="addNote" :disabled="!newNote.content || !newNote.title"
          >
            Create new note
          </button>
        </div>
      </div>
    </div>

    <Note
        v-for="(note, index) in notes"
        :key="note.id"
        :note="note"
        @deleteClicked="deleteNote(index)"
    />
  </div>
</template>

<script setup>
/*
  imports
 */

  import { ref, reactive } from 'vue';
  import Note from '@/components/Notes/Note.vue';

/*
  variables
 */

  const notes = ref([
    {
      id: 1,
      title: 'My first big note',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, architecto autem cumque deleniti dolorem enim ex fugiat, harum in ipsum necessitatibus qui quidem unde veritatis voluptas voluptatem. Dolor, eum.'
    },
    {
      id: 2,
      title: 'My second smaller note',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, architecto autem cumque deleniti dolorem enim ex fugiat.'
    },
    {
      id: 3,
      title: 'My first big note',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
  ])

  let newNote = reactive({
    title: '',
    content: ''
  })

/*
  methods
 */

const addNote = () => {
  const id = new Date().getTime().toString()

  const note = {
    id,
    ...newNote
  }

  notes.value.unshift(note)
  newNote = { title: '', content: ''}
}

const deleteNote = (index) => {
  notes.value.splice(index, 1)
}
</script>