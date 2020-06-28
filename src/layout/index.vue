<template>
	<div class="layout">
		<SideLayout />
		<div class="right-container">
			<HeaderLayout />
			<el-main class="main-container" :class="{'togger-main-container': leftMenuCollapse}">
				<router-view/>
			</el-main>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderLayout from './header'
import SideLayout from './side'

export default {
	data() {
		return {

		}
	},
	computed: {
        ...mapState('leftMenu', ['leftMenuCollapse'])
    },
	components: {
		HeaderLayout,
		SideLayout
	}
}
</script>

<style lang="scss" scoped>
.layout{ 
	display: flex;
	.right-container {
		width: 100%;
		.main-container {
			height: 100%;
			padding: 0;
			width: calc(100vw - 200px);
		}
		.togger-main-container {
			width: calc(100vw - 64px);
		}
	}
}
</style>