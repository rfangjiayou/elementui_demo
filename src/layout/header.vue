<template>
    <div class="header-wrap">
        <div class="header">
            <div class="header-logo">
                <img src="" alt="logo">
            </div>
            <nav class="header-menu">
                <a class="foundation" @click="$route.push({ name: 'foundation' })">
                    <span class="foundation-star"></span>
                    <span class="foundation-text">安全发展基金会</span>
                </a>
                <div
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
                </div>
            </nav>
            <div class="header-setting">
                <el-button type="info" class="submit" @click="submit">申请体验</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { title: '产品', name: 'product', path: '/product' , children: [], menuItemShow: false },
                { 
                    title: '解决方案', 
                    name: 'solution', 
                    path: '/solution' ,
                    children: [
                        {
                            menuItemTitle: {
                                name: "产品服务",
                            },
                            menuItemArray: [
                                { title: '白帽服务1', name: 'baimao1', path: '/solution/home1-1' },
                                { title: '白帽服务2', name: 'baimao2', path: '/solution/home1-2' },
                                { title: '白帽服务3', name: 'baimao3', path: '/solution/home1-3' },
                                { title: '白帽服务4', name: 'baimao4', path: '/solution/home1-4' },
                            ]
                        },
                        {
                            menuItemTitle: {
                                name: "产品支撑",
                            },
                            menuItemArray: [
                                { title: '白帽服务12', name: 'baimao12', path: '/solution/home1-1-1' },
                                { title: '白帽服务22', name: 'baimao22', path: '/solution/home1-2-1' },
                                { title: '白帽服务32', name: 'baimao32', path: '/solution/home1-3-1' },
                                { title: '白帽服务42', name: 'baimao42', path: '/solution/home1-4-1' },
                            ]
                        }
                    ],
                    menuItemShow: false
                },
                { title: '合作与生态', name: 'ecology', path: '/ecology' , children: [], menuItemShow: false },
                { title: '帮助中心', name: 'help', path: '/help' , children: [], menuItemShow: false },
                { title: '关于我们', name: 'about', path: '/about' , children: [], menuItemShow: false },
            ]
        }
    },
    methods: {
        submit() {
            document.querySelector('#xxx4')?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.header-wrap {
    height: $--header-height;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background: $--color-header;
    .header {
        // @include main-width;
        max-width: $--main-max-width;
        width: 100%;
        margin: 0 auto;
        display: flex;
        &-logo {
            img {
                height: 60px;
            }
        }
        .foundation {
            margin-right: 50px;
            &-star {
                margin-right: 5px;
                background: url(//sensorsdata.cn/assets/img/star_0bc1751.svg) no-repeat 0 center;
                display: inline-block;
                width: 16px;
                height: 16px;
                -webkit-animation: bigTosmall ease .5s infinite;
                animation: bigTosmall ease .5s infinite;

                @keyframes bigTosmall {
                    0% {
                        transform: scale(.8);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
            }
            &:hover {
                .foundation-text {
                    opacity: .6;
                }
                cursor: pointer;
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
                    background: $--color-header;
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
            line-height: 60px;
            padding: 0 20px;
            float: right;
            .submit {
                @include primary-btn
            }
        }
    }
    @media screen and ( max-width: 1000px ) {
        .header-menu {
            justify-content: flex-start;
            &-item {
                display: none;
            }
        }
        .header-setting {
        }
    }
}
</style>