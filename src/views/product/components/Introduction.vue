<template>
    <div class="introduction">
        <div class="line-title">
            <span>产品介绍</span>
        </div>
        <Content>
            <template v-slot:top>
                <div class="introduction-content bg-left">
                    <el-image
                        :src="src"
                        class="introduction-content-image content-top"
                    ></el-image>
                    <Card
                        class="introduction-content-card close-to-right"
                    ></Card>
                </div>
                <div class="introduction-content bg-left content-bottom">
                    <Card
                        class="introduction-content-card"
                        style="margin-right: 20px"
                    ></Card>
                    <el-image
                        :src="src"
                        class="introduction-content-image close-to-right"
                    ></el-image>
                </div>
            </template>
            <template v-slot:below>
                <div class="introduction-content bg-right">
                    <el-image
                        :src="src"
                        class="introduction-content-image content-top"
                    ></el-image>
                    <Card
                        class="introduction-content-card close-to-right"
                    ></Card>
                </div>
                <div class="introduction-content bg-right content-bottom">
                    <Card
                        class="introduction-content-card"
                        style="margin-right: 20px"
                    ></Card>
                    <el-image
                        :src="src"
                        class="introduction-content-image close-to-right"
                    ></el-image>
                </div>
            </template>
        </Content>
    </div>
</template>

<script>
import Content from '@/components/content';
import Card from './Card';

export default {
    name: 'Introduction',
    components: {
        Content,
        Card
    },
    data () {
        return {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        };
    }
};
</script>

<style lang="scss" scoped>
.introduction {
    &-content {
        max-width: $--main-max-width;
        margin: auto;
        background: $--color-main-background;
        display: flex;
        &-image {
            width: 600px;
        }
        .close-to-right {
            margin-left: auto;
        }
        .content-top {
            margin-right: 20px;
        }
    }
    .content-bottom {
        padding-top: 60px;
    }
    @media screen and (max-width: 1200px) {
        .bg-left {
            padding-left: px2vw(50, 1200);
            margin-right: px2vw(50, 1200);
        }
        .bg-right {
            padding-right: px2vw(50, 1200);
            margin-left: px2vw(50, 1200);
        }
    }
}
</style>
