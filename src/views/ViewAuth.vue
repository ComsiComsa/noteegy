<template>
    <div class="auth">
        <div class="tabs is-centered">
            <ul>
                <li
                    :class="{ 'is-active': !register}"
                >
                    <a @click.prevent="register = false">Login</a>
                </li>

                <li
                    :class="{ 'is-active': register}"
                >
                    <a @click.prevent="register = true">Register</a>
                </li>
            </ul>
        </div>

        <div class="card auth-form">
            <div class="card-content">
                <div class="title has-text-centered">
                    {{ formTitle }}
                </div>

                <div
                    v-if="error"
                    class="notification is-danger"
                >
                    {{ error }}
                </div>

                <form
                    @submit.prevent="onSubmit"
                >
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input
                                v-model="credentials.email"
                                class="input"
                                type="email"
                                placeholder="e.g. alex@example.com"
                                required
                            >
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input
                                v-model="credentials.password"
                                class="input"
                                type="password"
                                placeholder="********"
                                required
                            >
                        </div>
                    </div>

                    <div class="field is-grouped is-grouped-right">
                        <p class="control">
                            <button class="button is-primary">
                                {{ formTitle }}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
/*
    imports
 */

    import { ref, computed, reactive, watch } from 'vue';
    import { useStoreAuth } from '@/stores/storeAuth';

/*
    variables
 */

    const register = ref(false)
    const error = ref(undefined)
    const storeAuth = useStoreAuth()
    const formTitle = computed(() => register.value ? 'Register' : 'Login')
    const credentials = reactive({
        email: '',
        password: ''
    })

/*
    watchers
 */

    watch(register, (val) => {
		error.value = undefined
    })

/*
    methods
 */

    const onSubmit = () => {
		error.value = undefined

        const method = register.value ?
            'registerUser' : 'loginUser'

        storeAuth[method](credentials)
			.then((message) => {
				error.value = message
			})
    }
</script>

<style>
.auth-form {
    max-width: 400px;
    margin: 0 auto;
}
</style>