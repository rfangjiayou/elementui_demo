<template>
    <div class="carousel">
        <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data () {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.carousel {
    background: #ccc;
}
</style>
