import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'
import Post from '../pages/Post.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/post', component: Post}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router