const getDefaultState = () => {
    return {
        authenticated: JSON.parse(localStorage.getItem('loginDetails')),
    }
};

const state = getDefaultState();

const getters = {
    gettersAuthenticatedData: (state, payload) => state.authenticated,
};
const mutations = {
    mutationAuthenticatedData: (state, payload) => state.authenticated = payload,
   
};
const actions = {
    actionSetAuthenticatedDataToLocalStorage: (context, payload) => {
        localStorage.setItem('loginDetails', JSON.stringify(payload));
        context.commit('mutationAuthenticatedData', payload);
    },

    actionRemoveAuthenticatedData: (context, payload) => {
        localStorage.removeItem('loginDetails');
        context.commit('mutationAuthenticatedData');
    }
};

export default {
    state, getters, mutations, actions
}