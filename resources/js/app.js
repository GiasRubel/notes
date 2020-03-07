require('./bootstrap');

window.Vue = require('vue');

import Main from './components/Main'

import Vue from 'vue'
import router from './router'
import index from './store'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

const app = new Vue({
    el: '#app',
    template: '<Main/>',
    router,
    store:index,
    components: {
        Main
    }
});
