<template>
    <div class="side" :class="{'togger-menu': leftMenuCollapse}">
        <div class="project-name" :class="{'togger-project-name': leftMenuCollapse}">{{leftMenuCollapse ? 'Demo' : '后台管理Demo'}}</div>
        <el-scrollbar class="left-menu-scroll">
            <el-menu
                class="left-menu"
                background-color="#30323a"
                text-color="#fff"
                :collapse="leftMenuCollapse"
                :collapse-transition="false"
                :default-openeds="defaultOpeneds"
                :default-active="$route.name"
                router>
                <template v-for="item in menuList">
                    <el-submenu 
                        v-if="item.children"
                        :key="item.name"
                        :index="item.name">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>{{item.title}}</span>
                        </template>
                        <template v-for="submenu in item.children">
                            <el-menu-item
                                :key="submenu.name"
                                :index="submenu.name">
                                <i class="el-icon-menu"></i>
                                <span slot="title">{{submenu.title}}</span>
                            </el-menu-item>
                        </template>
                    </el-submenu>
                    <el-menu-item
                        v-else
                        :key="item.name"
                        :index="item.name">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            defaultOpeneds: ['test2'],
            menuList: [
                { name: 'test1', title: 'test1', icon: '' },
                { name: 'test2', title: 'test2', icon: '', children: [
                        { name: 'test2-1', title: 'test2-1', icon: '' },
                        { name: 'test2-2', title: 'test2-2', icon: '' }
                    ] 
                },
                { name: 'test3', title: 'test3', icon: '' },
                { name: 'test4', title: 'test4', icon: '' }
            ]
        }
    },
    computed: {
        ...mapState('leftMenu', ['leftMenuCollapse'])
    }
}
</script>

<style lang="scss" scoped>
.side {
    width: 200px;
    .project-name {
        height: 60px;
        line-height: 60px;
        text-align: center;
        background-color: #14151b;
        color: #fff;
    }
    .togger-project-name {
        width: 63px;
    }
    .left-menu-scroll {
        width: 201px;
    }
    .left-menu {
        height: 100vh;
        padding-top: 20px;
    }
}
.togger-menu {
    width: 64px;
}
</style>