<template>
    <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
            <h2 class="mt-2">{{rowname}}</h2>
            <div class="card-deck">

                <TitleCard v-for="title in titles" :key="title.name" v-bind:name=title.name
                           v-bind:source=title.posterSource v-bind:kinopoiskId="title.kinopoiskId"
                ></TitleCard>

            </div>
        </div>
        <div class="col-1"></div>

    </div>
</template>

<script>
    import TitleCard from "@/components/TitleCard";

    export default {
        name: "TitlesRow",
        components: {TitleCard},
        props: {
            rowname: String,
            titles: Array
        }
    }

</script>

<style scoped>

</style>
