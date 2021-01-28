import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css';
import axios from 'axios';
import 'lib-flexible';

import { Button } from 'vant';
Vue.use(Button);
import { Field } from 'vant';
Vue.use(Field);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import { Lazyload } from 'vant';
Vue.use(Lazyload);
import { Form } from 'vant';
Vue.use(Form);
import { RadioGroup, Radio } from 'vant';
Vue.use(Radio);
Vue.use(RadioGroup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
