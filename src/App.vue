<template>
	<div>
		<button type="button" name="button" v-on:click="openModal()">Open the modal</button>
		<Modal>
			<div class="layout">
				<Menu />
				<Content />
			</div>
		</Modal>
	</div>
</template>

<script>
import eventBus from './eventBus';

import Modal from './Modal.vue';
import Menu from './Menu.vue';
import Content from './Content';

export default {
	data() {
		return {
			isModalOpen: false
		};
	},
	components: {
		Modal,
		Content,
		Menu
	},
	methods: {
		openModal() {
			eventBus.$emit('openModal');
		}
	}
};
</script>

<style lang="scss">
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
  // list-style-type: none;
  // padding: 0;
}

li {
  // display: inline-block;
  // margin: 0 10px;
}

a {
  // color: #42b983;
}

.layout {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
