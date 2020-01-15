<template>
	<page-container1
		bg-color="bg-f0"
		:is-back="isBack"
		title="申请代理">
		123
	</page-container1>
</template>

<script>
import PageContainer1 from '../../components/page-container1.vue'
export default {
	components: {
		PageContainer1
	},
	data() {
		return {
			isBack: false
		};
	},
	onReady() {
		uni.hideTabBar()
	},
	onTabItemTap() {
		this.isBack = true
		uni.hideTabBar()
	}
}
</script>

<style lang="scss">

</style>
