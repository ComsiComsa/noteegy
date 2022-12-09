<template>
  <RouterView />
</template>

<script setup>
/*
    imports
 */

    import { onMounted } from 'vue';
    import { useStoreAuth } from '@/stores/storeAuth';

/*
    variables
 */

    const storeAuth = useStoreAuth()

/*
    lifecycle hooks
 */

    onMounted(() => {
        storeAuth.init()
    })
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>