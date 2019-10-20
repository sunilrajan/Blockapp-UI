<template>

<div id="app">
    <div id="nav">
           <v-spacer></v-spacer>  
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace><v-btn block color="info"><b>Logout</b></v-btn> </router-link>
               </div>
        <router-view @authenticated="setAuthenticated" />
       </div>
  </template>

<script>
import login from './components/login'
import managerdata from './views/managerdata.vue'
import admindata from './views/admindata.vue'



export default {
  name: 'App',
  data () {
    return {
               authenticated: false,
                mockAccount: {
                    username: "admin",
                    password: "admin",
                     username1: "man",
                    password1: "man"
                    
                   
                },
               
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        
        
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
            
    }
  }

</script>
