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
			activeTheme: window.activeTheme
		};
	},
	mounted() {
		eventBus.$on('updateTheme', (themeName) => {
			// TODO shouldn't be load it just locally
			// TODO is it nice?
			window.activeTheme = themeName;
			this.activeTheme = themeName;
		});
	}
};
</script>

<style lang="scss">

* {
  padding: 0;
  margin: 0;
	box-sizing: border-box;
}

#app {
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
	// TODO the old version
	// margin: 24px 12px;
	margin: 8px 12px 24px;
	letter-spacing: -0.4px;
}

ul {
  list-style-type: none;
}

// TODO part of the modal?
.layout {
	display: flex;
	justify-content: center;
	// align-items: center;
	width: 100%;
	height: 100%;
}

.theme-default {
	a {
		color: pink;
	}
}

// TODO move this into sass independed file
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
