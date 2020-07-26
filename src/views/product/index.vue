<template>
    <div class="product">
        <Carousel></Carousel>
        <Introduction></Introduction>
        <OtherService></OtherService>
        <WhySelectUs></WhySelectUs>
    </div>
</template>

<script>
import Carousel from './components/Carousel';
import Introduction from './components/Introduction';
import OtherService from './components/OtherService';
import WhySelectUs from './components/WhySelectUs';

export default {
    name: 'Product',
    components: {
        Carousel,
        Introduction,
        OtherService,
        WhySelectUs
    },
    data () {
        return {};
    }
};
</script>

<style lang="scss">
@import './style/index.scss';
</style>

<style lang="scss" scoped>
.product {
    width: 100%;
    margin: auto;
}
</style>
