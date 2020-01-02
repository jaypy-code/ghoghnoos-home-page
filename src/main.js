import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuesax from 'vuesax'

import "./styles/flexbox.css";
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  rtl: true,
  theme:{
    colors:{
      primary: 'rgb(31,116,255)',
      success: 'rgb(40,199,111)',
      danger: 'rgb(234,84,85)',
      warning: 'rgb(255,159,67)',
      dark: 'rgb(30,30,30)'
    }
  }
})
Vue.config.productionTip = false

import Home from './components/routes/Home.vue'
import ContactUS from './components/routes/ContactUS.vue'
import FAQ from './components/routes/FAQ.vue';
import Blog from './components/routes/Blog.vue';
import Post from './components/routes/Post.vue';
import Pricing from './components/routes/Pricing.vue';
import Download from './components/routes/Download.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/contact-us', component: ContactUS },
  { path: '/faq', component: FAQ },
  { path: '/blog', component: Blog },
  { path: '/blog/:id', component: Post },
  { path: '/pricing', component: Pricing },
  { path: '/download', component: Download }
];

Vue.use(VueRouter)
const router = new VueRouter({ routes,  mode: 'history'});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
