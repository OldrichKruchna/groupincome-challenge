import Vue from 'vue';

import VueRouter from 'vue-router';

// list of page components
import Settings from './Settings';
import Appearance from './Appearance';
import Notifications from './Notifications';

// definition of routes
const routes = [
	{ path: '/settings', component: Settings,
		children: [
	        {
						// TODO rename Appearance
	          path: 'appearance',
	          component: Appearance
	        },
					{
						path: 'notifications',
						component: Notifications
					},
					{
						path: '/settings*', redirect: '/settings/appearance'
					}
				]
		},
		// TODO consider better name than Home
	{ path: '/' },
	{ path: '*', redirect: '/' }
];

Vue.use(VueRouter);

// creation of the router
const router = new VueRouter({
	linkExactActiveClass: 'active',
	routes
});

export default router;
