<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { ERROR_PAGES, ERROR_TYPE_MAP, NOT_SIGN_IN_STATUS_CODE } from '@/constant'
import { Bus } from '@/utils'

export default {
    name: 'App',
    components: {},
    methods: {
        handleErrno() {
            // global error handling
            Bus.$on(ERROR_TYPE_MAP.errno, (errno, msg) => {
                this.$message({
                    type: 'error',
                    message: msg ?? '抱歉，遇到了一些错误，请稍后再试'
                })
            })
        },
        handleStatusCode() {
            // http status error handling
            Bus.$on(ERROR_TYPE_MAP.status, (status, msg) => {
                if (status === NOT_SIGN_IN_STATUS_CODE) {
                    this.$message({
                        type: 'error',
                        message: '需要重新登录'
                    })
                    return this.$router.push('/')
                }
                if (ERROR_PAGES.includes(status)) {
                    this.$message({
                        type: 'error',
                        message: '抱歉，遇到了一些错误，请稍后再试'
                    })
                    return
                    // return this.$router.push(`/${status}`);
                }
                // fallback
                Bus.$emit(ERROR_TYPE_MAP.errno, '', msg)
            })
        }
        // updateIsMobile() {
        //     const app = document.querySelector('#app')
        //     const width = app.offsetWidth
        //     if (width <= 768) {
        //         this.$store.commit('updateIsMobile', true)
        //         return true
        //     } else {
        //         this.$store.commit('updateIsMobile', false)
        //         return false
        //     }
        // }
    },
    created() {
        this.handleErrno()
        this.handleStatusCode()
    },
    mounted() {
        // this.updateIsMobile()
        // window.addEventListener('resize', this.updateIsMobile)
    },
    beforeDestroy() {
        // window.removeEventListener('resize', this.updateIsMobile)
        Bus.$off(ERROR_TYPE_MAP.errno)
        Bus.$off(ERROR_TYPE_MAP.status)
    }
}
</script>

<style lang="scss" scoped>
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 14px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
