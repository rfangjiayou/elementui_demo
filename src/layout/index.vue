<template>
	<div class="layout">
		<el-aside width="200px">
			<SideLayout />
		</el-aside>
		<div class="right-container">
			<HeaderLayout />
			<el-main class="main-container">
				<router-view/>
			</el-main>
		</div>
	</div>
</template>

<script>
import HeaderLayout from './header'
import SideLayout from './side'

export default {
	data() {
		return {

		}
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
	}
}
</style>