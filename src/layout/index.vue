<template>
	<el-scrollbar class="layout">
        <Header />
		<div class="main-container">
            <router-view/>
        </div>
        <Footer />
	</el-scrollbar>
</template>

<script>
import Header from './header'
import Footer from './footer'

export default {
	data() {
		return {

		}
	},
	components: {
		Header,
        Footer
	}
}
</script>

<style lang="scss" scoped>
.layout{ 
    height: 100%;
	.main-container {
        margin-top: 60px;
        padding: 0;
        height: 100%;
        // min-width: 1400px;
    }
}
</style>