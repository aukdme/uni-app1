<template>
	<view class="content-text">
		<view class="name">{{content.name}}</view>
		<view class="detail-list">			
			<view 
				v-for="(item,index) of content.list"
				:key="index"
				class="detail">
				<text class="label">{{item.label}}</text>
				<text class="label-info">{{item.value}}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			content: {
				name: '中山职校基础学校',
				list: [
					{label: '获得学历',value: '公办'},
					{label: '占地面积',value: '2138.43亩'},
					{label: '学生人数',value: '16784人'},
					{label: '教学计划',value: '无'},
					{label: '学校地址',value: '四川省（主校区）天府新区视高经济开发区花海大道路1号/成都高新西区团结学院96号'}
				]
			}
		}
	},
	onLoad() {

	}
}
</script>

<style lang="scss">
.content-text {
	padding: 26upx 20upx;
	background: linear-gradient(136deg,rgba(121,81,196,1) 0%,rgba(104,101,255,1) 100%);
	border-radius: 8upx;
	.name {
		margin-bottom: 24upx;
		height: 44upx;
		font-size: 32upx;
		line-height: 44upx;
		font-weight: bold;
		color: #fff;
	}
	.detail-list {
		display: flex;
		flex-wrap: wrap;
	}
	.detail {
		flex-shrink: 0;
		display: flex;
		width: 50%;
		margin: 10upx 0;
		&:last-child {
			width: 100%;
		}
		.label {
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 32upx;
			width: 96upx;
			height: 36upx;
			font-size: 20upx;
			color: #6B63F7;
			background: rgba(193,187,255,1);
			border-radius: 4upx;
			&-info {
				font-size: 28upx;
				color: #D9D7FF;
			}
		}
	}
}
</style>
