<template>
	<view class="task-detail">
		<view class="title">任务详情</view>
		<view class="detail-list">
			<view 
				v-for="(item,index) of list"
				:key="index"
				class="detail">
				<view class="look">查看职责</view>
				<view class="name">{{item.name}}</view>
				<view class="data">
					已报名：<text class="number">{{item.number}}人</text>返现金额：<text class="money">{{item.money}}元</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{name: '中山职业学校',number: 120,money: 1100},
					{name: '中山职业学校1',number: 220,money: 2100}
				]
			}
		}
	}
</script>
