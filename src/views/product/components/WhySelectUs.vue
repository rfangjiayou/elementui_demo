<template>
  <div class="why-select-us">
    <div class="line-title">
      <span>为什么选择360信创</span>
    </div>
    <div class="why-select-us-content"></div>
  </div>
</template>

<script>
export default {
	name: 'WhySelectUs',
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.why-select-us {
  margin-top: 50px;
  .line-title span:after {
    left: 52px;
  }
  &-content {
    height: 300px;
    background: $--color-main-background;
  }
}
</style>
