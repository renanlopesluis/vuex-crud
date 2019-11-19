import Vue from 'vue';
import Router from 'vue-router';
import PetForm from '../components/petform/petform-component.vue';
import PetList from '../components/petlist/petlist-component.vue';
import PetProfile from '../components/petprofile/petprofile-component.vue';
import VueRouter from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'PetForm',
      component: PetForm
    },
    {
      path: '/list',
      name: 'PetList',
      component: PetList
    },
    {
      path: '/pet/:petId',
      name: 'PetProfile',
      component: PetProfile
    }
  ]
});

