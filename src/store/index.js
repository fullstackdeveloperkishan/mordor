import Vue from 'vue';
import Vuex from 'vuex';
import assignment from './modules/assignment'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        assignment
    }
});

export default store;