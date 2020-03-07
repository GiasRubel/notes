<template>
    <div class="row">
        <title-form></title-form>

        <note-list></note-list>
    </div>
</template>

<script>
import TitleForm from "./landing-components/TitleForm";
import NoteList from "./landing-components/NoteList";

export default {
    name: "LandingPage",
    components: {TitleForm, NoteList},
    data() {
        return{
              
           }
       },
      
       methods: {
       
        }
}
</script>

<style scoped>
    body { margin-top:30px; }
</style>
