import Vue from "vue";
import Router from 'vue-router';

import WelcomePage from "./views/WelcomePage";
import PageOne from "./views/PageOne";
import Test from './components/Test';
Vue.use(Router);



export default new Router ({
  mode: 'history',
  routes : [{
    path: '/',
    component: WelcomePage ,
  },
  {path: '/ContactsPage',
component : PageOne},
{
  path: '/ContactsPage/:id',
  component: Test ,
  props: true,
},]
})