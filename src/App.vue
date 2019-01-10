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
			// TODO Load from the local storage
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
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}

h1, h2 {
  // font-weight: normal;
}

ul {
  list-style-type: none;
}

li {
  // display: inline-block;
  // margin: 0 10px;
}

a {
  // color: #42b983;
}

// TODO part of the modal?
.layout {
	display: flex;
	justify-content: center;
	// align-items: center;
	width: 100%;
	height: 100%;
}

* {
	// background-color: rgba(0,0,0,0.1) !important;
	// background: green;
}

.theme-default {
	a {
		color: pink;
	}
}

// TODO move this into sass independed file
.theme--default {
	li.active {
		color: #fff;
    background-color: #79c6ec;
	}

	.menu__wrapper {
		background-color: #e3f3fb;
	}
}

.theme--green {
	li.active {
		color: #fff;
    background-color: #99ba3c;
	}

	.menu__wrapper {
		background-color: #f5f8e9;
	}
}

.theme--orange {
	li.active {
		color: #fff;
    background-color: #ea9737;
	}

	.menu__wrapper {
		background-color: #fcf4e7;
	}
}

.theme--silver {
	li.active {
		color: #fff;
    background-color: #ea9737;
	}

	.menu__wrapper {
		background-color: #f5f5f5;
	}
}

.theme--dark {
	color: #fff;

	li.active {
    background-color: #79c6ec;
	}

	.menu__wrapper {
		background-color: #363636;
	}

	.content {
		background-color: #4e4e4e;
	}
}



</style>
