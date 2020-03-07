import index from '../store/index';

const auth = {
  authHeader() {
      if (index.getters.gettersAuthenticatedData && index.getters.gettersAuthenticatedData.access_token) {
          return {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + index.getters.gettersAuthenticatedData.access_token,
          }
      } else {
          return {
              'Accept': 'application/json',
          }
      }
  },

};

export default auth;