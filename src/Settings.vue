<template>
	<Modal>
		<div class="layout">
			<Menu class="menu" />
			<router-view class="content"></router-view>
		</div>
	</Modal>
</template>

<script>
import Modal from './Modal.vue';
import Menu from './Menu.vue';

export default {
	components: {
		Modal,
		Menu
	}
};
</script>

<style lang="scss">
// TODO part of the modal?
.layout {
	display: flex;
	width: 100%;
	height: 100%;
}

// TODO maybe different name
.menu {
	width: 35%;
	height: 100%;
}

.content {
	width: 65%;
	// TODO the old version
	// padding: 0 12px;
	padding: 16px 12px;
}

</style>
