<template>
	<div :class="['theme--' + activeTheme]">
		<router-link :to="{ path: '/settings/appearance' }">Open appearance settings</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
import eventBus from './eventBus';

export default {
	data() {
		return {
			activeTheme: window.localStorage.getItem('groupincome-theme') || 'blue'
		};
	},
	mounted() {
		eventBus.$on('updateTheme', (themeName) => {
			this.activeTheme = themeName;
			window.localStorage.setItem('groupincome-theme', themeName);
		});
	}
};
</script>

<style lang="scss">
@import './themes.scss';

* {
  padding: 0;
  margin: 0;
	box-sizing: border-box;
	font-family: 'Source Sans Pro', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
	margin: 8px 12px 24px;
	letter-spacing: -0.4px;
}

h4 {
	margin: 8px 12px 0px;
	font-size: 14px;
}

p {
	margin: 8px 12px 24px;
	font-size: 14px;
}

ul {
  list-style-type: none;
}
</style>
