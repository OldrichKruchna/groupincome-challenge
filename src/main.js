import Vue from 'vue';

import App from './App';
import router from './router';

window.activeTheme = 'blue';
new Vue({
	template: '<App/>',
	components: { App },
	router
}).$mount('#app');
