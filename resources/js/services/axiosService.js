import auth from '../config/auth';
import axios from 'axios';

const service = {
    getData : url => axios.get(url, {
        headers : auth.authHeader()
    }),

    postData : (url, data) => {
        axios.post(url, data, {
            headers : auth.authHeader()
        })
    },

    patchData : (url, data) => {
        axios.patch(url, data, {
            headers : auth.authHeader()
        })
    },

    deleteData: url => axios.delete(url , {
        headers : auth.authHeader()
    }),

    postBeforeAuth: (url, data) => {
        axios.post(url, data, {
            headers : auth.authBeforeVerified()
        })
    }
};

export default service;