<template>
    <div>
        <Header/>
        <div class="container-fluid">
            <div class="col-1"></div>
            <div class="col-10">
                <div class="container-fluid">
                    <div class="row mt-2">
                        <div class="col-3">
                            <img width="250" height="350"
                                 v-bind:src="title.posterSource" />
                        </div>
                        <div class="col-9">
                            <h3>{{title.name}}</h3>
                            <h4>Description</h4>
                            <p>{{title.description}}</p>
                            <h4>Genres</h4>
                            <p>{{title.genres}}</p>

                        </div>
                    </div>

                </div>
            </div>
            <div class="col-1"></div>
            <div class="row mt-2 " style="background-color: #000000">
                <div class="col"></div>
                <div class="col ">
                    <iframe src="http://aniqit.com/video/32248/f073ce00a1ac0f9d09528d483cf83a73/720p" width="610"
                            height="370" frameborder="0" allowfullscreen class="mt-4 mb-1"></iframe>
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle btn-block" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Episode
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">1 серия</a>
                            <a class="dropdown-item" href="#">2 серия</a>
                            <a class="dropdown-item" href="#">3 серия</a>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from "@/axios/api-config";
    import Header from "@/components/Header";

    export default {
        name: "TitleDetails",
        components: {Header},
        data() {
            return {
                title: null
            }
        },
        mounted() {
            api
                .get("/content/" + this.$route.params.kId)
                .then(response => this.title = response.data)
        }
    }
</script>

<style scoped>

</style>
