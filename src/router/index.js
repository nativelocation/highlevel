'use strict';

import Vue from 'vue';
import Router from 'vue-router';
import Home from '../containers/Home';

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: __dirname,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home'
		}
	]
})

export default router
