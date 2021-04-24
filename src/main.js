import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css';
import axios from 'axios';
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import 'lib-flexible';
import '../mock/index'
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
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
import { Icon } from 'vant';
Vue.use(Icon);
import { Search } from 'vant';
Vue.use(Search);
import { Picker } from 'vant';
Vue.use(Picker);
import { Popup } from 'vant';
Vue.use(Popup);
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
import { Image as VanImage } from 'vant';
Vue.use(VanImage);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
import { DatetimePicker } from 'vant';
Vue.use(DatetimePicker);
import { Dialog } from 'vant';
Vue.use(Dialog);
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
import { Toast } from 'vant';
Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
