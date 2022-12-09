import { defineStore } from 'pinia';
import {
    collection, onSnapshot,
    addDoc, deleteDoc, doc, updateDoc,
    query, orderBy
} from 'firebase/firestore';
import { db } from '@/firebase/firebase.js';
import { useStoreAuth } from '@/stores/storeAuth.js';

let notesCollection
let notesCollectionQuery
let getNotesSnapshot = null

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [],
            notesLoaded: false
        }
    },

    getters: {
        getNoteById: (state) => {
            return (id) => {
                return state.notes.find(note => note.id === id)
            }
        },

        totalNotesCount: (state) => {
            return state.notes.length
        },

        totalNotesCharacters: (state) => {
            return state.notes.reduce((total, note) => total + note.content.length + note.title.length, 0)
        }
    },

    actions: {
        init() {
            const storeAuth = useStoreAuth()

            notesCollection =  collection(db, 'users', storeAuth.user.uid, 'notes')
            notesCollectionQuery = query(notesCollection, orderBy('created', 'desc'))

            this.getNotes()
        },

        getNotes () {
            this.notesLoaded = false

            getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
                const tempNotes = []

                querySnapshot.forEach((doc) => {
                    const note = {
                        id: doc.id,
                        ...doc.data()
                    }

                    tempNotes.push(note)
                })

                this.notesLoaded = true
                this.notes = tempNotes
            })
        },

        async addNote (newNote) {
            await addDoc(notesCollection, {
                ...newNote,
                created: new Date().getTime()
            })
        },

        async deleteNote (id) {
            await deleteDoc(doc(notesCollection, id))
        },

        async updateNote (payload) {
            const index = this.notes.findIndex(note => note.id === payload.id)

            if (index !== -1) {
                const { id, ...note } = { ...payload, updated: new Date().getTime() }

                await updateDoc(doc(notesCollection, id), note)
            }
        },

        clearNotes () {
            this.notes = []

            if (getNotesSnapshot) {
                getNotesSnapshot()
            }
        }
    }
})