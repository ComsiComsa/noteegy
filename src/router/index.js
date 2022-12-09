import { createRouter, createWebHistory } from 'vue-router';
import { useStoreAuth } from '@/stores/storeAuth';

const routes = [
    {
        path: '/', redirect: '/notes', component: () => import('@/layouts/MainLayout.vue'), children: [
            { path: 'notes', name: 'notes', component: () => import('@/views/ViewNotes.vue') },
            { path: 'stats', name: 'stats', component: () => import('@/views/ViewStats.vue') },
            { path: 'notes/:id', name: 'edit-note', component: () => import('@/views/ViewEditNote.vue') },
            { path: 'auth', name: 'auth', component: () => import('@/views/ViewAuth.vue') },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from) => {
    const storeAuth = useStoreAuth()

    if (!storeAuth.user.uid && to.name !== 'auth') {
        return { name: 'auth' }
    }

    if (storeAuth.user.uid && to.name === 'auth') {
        return false
    }

    return true
})

export default router;