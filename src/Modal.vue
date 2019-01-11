<template >
	<div class="modal">
		<slot></slot>
		<router-link class="close-button" :to="{ path: '/' }">
			<!-- Unchanged icon was used from https://fontawesome.com/icons/times?style=solid -->
			<!-- License: https://fontawesome.com/license -->
			<svg aria-hidden="true" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path v-bind:fill="iconColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
			<!-- <img class="icon" src="./assets/times-solid.svg" alt="Close icon"> -->
		</router-link>
	</div>
</template>

<script>
import eventBus from './eventBus';

export default {
	data() {
		return {
			iconColor: '#363636'
		}
	},
	mounted() {
		eventBus.$on('updateTheme', (themeName) => {
			// TODO is it nice?
			// TODO use configuration
			if (themeName === 'dark') {
				this.iconColor = '#fff';
			} else {
				this.iconColor = '#363636';
			}
		});
		// TODO listen for ESC pressed
  }
};
</script>

<style style="scss" scoped>
	.modal {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
		background-color: white;
	}

	.close-button {
		position: absolute;
		right: 40px;
		top: 24px;
		width: 40px;
		height: 40px;
		background-color: #ccc;
		border-radius: 50%;
		cursor: pointer;

		/* TODO use icon instead */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.fa-times {
		width: 10px;
	}
</style>
