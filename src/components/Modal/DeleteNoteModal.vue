<template>
    <div class="modal is-active">
        <div class="modal-background"></div>

        <div class="modal-card" ref="modalCardRef">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete note</p>
                <button
                    @click="closeModal"
                    class="delete"
                    aria-label="close"
                />
            </header>

            <section class="modal-card-body">
                Are you sure you want to delete this note?
            </section>

            <footer class="modal-card-foot is-justify-content-flex-end">
                <button
                    @click="closeModal"
                    class="button"
                >
                    Cancel
                </button>

                <button
                    class="button is-danger"
                    @click="storeNotes.deleteNote(noteId)"
                >
                    Delete
                </button>
            </footer>
        </div>
    </div>
</template>

<script setup>
/*
    imports
 */

    import { ref, onMounted, onUnmounted } from 'vue';
    import { onClickOutside } from '@vueuse/core';
    import { useStoreNotes } from '@/stores/storeNotes';

/*
    variables
 */

    const storeNotes = useStoreNotes()
    const modalCardRef = ref(null)
    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        },
        noteId: {
            type: String,
            required: true
        }
    })
    const emit = defineEmits(['update:modelValue'])

/*
    methods
 */

    const closeModal = () => {
        emit('update:modelValue', false)
    }

    const handleKeyboard = (e) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    }

    onClickOutside(modalCardRef, closeModal)

/*
    lifecycle hooks
 */

    onMounted(() => {
        document.addEventListener('keyup', handleKeyboard)
    })

    onUnmounted(() => {
        document.removeEventListener('keyup', handleKeyboard)
    })
</script>