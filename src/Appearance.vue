<template>
	<div>
		<div class="appearance">
			<h2>Appearance</h2>
			<h3>Theme</h3>
			<div class="theme-list">
				<div class="theme-list__item" v-for="theme in themes" :key="theme.name">
					<img class="theme-list__image" :src="theme.iconUrl" :alt="theme.name + ' theme preview icon'" v-on:click="selectTheme(theme)">
					<input type="radio" v-bind:id="'theme-' + theme.name" :value="theme" v-model="activeTheme" v-on:change="selectTheme(theme)">
					<label v-bind:for="'theme-' + theme.name">
						{{ theme.name }}
					</label>
					<br>
				</div>
			</div>

			<h3>Text settings</h3>

			<div class="slider">
				<vue-slider :min="1" :max="4" v-model="fontSize" :tooltip="false"
					:slider-style="{ 'backgroundColor': activeTheme.highlightColor }"
					:process-style="{ 'backgroundColor': activeTheme.highlightColor }"
					:piecewiseLabel="true"
					:data="['Aa', 'Aa', 'Aa', 'Aa']">
					<template slot="label" slot-scope="{ label }">
					  <span :class="['slider__label']">
							<div class="ticker"></div>
					    {{ label }}
					  </span>
					</template>
				</vue-slider>
			</div>

			<h4>Text size preview</h4>
			<p>Group Income (n) is an efficient, fair, decentralized Basic Income system for you and your friends.</p>
		</div>
	</div>
</template>

<script>
import vueSlider from 'vue-slider-component';

import eventBus from './eventBus';
// https://til.hashrocket.com/posts/sxbrscjuqu-share-scss-variables-with-javascript
import themeVariables from './themes.scss';

const themes = [{
		name: 'blue',
		iconUrl: require('./assets/blue-theme-preview.svg'),
		highlightColor: themeVariables.blueHighlight
	}, {
		name: 'green',
		iconUrl: require('./assets/green-theme-preview.svg'),
		highlightColor: themeVariables.greenHighlight
	}, {
		name: 'orange',
		iconUrl: require('./assets/orange-theme-preview.svg'),
		highlightColor: themeVariables.orangeHighlight
	}, {
		name: 'silver',
		iconUrl: require('./assets/silver-theme-preview.svg'),
		highlightColor: themeVariables.silverHighlight
	}, {
		name: 'dark',
		iconUrl: require('./assets/dark-theme-preview.svg'),
		highlightColor: themeVariables.darkHighlight
	}
];

const activeThemeName = window.localStorage.getItem('groupincome-theme') || 'blue';
const activeTheme = themes.find(theme => theme.name === activeThemeName);

export default {
	components: {
		vueSlider
	},
	data() {
		return {
			themes,
			activeTheme,
			fontSize: 1
		}
	},
	methods: {
		selectTheme(theme) {
			this.activeTheme = theme;
			eventBus.$emit('updateTheme', theme.name);
		}
	}
}
</script>

<style lang="scss" scoped>
.appearance {
	max-width: 500px;
}

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


// override styles of the vue-slider
/deep/ .vue-slider-piecewise-item {
	&:nth-of-type(1) {
		font-size: 12px;
	}

	&:nth-of-type(2) {
		font-size: 14px;
	}

	&:nth-of-type(3) {
		font-size: 16px;
	}

	&:nth-of-type(4) {
		font-size: 18px;
	}
}

.slider {
	padding: 0px 6px;
	margin-bottom: 50px;
	max-width: 475px;

	.ticker {
		display: block;
		width: 2px;
		height: 16px;
		background-color: #c4c4c4;
		margin-top: -6px;
		margin-left: 2px;
	}
}
</style>
