import Vue from 'vue';

import VueRouter from 'vue-router';

// list of page components
import Settings from './Settings';
import Appearance from './Appearance';

// definition of routes
const routes = [
	{ path: '/settings', component: Settings,
		children: [
	        {
	          path: 'appearance',
	          component: Appearance
	        },
					// These are dummy components
					{
						path: 'notifications',
						component: {
					  	template: '<div><h2>Notifications</h2></div>'
						}
					},
					{
						path: 'my-account',
						component: {
							template: '<div><h2>My account</h2></div>'
						}
					},
					{
						path: 'changelog',
						component: {
							template: '<div><h2>Changelog</h2></div>'
						}
					},
					{
						path: 'logout',
						component: {
							template: '<div><h2>Log Out</h2></div>'
						}
					},
					{
						path: 'privacy-and-safety',
						component: {
							template: '<div><h2>Privacy & Safety</h2></div>'
						}
					},
					{
						path: '/settings*', redirect: '/settings/appearance'
					}
				]
		},
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
