<template>
	<div class="menu">
		<div>
			<div class="menu__list">
				<span class="headline">User settings</span>
				<ul>
					<router-link tag="li" :to='{ path: "my-account" }'>
						My account
					</router-link>
					<router-link tag="li" :to='{ path: "privacy-and-safety" }'>
						Privacy & Safety
					</router-link>
				</ul>
			</div>
			<div class="menu__list">
				<span class="headline">App settings</span>
				<ul>
					<router-link tag="li" :to='{ path: "notifications" }'>
						Notifications
    			</router-link>
					<router-link tag="li" :to='{ path: "appearance" }'>
						Appearance
					</router-link>
				</ul>
				<hr>
				<ul>
					<router-link tag="li" :to='{ path: "changelog" }'>
						Changelog
					</router-link>
					<router-link tag="li" :to='{ path: "logout" }'>
						Log Out
					</router-link>
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
	display: flex;
	justify-content: flex-end;
	padding: 16px 8px;
}

span {
	height: 32px;
}

.menu__list {
	padding-bottom: 16px;
}

li {
	display: flex;
	align-items: center;
	width: 174px;
	height: 34px;
	padding: 0 8px;
	// TODO rem?
	font-size: 14px;
	border-radius: 4px;
	cursor: pointer;

	&.active {
		font-weight: bold;
	}
}

hr {
	display: block;
	margin: 16px auto;
	width: calc(100% - 14px);
	border: 0;
	height: 0;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.headline {
	display: flex;
	align-items: center;
	padding: 0 8px;
	text-transform: uppercase;
	color: #7a7a7a;
	font-size: 14px;
}
</style>
