<template>
    <div class="other-service">
        <div class="line-title">
            <span>其他服务</span>
        </div>
        <div class="other-service-content"></div>
    </div>
</template>

<script>
export default {
    name: 'OtherService',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.other-service {
    margin-top: 50px;
    &-content {
        height: 300px;
        background: $--color-main-background;
    }
}
</style>
