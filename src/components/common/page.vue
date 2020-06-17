<template>
    <div class="common-page-wrap">
        <el-scrollbar class="common-page-scroll">
            <div class="common-page-content">
                <slot></slot>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
export default {
    name: 'V-Page',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.common-page-wrap {
    background-color: $--color-main-background;
    .common-page-scroll {
        .common-page-content {
            min-width: $--variable-main-min-width;
            height: calc(100vh - 60px);
            padding: 20px;
        }
    }
}
</style>