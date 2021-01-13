import Vue from "vue";
import Router from 'vue-router';

// компоненты для отображения в роутах
import WelcomePage from "./views/WelcomePage";
import PageOne from "./views/PageOne";
import ContactDetail from './components/ContactDetail';

Vue.use(Router);


export default new Router ({
  mode: 'history',
  routes : [
    {
    path: '/',
    component: WelcomePage ,
  },
  {
    path: '/ContactsPage',
    component : PageOne, 
    props: true,},
  {
    // динамический путь
    path: '/ContactsPage/:id',
    component: ContactDetail ,
    props: true,
},
  ]
})