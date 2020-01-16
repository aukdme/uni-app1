<template>
	<page-container1
		bg-color="bg-f0"
		:is-back="isBack"
		title="申请代理"
		ref="pageContainer1">
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
	onLoad() {
		const cuCustom = this.$refs.pageContainer1.$children.find(item => 'cu-custom' === item.$options.name)
		cuCustom.BackPage = () => {
			uni.switchTab({
				url: '../my/my',
				success: () => {
					uni.showTabBar()
				}
			})
		}
	},
	onTabItemTap() {
		this.isBack = true
		uni.hideTabBar()
	}
}
</script>

<style lang="scss">

</style>
