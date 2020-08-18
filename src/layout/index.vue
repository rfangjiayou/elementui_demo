<template>
    <el-scrollbar class="layout">
        <Header />
        <div class="main-container">
            <router-view />
        </div>
        <Footer />
    </el-scrollbar>
</template>

<script>
import Header from '@/components/header';
import Footer from '@/components/footer';

export default {
    data () {
        return {};
    },
    components: {
        Header,
        Footer
    }
};
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;
    .main-container {
        background-color: #ccc;
        margin-top: 60px;
        padding: 0;
        // height: 100vh;
        min-width: 1400px;
    }
}
</style>
