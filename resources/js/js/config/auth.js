import index from '../store/index';

const auth = {
  authHeader() {
      if (index.getters.gettersAuthenticatedData && index.getters.gettersAuthenticatedData.is_email_verify) {
          return {
              'Accept': 'application/json',
              'Authorization': 'Bearer' + index.getters.gettersAuthenticatedData.token,
          }
      } else {
          return {
              'Accept': 'application/json',
          }
      }
  },

    authBeforeVerified() {
        if (index.getters.gettersAuthenticatedData && !index.getters.gettersAuthenticatedData.is_email_verify) {
            return {
                'Accept': 'application/json',
                'Authorization': 'Bearer' + index.getters.gettersAuthenticatedData.token,
            }
        } else {
            return {
                'Accept': 'application/json',
            }
        }
    },
};

export default auth;