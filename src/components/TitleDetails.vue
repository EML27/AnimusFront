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
                                 v-bind:src="title.posterSource"/>
                            <div v-if="isUserLogged" class="btn-group-toggle mt-1" data-toggle="buttons">
                                <label v-bind:class="buttonClasses" style="width: 250px">
                                    <input type="checkbox" checked autocomplete="off" v-model="liked"> {{likeTitle}}
                                </label>
                            </div>

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
            <div class="row mt-2 " style="background-color: #000000; height: 100vh">
                <div class="col"></div>
                <div class="col ">
                    <iframe v-bind:src=title.playerUrl width="610"
                            height="370" frameborder="0" allowfullscreen class="mt-4 mb-1"></iframe>
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
                title: null,
                liked: false,
                likeTitle: 'Do you like it?'
            }
        },
        computed: {
            isUserLogged() {
                return !!localStorage.token;
            },

            buttonClasses() {
                if (this.liked) {
                    return "btn btn-outline-danger active"
                } else {
                    return "btn btn-outline-danger"
                }
            }
        },
        watch: {
            liked: function f() {
                if (this.liked) {
                    this.likeTitle = "Like!"
                    api.post("/content/" + this.$route.params.kId)
                } else {
                    this.likeTitle = "Do you like it?"
                    api.delete("/content/" + this.$route.params.kId)
                }
            }
        },
        mounted() {
            api
                .get("/content/" + this.$route.params.kId)
                .then(response => this.title = response.data)
            api
                .get("/content/likes/" + this.$route.params.kId)
                .then(response => this.liked = response.data)
        }
    }
</script>

<style scoped>

</style>
