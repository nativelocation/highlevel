import Vue from 'vue';
import 'bootstrap'

import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/index.scss';

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
