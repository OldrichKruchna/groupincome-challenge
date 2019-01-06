<template >
	<div class="modal" v-if="open">
		<slot></slot>
		<div class="close-button" v-on:click="close()">x</div>
	</div>
</template>

<script>
import eventBus from './eventBus';

export default {
	data() {
		return {
			open: false
		}
	},
	mounted() {
    eventBus.$on('openModal', () => {
			this.open = true;
    });

		// listen for ESC pressed
  },
	methods: {
		close() {
			this.open = false;
		}
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
	}

	.close-button {
		position: absolute;
		right: 40px;
		top: 20px;
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
</style>
