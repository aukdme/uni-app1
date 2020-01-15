<template>
	<page-container1 title="我的成员">
		<number-detail :list="list"/>
	</page-container1>
</template>

<script>
import PageContainer1 from '../../../components/page-container1.vue'
import NumberDetail from './number-detail.vue'
export default {
	components: {
		PageContainer1,
		NumberDetail
	},
	data() {
		return {
			list: [
				{name: '赵闪闪',phone: '13800000000',target: 120,completed: 11},
				{name: '老王',phone: '13800000000',target: 220,completed: 22}
			]
		}
	},
	methods: {
		onCall(phone) {
			uni.makePhoneCall({
					phoneNumber: phone
			})
		}
	}
}
</script>

<style lang="scss">
.number-detail {
	.detail {
		.extra {
			color: #333 !important;
		}
		.data .text2 {
			color: #333;
		}
	}
}
</style>
