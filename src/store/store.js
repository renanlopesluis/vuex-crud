import Vue from 'vue';
import Vuex from 'vuex';

import pet from './pet_module'
Vue.use(Vuex);

const store = new Vuex.Store({
   modules: {
    pet
  }
});

export {store}
