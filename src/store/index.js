import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: ''
  },
  getters: {
  },
  mutations: {
    getUserName () {return this.state.userName},
    setUserName(name) {
      console.log("name", name, this.state)
      console.log(this.state.userName)
    }
  },
  actions: {
  },
  modules: {
  },
});
