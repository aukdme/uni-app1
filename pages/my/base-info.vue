<template>
	<view class="base-info flex">
		<image 
			mode="widthFix"
			src="../../static/bg_base-info.png"
			class="bg"></image>
		<image 
			:src="userInfo.image"
			class="avatar"></image>
		<view class="detail">
			<view class="name">{{userInfo.name}}</view>
			<view class="org">单位：{{userInfo.org}} {{userInfo.position}}</view>
			<view class="level">级别：{{userInfo.level}}</view>
		</view>
	</view>
</template>
<script>
export default {
	props: ['userInfo']
}
</script>
