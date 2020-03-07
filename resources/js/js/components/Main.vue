<template>
    <div>
        <div class="container">
            <nav-header></nav-header>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import NavHeader from "./NavHeader";
    export default {
        name: "Main",
        components: {NavHeader}
    }
</script>

<style scoped>

</style>
