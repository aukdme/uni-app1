<template>
	<view class="common-detail number-detail">
		<view class="title">成员列表</view>
		<view class="detail-list">
			<view 
				v-for="(item,index) of list"
				:key="index"
				class="detail">
				<view 
					@click="onCall(item.phone)"
					class="extra">{{item.phone}}</view>
				<view class="name">{{item.name}}</view>
				<view class="data">
					进度：<text class="text1">目标{{item.target}}人</text>已完成：<text class="text2">{{item.completed}}人</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: Array
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
