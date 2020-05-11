<template>
    <div>
        <Header></Header>
        <TitlesRow rowname="Popular" v-bind:titles="popular"></TitlesRow>
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
                popular: Array
            }
        },
        mounted() {
            api
                .get("/content/popular?size=5")
                .then(response => this.popular = response.data)
        }
    }
</script>

<style scoped>

</style>
