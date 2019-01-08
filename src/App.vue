<template>
	<div>
		<button type="button" name="button" v-on:click="openModal()">Open the modal</button>
		<Modal>
			<div class="layout">
				<!-- TODO maybe to remove the Menu component, put it here, then set a width for the Content -->
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
	align-items: center;
	width: 100%;
	height: 100%;
}

* {
	// background-color: rgba(0,0,0,0.1) !important;
	// background: green;
}


</style>
