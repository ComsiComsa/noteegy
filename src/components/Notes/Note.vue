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

                <div class="columns is-mobile has-text-grey-light mt-2">
                    <div class="column">
                        Created {{ createdDate }}
                    </div>

                    <div class="column has-text-right">
                        {{ characterLength }} characters
                    </div>
                </div>
            </div>
        </div>

        <footer class="card-footer">
            <RouterLink
                :to="`/notes/${note.id}`"
                class="card-footer-item"
            >
                Edit
            </RouterLink>

            <a
                @click="handleDeleteClicked"
                class="card-footer-item"
            >
                Delete
            </a>
        </footer>
    </div>

    <DeleteNote
        v-if="modals.deleteNote"
        v-model="modals.deleteNote"
        :noteId="note.id"
    />
</template>

<script setup>
/*
  imports
 */

    import { computed, reactive } from 'vue';
    import { useDateFormat } from '@vueuse/core';
    import DeleteNote from '@/components/Modal/DeleteNoteModal.vue';

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
    const modals = reactive({
        deleteNote: false,
        editNote: false,
    })

    const createdDate = computed(() => {
        return useDateFormat(new Date(props.note.created), 'DD/MM/YYYY @ HH:mm').value
    })

/*
  methods
 */

    const handleDeleteClicked = () => {
        modals.deleteNote = true
    }
</script>
