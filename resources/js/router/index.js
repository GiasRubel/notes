import Vue from 'vue';

import Router from 'vue-router';
import LandingPage from '../components/LandingPage';
import Login from '../components/Login';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path:'/', name:'landing-page', component:LandingPage},
        {path: '/login', name: 'login', component:Login},
    ]
})


