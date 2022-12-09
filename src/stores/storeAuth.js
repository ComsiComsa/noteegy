import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase.js';
import { useStoreNotes } from '@/stores/storeNotes';

export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
        return {
            user: {}
        }
    },

    actions: {
        init() {
            const storeNotes = useStoreNotes()

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user = user
                    this.router.push('/')
                    storeNotes.init()
                } else {
                    this.user = {}
                    this.router.replace('/auth')
                    storeNotes.clearNotes()
                }
            })
        },

        registerUser({ email, password }) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log('User => ', user)
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.log(errorCode + ' => ' + errorMessage)
                })
        },

        loginUser({ email, password }) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log('User => ', user)
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.log(errorCode + ' => ' + errorMessage)
                })
        },

        logoutUser() {
            signOut(auth)
                .then(() => {
                    console.log('User sign out')
                })
                .catch((error) => {
                    console.log(error.message)
                })
        }
    }
})