<script>

import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            prova: 'dato di prova',
            projectURL: 'http://localhost:8000/api/projects',
            projects: [],
            imageBaseURL: 'http://localhost:8000/'
        }
    },
    methods: {
        getAllProjects(projectURL) {
            axios.get(projectURL)
            .then(response =>  {
                console.log(response.data.results);
                this.projects = response.data.results;
            } )
        }
    },
    mounted() {
        this.getAllProjects(this.projectURL);
    }
}  


</script>


<template>

    <main>
        <div class="myCardContainer container">
            <div class="row">
                <div v-for="project in projects" class="card col-4">
                    <h4 class="card-title">{{ project.title }}</h4>
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
        </div>
    </main>

</template>