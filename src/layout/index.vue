<template>
	<el-scrollbar class="layout">
        <HeaderLayout />
		<div class="main-container">
            <router-view/>
        </div>
        <Footer />
	</el-scrollbar>
	<!-- <div class="layout">
		<el-aside width="200px">
			<SideLayout />
		</el-aside>
		<div class="right-container">
			<HeaderLayout />
			<el-main class="main-container">
				<router-view/>
			</el-main>
		</div>
	</div> -->
</template>

<script>
import HeaderLayout from './header'
// import SideLayout from './side'
import Footer from './footer'

export default {
	data() {
		return {

		}
	},
	components: {
		HeaderLayout,
        // SideLayout,
        Footer
	}
}
</script>

<style lang="scss" scoped>
.layout{ 
    height: 100%;
	.main-container {
        background-color: #ccc;
        margin-top: 60px;
        padding: 0;
        height: 100vh;
        min-width: 1400px;
    }
}
// .layout{ 
// 	display: flex;
// 	.right-container {
// 		width: 100%;
// 		.main-container {
// 			height: 100%;
// 			padding: 0;
// 			width: calc(100vw - 200px);
// 		}
// 	}
// }
</style>