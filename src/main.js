import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router/index';
import NavigationMenu from './components/nagivation-menu/nagivation-menu-component.vue';
import store from './store/store';

Vue.use(BootstrapVue);
Vue.component('navigation-menu', NavigationMenu);
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
