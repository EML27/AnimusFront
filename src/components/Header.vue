<template>
    <header class="navbar navbar-expand navbar-dark flex-column flex-md-row" style="background: #212121">
        <a class="navbar-brand mr-0 mr-md-2 ml-4" href="/" aria-label="Animus">
            <img src="https://fontmeme.com/permalink/200415/f7b6502454941e3d97f2da119788d30f.png">
        </a>
        <div class="navbar-nav-scroll">
            <ul class="navbar-nav flex-row">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/hello">Anime</a>
                </li>
                <li class="nav-item">
                    <router-link v-bind:to="'/title/'+rand" class="nav-link">Random</router-link>
                </li>
            </ul>
        </div>
        <ul class="navbar-nav ml-md-auto">
            <li class="nav-item">
                <div v-if="isUserLogged" class="btn-group">
                    <button type="button" class="btn btn-dark">{{username}}</button>
                    <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">

                        <a type="submit" class="dropdown-item" href="/" v-on:click="logout">Logout</a>

                    </div>
                </div>
                <router-link v-else class="nav-link d-flex align-items-center" to="/login">Log in</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
    import api from "@/axios/api-config";

    export default {
        name: "Header",
        data() {
            return {
                username: '',
                rand: ''
            }
        },
        methods: {
            logout() {
                localStorage.token = ""
                this.$router.push("/")
            },

        },
        computed: {
            isUserLogged() {
                return !!localStorage.token;
            },

        },
        mounted() {
            if (localStorage.isAuthorized) {
                api
                    .get("/auth/self")
                    .then(response => this.username = response.data.name,
                    )
                    .catch()
            }
            api
                .get("/content/random")
                .then(response => this.rand = response.data.kinopoiskId)
        }
    }
</script>

<style scoped>

</style>
