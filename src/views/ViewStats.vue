<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{ storeNotes.totalNotesCount }}</td>
                </tr>

                <tr>
                    <td>Number of Characters</td>
                    <td>{{ storeNotes.totalNotesCharacters }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
/*
    imports
 */

    import { useStoreNotes } from '@/stores/storeNotes';

/*
    variables
 */

    const storeNotes = useStoreNotes()
</script>

<style scoped>

</style>