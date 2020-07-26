<template>
  <div class="card"></div>
</template>

<script>
export default {
	name: "Card",
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.card {
  padding: 50px;
  background: #fff;
  border: 1px solid red;
  width: 550px;

  @media screen and (max-width: 1000px) {
    width: px2vw(550, 1000);
  }
}
</style>
