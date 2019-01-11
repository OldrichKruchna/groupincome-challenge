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

// themes' configuration
.theme--blue {
	li.active {
		color: #fff;
    background-color: #79c6ec;
	}

	.menu {
		background-color: #e3f3fb;
	}
}

.theme--green {
	li.active {
		color: #fff;
    background-color: #99ba3c;
	}

	.menu {
		background-color: #f5f8e9;
	}
}

.theme--orange {
	li.active {
		color: #fff;
    background-color: #ea9737;
	}

	.menu {
		background-color: #fcf4e7;
	}
}

.theme--silver {
	li.active {
		color: #fff;
    background-color: #ea9737;
	}

	.menu {
		background-color: #f5f5f5;
	}
}

.theme--dark {
	color: #fff;

	li.active {
    background-color: #79c6ec;
	}

	.menu {
		background-color: #363636;
	}

	.content {
		background-color: #4e4e4e;
	}

	.modal .close-button {
		background-color: #565656;
	}
}
</style>
