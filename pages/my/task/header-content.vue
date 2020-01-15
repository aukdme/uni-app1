<template>
	<view class="header">
		<image 
			mode="scaleToFill"
			src="../../../static/bg_task-header.png"
			class="header-bg"></image>
		
		<view class="content">
			<view class="target">
				<view class="value impact">20</view>
				<view class="label">目标总人数</view>
			</view>
			<view class="complete">
				<view class="value impact">30</view>
				<view class="label">已完成人数</view>
			</view>
			<view class="deadline">
				<view class="date impact">5.20</view>
				<view class="year impact">2020</view>
				<view class="label">截止时间</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>
