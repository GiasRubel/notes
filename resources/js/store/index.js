import Vue from 'vue'
import vuex from 'vuex'
import login from './modules/login';
import notes from './modules/notes';

Vue.use(vuex);

const index = new vuex.Store({
    modules: {
        login,
        notes,
    }
});

export default index;
