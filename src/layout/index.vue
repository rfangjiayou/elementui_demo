<template>
	<el-scrollbar class="layout">
        <HeaderLayout />
		<div class="main-container">
            <router-view/>
        </div>
        <Footer />
	</el-scrollbar>
</template>

<script>
import HeaderLayout from './header'
import Footer from './footer'

export default {
	data() {
		return {

		}
	},
	components: {
		HeaderLayout,
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
</style>