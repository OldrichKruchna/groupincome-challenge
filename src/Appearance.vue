<template>
	<!-- TODO shouldn't be content dynamic? -->
	<div class="content">
		<h2>Appearance</h2>
		<h3>Theme</h3>
		<div class="theme-list">
			<div v-for="theme in themes" :key="theme.name">
				<img :src="theme.iconUrl" :alt="theme.name + ' theme preview icon'">
				<input type="radio" :id="'theme-' + theme.name" :value="theme.name" v-model="activeTheme">
				<label for="'theme-' + theme.name">{{ theme.name }}</label>
				<br>
			</div>
		</div>

		<ul class"theme-list">
			<li>
				<span>Blue</span>
			</li>
			<li>
				<span>Green</span>
			</li>
			<li>
				<span>Orange</span>
			</li>
			<li>
				<span>Silver</span>
			</li>
			<li>
				<span>Dark</span>
			</li>
		</ul>
		<h3>Text settings</h3>

		<!-- TODO slider -->

		<h4>Text size preview</h4>
		<p>Group Income (n) is an efficient, fair, decentralized Basic Income system for you and your friends.</p>
	</div>
</template>

<script>
const themes = [{
		name: 'default',
		iconUrl: require('./assets/default-theme-preview.svg')
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
			// Maybe move the themes somewhere else, global configuration?
			themes,
			// TODO add default one, move this to the App
			activeTheme: themes[0],
		}
	},
}
</script>

<style lang="scss" scoped>
	// TODO count that there is some display: flex in the parent
	.content {
		width: 65%;
	}
</style>
