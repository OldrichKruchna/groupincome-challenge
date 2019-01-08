<template>
	<div class="menu__wrapper">
		<div class="menu">
			<div class="menu__list">
				<span class="headline">User settings</span>
				<ul>
					<li>My account</li>
					<li>Privacy & Safety</li>
				</ul>
			</div>
			<div class="menu__list">
				<span class="headline">App settings</span>
				<ul>
					<li>Notifications</li>
					<li class="active">Appearance</li>
				</ul>
				<hr>
				<ul>
					<li>Changelog</li>
					<li>Log Out</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.menu {
	&__wrapper {
		display: flex;
		justify-content: flex-end;
		width: 35%;
		height: 100%;
		padding: 16px 8px;
	}
}

span {
	height: 32px;
}

.menu__list {
	padding-bottom: 16px;
}

li {
	height: 32px;
	width: 160px;
	display: flex;
	align-items: center;
	padding: 0 8px;
	border-radius: 4px;

	&.active {
		background-color: #5DC8F0;
		color: white;
	}
}

hr {
	display: block;
	margin: 16px auto;
	width: calc(100% - 16px);
}

.headline {
	display: flex;
	align-items: center;
	padding: 0 8px;
	text-transform: uppercase;
	// TODO color fix
	color: grey;
}
</style>
