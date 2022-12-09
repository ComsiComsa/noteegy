<template>
    <div
        class="card p-4 mb-5"
        :class="`has-background-${ bgColor }-dark`"
    >
        <div class="field">
            <div class="control">
                <label class="label has-text-white">Title</label>
                <input
                    v-model="modelValue.title"
                    @input="$emit('update:modelValue', modelValue)"
                    class="input"
                    placeholder="Note title"
                    v-autofocus
                />
            </div>
        </div>

        <div class="field">
            <div class="control">
                <label class="label has-text-white">Content</label>
                <textarea
                    v-model="modelValue.content"
                    @input="$emit('update:modelValue', modelValue)"
                    class="textarea" rows="4"
                    :placeholder="placeholder"
                />
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script setup>
/*
  imports
 */

    import { vAutofocus } from '@/directives/vAutofocus.js';

/*
  variables
 */

    const props = defineProps({
        modelValue: {
            type: Object,
            required: true
        },
        bgColor: {
            type: String,
            default: 'success'
        },
        placeholder: {
            type: String,
            default: 'Note content'
        }
    })

    const emits = defineEmits(['update:modelValue'])
</script>