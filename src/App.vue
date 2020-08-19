<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {}
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
