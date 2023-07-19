<script>

    export default{
        name: 'AppHeader',
        data(){
            return {
                navLinks: [
                    {
                        label: 'Home',
                        to: { name: 'Home' }
                    },
                    {
                        label: 'Projects',
                        to: { name: 'ProjectsList' }
                    }
                ]
            }
        }
    }

</script>

<template>

    <div class="myHeader">
        <h1>HEADER</h1>
        <template v-for="link in navLinks">
            <router-link class="header-link" :to="link.to">{{ link.label }}</router-link>
        </template>
    </div>

</template>

<style scoped lang="scss">

    .myHeader{
        height: 100px;
        border: 2px solid red;
        padding: 0 2rem;
    }

    .header-link{
        padding: 0.5rem;
    }

</style>