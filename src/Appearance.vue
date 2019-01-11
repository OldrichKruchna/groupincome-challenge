<template>
	<div>
		<h2>Appearance</h2>
		<h3>Theme</h3>
		<div class="theme-list">
			<div class="theme-list__item" v-for="theme in themes" :key="theme.name">
				<img class="theme-list__image" :src="theme.iconUrl" :alt="theme.name + ' theme preview icon'" v-on:click="selectTheme(theme.name)">
				<input type="radio" v-bind:id="'theme-' + theme.name" :value="theme.name" v-model="activeTheme" v-on:change="selectTheme(theme.name)">
				<label v-bind:for="'theme-' + theme.name">
					{{ theme.name }}
				</label>
				<br>
			</div>
		</div>

		<h3>Text settings</h3>

		<!-- TODO slider -->

		<h4>Text size preview</h4>
		<p>Group Income (n) is an efficient, fair, decentralized Basic Income system for you and your friends.</p>
	</div>
</template>

<script>
import eventBus from './eventBus';

const themes = [{
		name: 'blue',
		iconUrl: require('./assets/blue-theme-preview.svg')
	}, {
		name: 'green',
		iconUrl: require('./assets/green-theme-preview.svg')
	}, {
		name: 'orange',
		iconUrl: require('./assets/orange-theme-preview.svg')
	}, {
		name: 'silver',
		iconUrl: require('./assets/silver-theme-preview.svg')
	}, {
		name: 'dark',
		iconUrl: require('./assets/dark-theme-preview.svg')
	}
];

export default {
	data() {
		return {
			themes,
			activeTheme: window.localStorage.getItem('groupincome-theme') || 'blue',
		}
	},
	methods: {
		selectTheme(themeName) {
			this.activeTheme = themeName;
			eventBus.$emit('updateTheme', themeName);
		}
	}
}
</script>

<style lang="scss" scoped>
.theme-list {
	display: flex;
	flex-wrap: wrap;
	max-width: 420px;

	&__item {
		margin: 0 12px 12px;

		input {
			margin: 20px 2px;
		}

		label {
			text-transform: capitalize;
			font-size: 14px;
			margin-left: 3px;
		}
	}

	&__image {
		display: block;
	}
}
</style>
