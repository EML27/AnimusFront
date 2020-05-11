<template>
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col-4 wrap-login100" style="background-color: white">
                <div class="mb-3"><h3>We missed you!</h3></div>
                <div class="mb-3 "> <!-- логиновая лабуда-->
                    <div class="input-group mb-3"><input type="email" class="form-control"
                                                         placeholder="Email"
                                                         v-model="email"/>
                        <div class="invalid-feedback">
                            Incorrect username
                        </div>
                    </div>
                    <div class="input-group mb-3"><input type="password" class="form-control"
                                                         placeholder="Password" required pattern="[\w]{6,45}"
                                                         v-model="password"/>
                        <div class="invalid-feedback">
                            Password must be 6 or more symbols long
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary btn-block" v-on:click="login">Log in</button>
                    </div>
                </div>
                <span><a>Or, try to <router-link to="/register">Sign Up</router-link></a></span>
                <div><a>Back to
                    <router-link to="/">Animus</router-link>
                </a></div>
                <!-- ref to registration page-->
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
    import api from '../axios/api-config'

    export default {
        name: "LogIn",
        data() {
            return {
                email: '',
                password: '',

            }
        },
        methods: {
            login() {
                api
                    .post("/auth/signIn", {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        localStorage.token = response.data.token
                        this.$router.push('/')
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        }
    }


</script>

<style scoped>
    .wrap-login100 {
        width: 390px;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        padding: 77px 55px 33px 55px;
        box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
        align-items: center;
        -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
        -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
        -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    }
</style>
