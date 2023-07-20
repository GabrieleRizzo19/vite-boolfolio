<script>

    import axios from 'axios';

    export default{
        name: 'Project',
        data(){
            return {
                project: null,
                projectURL: 'http://localhost:8000/api/projects/' + this.$route.params.id,
                imageBaseURL: 'http://localhost:8000/storage/'
            }
        },
        methods:{
            getProject() {
                axios.get(this.projectURL)
                .then(response =>  {
                    console.log(response.data.results);
                    this.project = response.data.results;
                    console.log(this.project);
                } )
            }   
        },
        mounted(){
            this.getProject();

        }
    }

</script>

<template>

    <div class="container" v-if="project != null">

        <h1>{{ project.title }}</h1>
        <img :src="imageBaseURL + project.image" alt="">
        <h5>Tipo: {{ project.type.name }}</h5>
        <h5>Tecnologie usate:
            <template v-for="(technology, index) in project.technology">
                <template v-if="index != (project.technology.length - 1)">
                    {{ technology.name }},
                </template>
                <template v-else>
                    {{ technology.name }}
                </template>
            </template>
        </h5>
        <p>{{ project.description }}</p>

    </div>

</template>

<style scoped lang="scss">



</style>