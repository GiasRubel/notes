<template>
  <div class="col-sm-6 col-md-6">
    <form @submit.prevent="addNotes">
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Enter notes</label>
        <textarea v-model="title"
        name="title" 
        v-validate="'required'"
        data-vv-as="Title"
        class="form-control" 
        id="exampleFormControlTextarea1" 
        rows="3">
      </textarea>
      <div class="help-block error text-danger">
        <span v-show="errors.has('title')">{{ errors.first('title') }}</span>
      </div>
    </div>
    <button type="submit" class="btn btn-primary mb-2">Add</button>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return{
     title: '',
   }
 },

 computed: {
  authenticated() {
    return this.$store.getters.gettersAuthenticatedData;
  },
},

methods: {
  addNotes() {
    this.$validator.validateAll().then((valid) => {
      if (valid) { 
        if (this.authenticated) {
          
        } else {
         let data = [];
        let info = JSON.parse(localStorage.getItem('notes')); //get data from local storage
        if (info && info.length) {
         info.forEach((v, k) => {
          data.push(v);
        });
       }
       data.push(this.title);
       this.$store.commit('mutationSetNotesToLocalStorage', data);
       this.$validator.reset();
       data = [];
       this.title = '';
     }

   }
 })
  }
}
}
</script>

<style scoped>

</style>
