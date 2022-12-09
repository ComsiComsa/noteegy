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
                    @click.prevent="showMobileNav = !showMobileNav"
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
                <div class="navbar-start">
                    <button
                        v-if="storeAuth.user.uid"
                        @click="logout"
                        class="button is-small is-info mt-3 ml-3"
                    >
                        Log out {{ storeAuth.user.email }}
                    </button>
                </div>

                <div class="navbar-end">
                    <RouterLink
                        to="/notes"
                        @click="showMobileNav = false"
                        class="navbar-item"
                        active-class="is-active"
                    >
                        Notes
                    </RouterLink>

                    <RouterLink
                        to="/stats"
                        @click="showMobileNav = false"
                        class="navbar-item"
                        active-class="is-active"
                    >
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
    import { useStoreAuth } from '@/stores/storeAuth';

/*
  variables
 */

    const storeAuth = useStoreAuth()
    const showMobileNav = ref(false)

/*
    methods
 */

    const logout = () => {
        showMobileNav.value = false
        storeAuth.logoutUser()
    }
</script>

<style>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;

    }
}
</style>