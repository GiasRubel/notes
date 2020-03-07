<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
         
           <router-link  :to="{name:'landing-page'}"class="navbar-brand">Hellotask</router-link>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                   <a v-if="authenticated" class="nav-link" @click="logout">Logout <span class="sr-only">(current)</span></a> 
                   
                   <router-link v-else :to="{name:'login'}" class="nav-link">Login</router-link>
               </li>

           </ul>
       </div>
   </nav>
</div>
</template>

<script>
export default {
    name: "NavHeader",

    computed: {

        authenticated() {
            return this.$store.getters.gettersAuthenticatedData;
        },
    },

    methods:{
        logout() {
            this.$store.dispatch('actionRemoveAuthenticatedData');
        }
    }
}
</script>

<style scoped>

</style>
