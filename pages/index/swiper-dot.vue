<template>
	<view class="swiper-dots">
		<view 
			v-for="i of value"
			:key="i"
			:class="['dot',{'dot-active':current === i}]"></view>
	</view>
</template>

<script>
export default {
	props: {
		value: Number,
		current: Number
	}
}
</script>

<style lang="scss" scoped>
.swiper-dots {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30upx;
	.dot {
		margin: 4upx;
		width: 12upx;
		height: 12upx;
		background-color: #d2d2d2;
		border-radius: 50%;
		&-active {
			background-color: #B02424;
		}
	}
}
</style>
