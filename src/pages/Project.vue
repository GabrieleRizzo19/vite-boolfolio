<script>

    import axios from 'axios';

    export default{
        name: 'Project',
        data(){
            return {
                project: null,
                projectURL: 'http://localhost:8000/api/projects/' + this.$route.params.id
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

    <!-- <div>
        {{ project.title }}
    </div> -->

</template>

<style scoped lang="scss">



</style>