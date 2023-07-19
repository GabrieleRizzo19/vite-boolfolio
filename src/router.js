import { createRouter, createWebHistory} from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import Project from './pages/Project.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'ProjectsList',
            component: ProjectsList
        },
        {
            path: '/projects/:id',
            name: 'Project',
            component: Project
        }
    ]
});

export { router };