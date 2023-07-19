<script>

import axios from 'axios';

export default {
    name: 'ProjectsList',
    data() {
        return {
            prova: 'dato di prova',
            projectURL: 'http://localhost:8000/api/projects',
            projects: [],
            imageBaseURL: 'http://localhost:8000/',
            projectsTotalPage : 0,
            projectsCurrentPage : 0,

        }
    },
    methods: {
        getProjects() {
            axios.get(this.projectURL)
            .then(response =>  {
                console.log(response.data.results);
                this.projects = response.data.results.data;
                this.projectsTotalPage = response.data.results.last_page;
                this.projectsCurrentPage = response.data.results.current_page;

            } )
        },
        getProjectsPage(pageNumber){
            
            let config = {
                params: {
                    page: pageNumber
                }
            }

            axios.get(this.projectURL, config)
            .then(response =>  {
                console.log(response.data.results);
                this.projects = response.data.results.data;
                this.projectsTotalPage = response.data.results.last_page;
                this.projectsCurrentPage = response.data.results.current_page;

            } )
        },
        getProjectsNextPage(){
            if(this.projectsCurrentPage == this.projectsTotalPage){
                this.getProjectsPage(1);
            }else{
                this.getProjectsPage(this.projectsCurrentPage + 1);
            }
        },
        getProjectsPreviousPage(){
            if(this.projectsCurrentPage == 1){
                this.getProjectsPage(this.projectsTotalPage);
            }else{
                this.getProjectsPage(this.projectsCurrentPage - 1);
            }
        }
    },
    mounted() {
        this.getProjects(this.projectURL);
    }
}  


</script>


<template>

    <main>
        <div class="container my-3">
            <div>
                Pagina {{ projectsCurrentPage }} di {{ projectsTotalPage }}
            </div>
            <div class="myCardContainer row">
                <div v-for="project in projects" class="card col-4">
                    <h4 class="card-title">
                        <router-link :to="{ name: 'Project' , params: {id: project.id}}">
                            {{ project.title }}
                        </router-link>
                        
                    </h4>
                    <p class="card-text">
                        <span class="fw-bold">Tipo:</span> 
                        {{ project.type.name }}
                    </p>
                    <p class="card-text">
                        <span class="fw-bold">Tecnologie: </span> 
                        <template v-for="(technology, index) in project.technology">
                            <template v-if="index != (project.technology.length -1)">
                                {{ technology.name }},
                            </template>
                            <template v-else>
                                {{ technology.name }}
                            </template>
                        </template>
                    </p>
                    <p class="card-text">{{ project.description }}</p>
                </div>
            </div>
            <div class="d-flex justify-content-between my-3">
                <button @click="getProjectsPreviousPage">PAGINA PRECEDENTE</button>
                <div class="d-flex justify-content-between gap-3">
                    <button @click="getProjectsPage(n)" v-for="n in projectsTotalPage">{{ n }}</button>
                </div>
                <button @click="getProjectsNextPage">PAGINA SUCCESSIVA</button>
            </div>
        </div>
    </main>

</template>