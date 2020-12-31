import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:0,
    content:''
  },
  mutations: {
    getContent(state,data){
      state.content=data.toString();
    }
  },
  actions: {
     get_data({commit}){
       // 为给定 ID 的 user 创建请求
       axios.get('')
         .then(function (response) {
            commit('getContent',response)
         })
         .catch(function (error) {
           console.log(error);
         });
     }

  },
  modules: {}
});
