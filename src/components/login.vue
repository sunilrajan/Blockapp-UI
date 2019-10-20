<template>
  <v-app   id="login">
            
      
    
    <v-content  >
      <v-container    fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex justify-center xs12 sm8 md4>
              
            <v-card  justify-center class="elevation-24" >
              
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="username" v-model="input.username" label="Login" input type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" v-model="input.password" label="Password" input type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="justify-center">
               
                <v-btn color="primary" v-on:click="login()">Login</v-btn>
              </v-card-actions>
            </v-card>
         
              <v-spacer></v-spacer>
          </v-flex>
        </v-layout>
        
      </v-container>
    </v-content>

  </v-app>
</template>

<script>


  export default {
        name: 'login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password ){//||this.input.username == this.$parent.mockAccount.username1 && this.input.password == this.$parent.mockAccount.password1) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "admindata" });
                    
                    

                    }
                    else{
                    if(this.input.username == this.$parent.mockAccount.username1 && this.input.password == this.$parent.mockAccount.password1){
                      this.$emit("authenticated", true);
                        this.$router.replace({ name: "managerdata" });
                    }
                     else {
                       window.alert("The username or password is incorrect");
                    }}
               } else {
                    window.alert("A username and password must be present");
               }}}}
             
  </script>
  <style scoped>
  #login
  {
            
            background-image: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');
        background-attachment: fixed;
  }



  </style>
  