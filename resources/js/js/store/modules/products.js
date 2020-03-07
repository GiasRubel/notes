
import {forEach} from 'lodash'

const  state = {
    product: {},
    multipleImage: [],
    productList: {},
    sizeList: {},
    categoryList: {},
    colorList: {},
};
const  getters = {
    getterGetProductById: (state, payload) => state.product,
    getterGetMultipleImages: (state, payload) => state.multipleImage,
    getterAllProductList: (state, payload) => state.productList,
    getterSizeList: (state, payload) => state.sizeList,
    getterCategoryList: (state, payload) => state.categoryList,
    getterColorList: (state, payload) => state.colorList,
};
const  mutations = {
    mutationGetProductById: (state, payload) => {
        state.product = payload.find(x => x);
        let result = state.product.multi.map(x => x.file);
        result.unshift(state.product.image);
        let obj = {};
        let obj1 = [];
        forEach(result, (v, k) => {
            obj1.push({'image': v})
        });
        state.multipleImage = obj1;
    },

    mutationAllProductList: (state, payload) => {
        state.productList = payload.data;
    } ,
    mutationSizeList: (state, payload) => {
        state.sizeList = payload;
    },
    mutationCategoryList: (state, payload) => {
        state.categoryList = payload.data;
    },
    mutationColorList: (state, payload) => state.colorList = payload,
};
const  actions = {
    actionGetProductById: (context, payload) => {
        axiosService.getData('/api/products/' + payload).then(response => {
            context.commit('mutationGetProductById', response.data.result)
        }).catch(error => {
            console.log(error)
        })
    },

    actionAllProductList: (context, payload) => {
        axiosService.getData('/api/products?take=2').then(response => {
            context.commit('mutationAllProductList', response.data.result)
        }).catch(error => {
            console.log(error);
        })
    },

    actionSizeList: (context, payload) => {
        axiosService.getData('/api/sizes').then(response => {
            context.commit('mutationSizeList', response.data)
        }).catch(error => {
            console.log(error);
        })
    },

    actionCategoryList: (context, payload) => {
        axiosService.getData('/api/categories').then(response => {
            context.commit('mutationCategoryList', response.data.result)
        }).catch(error => {
            console.log(error);
        })
    },

    actionColorList: (context, payload) => {
        axiosService.getData('/api/colors').then(response => {
            context.commit('mutationColorList', response.data)
        }).catch(error => {
            console.log(error);
        })
    },
};

export default {
    state, getters, mutations, actions
}
