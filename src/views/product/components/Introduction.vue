<template>
    <div class="introduction">
        <div class="line-title">
            <span>产品介绍</span>
        </div>
        <Content>
             <template v-slot:top>
                <div class="introduction-content">
                    <el-image :src="src" class="introduction-content-image" style="margin-right: 20px"></el-image>
                    <Card class="introduction-content-card close-to-right"></Card>
                </div>
                <div class="introduction-content" style="padding-top: 60px">
                    <Card class="introduction-content-card" style="margin-right: 20px"></Card>
                    <el-image :src="src" class="introduction-content-image close-to-right"></el-image>
                </div>
            </template>
             <template v-slot:below>
                <div class="introduction-content">
                    <el-image :src="src" class="introduction-content-image" style="margin-right: 20px"></el-image>
                    <Card class="introduction-content-card close-to-right"></Card>
                </div>
                <div class="introduction-content" style="padding-top: 60px">
                    <Card class="introduction-content-card" style="margin-right: 20px"></Card>
                    <el-image :src="src" class="introduction-content-image close-to-right"></el-image>
                </div>
            </template>
        </Content>
    </div>
</template>

<script>
import Content from '@/components/content'
import Card from './Card'

export default {
    components: {
        Content,
        Card
    },
    data() {
        return {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        }
    }
}
</script>

<style lang="scss" scoped>
.introduction {
    &-content {
        max-width: $--main-max-width;
        margin: auto;
        background: #ccc;
        display: flex;
        &-image {
            width: 600px;
        }
        .close-to-right {
            margin-left: auto;
        }
    }
}
</style>
