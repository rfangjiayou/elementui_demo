<template>
    <div class="content">
        <div class="content-top">
            <slot name="top"></slot>
        </div>
        <div class="content-below">
            <slot name="below"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.content {
    &-top {
        background: linear-gradient(
            to left,
            #fff 50%,
            $--color-main-background 50%
        );
    }
    &-below {
        margin-top: 60px;
        background: linear-gradient(
            to left,
            $--color-main-background 50%,
            #fff 50%
        );
    }
}
</style>
