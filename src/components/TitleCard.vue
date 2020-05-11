<template>
    <div class="card mb-2">
        <router-link v-bind:to="'/title/'+kinopoiskId">
            <img v-bind:src=source
                 class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {

        props: {
            source: String,
            name: String,
            kinopoiskId: String,
        }
    }
</script>

<style scoped>

</style>
