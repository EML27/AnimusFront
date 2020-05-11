<template>
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col-4 wrap-login100" style="background-color: white">
                <div class="mb-3"><h3>Hello there!</h3></div>
                <div class="mb-3 ">
                    <div class="input-group mb-3"><input type="text" class="form-control"
                                                         placeholder="Username"
                                                         v-model="username"/>
                        <div class="invalid-feedback">
                            Incorrect username
                        </div>
                    </div>
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
                        <button class="btn btn-primary btn-block" v-on:click="logup">Log in</button>
                    </div>
                </div>
                <span><a>Already have an account? <router-link to="/login">Log in</router-link></a></span>
                <div><a>Back to <router-link to="/">Animus</router-link></a></div>
                <!-- ref to registration page-->
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
    import api from '../axios/api-config'

    export default {
        name: "Register",
        data() {
            return {
                username: '',
                email: '',
                password: ''
            }
        },
        methods: {
            logup() {
                api
                    .post("/auth/signUp", {
                        username: this.username,
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
