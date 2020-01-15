<template>
	<view class="common-detail task-detail">
		<view class="title">任务详情</view>
		<view class="detail-list">
			<view 
				v-for="(item,index) of list"
				:key="index"
				class="detail">
				<view class="extra">查看职责</view>
				<view class="name">{{item.name}}</view>
				<view class="data">
					已报名：<text class="text1">{{item.number}}人</text>返现金额：<text class="text2">{{item.money}}元</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: Array
	}
}
</script>
