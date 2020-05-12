<template>
    <div>
        <Header></Header>
        <TitlesRow rowname="Popular" v-bind:titles="popular"></TitlesRow>
        <TitlesRow v-if="isUserLogged" rowname="Recommended" v-bind:titles="recommended"></TitlesRow>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import TitlesRow from "@/components/TitlesRow";
    import api from '../axios/api-config';

    export default {
        name: "Home",
        components: {TitlesRow, Header},
        data() {
            return {
                popular: Array,
                recommended: Array

            }
        },
        computed: {
            isUserLogged() {
                return !!localStorage.token;
            }
        },
        mounted() {
            api
                .get("/content/popular?size=5")
                .then(response => this.popular = response.data)
            if (localStorage.isAuthorized) {
                api
                    .get("/content/recommended?size=5")
                    .then(response => this.recommended = response.data)
            }
        }
    }
</script>

<style scoped>

</style>
