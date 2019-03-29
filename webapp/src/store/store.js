import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
      count:0
    },
    mutations:{
      increment:state => state.count ++,
      decrement:state => state.count --
      // {
      //   if(state.count>=1){
      //     state.count --
      //   }
      // },
    }
  })