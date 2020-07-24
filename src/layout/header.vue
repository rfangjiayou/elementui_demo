<template>
    <div class="header-wrap">
        <div class="header">
            <div class="header-logo">
                <img src="" alt="logo">
            </div>
            <ul class="header-menu">
                <li 
                    v-for="item in menu"
                    :key="item.name"
                    class="header-menu-item"
                    @mouseenter="item.menuItemShow = true"
                    @mouseleave="item.menuItemShow = false">
                    <router-link 
                        class="menu-text"
                        active-class="menu-active"
                        :to="item.path">{{item.title}}</router-link>
                    <template
                        v-if="item.children && item.children.length">
                        <transition name="el-zoom-in-top">
                            <div class="menu-child" v-show="item.menuItemShow">
                                <ul class="menu-child-row">
                                    <li
                                        v-for="(child, index) in item.children"
                                        :key="index"
                                        class="menu-child-row-item">
                                        <div class="menu-child-subtitle">{{child.menuItemTitle.name}}</div>
                                        <ul class="menu-child-column">
                                            <li
                                                v-for="menuItem in child.menuItemArray"
                                                :key="menuItem.name">
                                                <router-link 
                                                    class="menu-text"
                                                    active-class="menu-active"
                                                    :to="menuItem.path">{{menuItem.title}}</router-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </template>
                </li>
            </ul>
            <div class="header-setting">
                <el-button type="info" class="submit-bug">提交漏洞</el-button>
                <el-button type="text" class="login">登录</el-button>
                <el-button type="text" class="setup">注册</el-button>
                <el-dropdown class="header-setting-dropdown">
                    <i class="el-icon-more"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>项目大厅</el-dropdown-item>
                        <el-dropdown-item>企业服务</el-dropdown-item>
                        <el-dropdown-item>白帽服务</el-dropdown-item>
                        <el-dropdown-item>排行榜</el-dropdown-item>
                        <el-dropdown-item>积分商城</el-dropdown-item>
                        <el-dropdown-item>帮助中心</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { title: '项目大厅', name: 'home0', path: '/home' , children: [], menuItemShow: false },
                { 
                    title: '企业服务', 
                    name: 'home1', 
                    path: '/home1' ,
                    children: [
                        {
                            menuItemTitle: {
                                name: "产品服务",
                            },
                            menuItemArray: [
                                { title: '白帽服务1', name: 'baimao1', path: '/home1/home1-1' },
                                { title: '白帽服务2', name: 'baimao2', path: '/home1/home1-2' },
                                { title: '白帽服务3', name: 'baimao3', path: '/home1/home1-3' },
                                { title: '白帽服务4', name: 'baimao4', path: '/home1/home1-4' },
                            ]
                        },
                        {
                            menuItemTitle: {
                                name: "产品支撑",
                            },
                            menuItemArray: [
                                { title: '白帽服务12', name: 'baimao12', path: '/home1/home1-1-1' },
                                { title: '白帽服务22', name: 'baimao22', path: '/home1/home1-2-1' },
                                { title: '白帽服务32', name: 'baimao32', path: '/home1/home1-3-1' },
                                { title: '白帽服务42', name: 'baimao42', path: '/home1/home1-4-1' },
                            ]
                        }
                    ],
                    menuItemShow: false
                },
                { title: '白帽服务', name: 'home2', path: '/home2' , children: [], menuItemShow: false },
                { title: '排行榜', name: 'home3', path: '/home3' , children: [], menuItemShow: false },
                { 
                    title: '积分商城', 
                    name: 'home4',
                    path: '/home4',
                    children: [
                        {
                            menuItemTitle: {
                                name: "产品服务",
                            },
                            menuItemArray: [
                                { title: '白帽服务1', name: 'baimao13', path: '' },
                                { title: '白帽服务2', name: 'baimao23', path: '' },
                                { title: '白帽服务3', name: 'baimao33', path: '' },
                                { title: '白帽服务4', name: 'baimao43', path: '' },
                            ]
                        },
                        {
                            menuItemTitle: {
                                name: "产品支撑",
                            },
                            menuItemArray: [
                                { title: '白帽服务12', name: 'baimao123', path: '' },
                                { title: '白帽服务22', name: 'baimao223', path: '' },
                                { title: '白帽服务32', name: 'baimao323', path: '' },
                                { title: '白帽服务42', name: 'baimao423', path: '' },
                            ]
                        }
                    ], 
                    menuItemShow: false },
                { title: '帮助中心', name: 'home5', path: '/home5' , children: [], menuItemShow: false },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.header-wrap {
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    .header {
        @include main-width;
        // max-width: 1400px;
        // min-width: 1100px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        &-logo {
            img {
                height: 60px;
            }
        }
        &-menu {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            width: 100%;
            &-item {
                height: 60px;
                line-height: 60px;
                padding: 0 20px;
                position:relative;
                .menu-child {
                    position: absolute;
                    top: 60px;
                    padding: 20px 0;
                    width: 100%;
                    background: #fff;
                    display: table;
                    &-row {
                        display: table-row;
                        &-item {
                            display: table-cell;
                            white-space: nowrap;
                            .menu-child-subtitle {
                                font-weight: 600;
                                padding: 0 20px;
                            }
                            a {
                                text-decoration: none;
                                color: #000;
                                font-size: 14px;
                                padding: 0 20px;
                                &:hover {
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
        }
        .menu-text {
            text-decoration: none;
            color: #000;
            font-weight: 600px;
            &:hover {
                opacity: .6;
                cursor: pointer;
            }
        }
        .menu-active {
            opacity: .6;
        }
        &-setting {
            height: 60px;
            padding: 0 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            .submit-bug {
                margin-right: 30px;
            }
            &-dropdown {
                display: none;
            }
        }
    }
    @media screen and ( max-width: 1000px ) {
        .header-menu {
            display: none;
        }
        .header-setting {
            padding: 0 30px !important;
            margin-left: auto;
            &-dropdown {
                margin-left: 20px;
                display: block !important;
            }
        }
    }
}
</style>