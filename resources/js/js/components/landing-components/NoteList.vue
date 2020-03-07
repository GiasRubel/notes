<template>

    <div class="col-sm-6 col-md-6">
{{ authenticated }}
        <div class="alert alert-success" v-for="(note, key) in notes">

            <a @click="deleteNotes(key)" class="btn close"><i class="fa fa-trash"></i></a> 

            <a @click="editNotes(key)" style="margin-right: 20px;" class="btn close" >
                <i class="fa fa-edit"></i></a>
                <hr class="message-inner-separator">
                <p> {{ note }}</p>
                <form v-if="activeIndex === key + 1 && showForm" @submit.prevent="updateNotes(key)">
                 <textarea 
                 v-model="title"
                 name="title" 
                 class="form-control" 
                 id="exampleFormControlTextarea1" 
                 rows="3">
             </textarea>
             <br>
             <button type="submit" class="btn btn-primary mb-2">update</button>
         </form>
     </div>
 </div>

</template>

<script>

export default {
    data() {
        return{
            title : '',
            activeIndex: 0,
            showForm : false,
        }
    },

    computed: {
        notes() {
            return this.$store.getters.getterSetNotesToLocalStorage;
        },
        authenticated() {
            return this.$store.getters.gettersAuthenticatedData;
        },
    },
    methods: {
        editNotes(key) {
            this.activeIndex = key + 1;
            this.showForm = true;
        },

        updateNotes(key) {
            if (this.title.length > 0) {
                let cloneNotes = _.cloneDeep(this.notes);

                let data = cloneNotes.filter((v, k) => k !== key);

                data.push(this.title);

                this.$store.commit('mutationSetNotesToLocalStorage', data);

                data = [];
                this.title = '';
                this.showForm = false;
            }
        },

        deleteNotes(key) {
         let cloneNotes = _.cloneDeep(this.notes);

         let data = cloneNotes.filter((v, k) => k !== key);

         this.$store.commit('mutationSetNotesToLocalStorage', data);

         data = [];
     }
 }
}
</script>

<style scoped>
hr.message-inner-separator {
    clear: both;
    margin-top: 10px;
    margin-bottom: 13px;
    border: 0;
    height: 1px;
    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
    background-image: -moz-linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
    background-image: -ms-linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
}
</style>
