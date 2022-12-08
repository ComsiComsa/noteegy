import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/', component: () => import('@/layouts/MainLayout.vue'), children: [
            { path: 'notes', name: 'notes', component: () => import('@/views/ViewNotes.vue') },
            { path: 'stats', name: 'stats', component: () => import('@/views/ViewStats.vue') }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;