import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import ShowProject from './pages/ShowProject.vue';
import Contacts from './pages/Contacts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/projects/:slug',
            name: 'show',
            component: ShowProject
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts
        },


    ]
});
export { router };