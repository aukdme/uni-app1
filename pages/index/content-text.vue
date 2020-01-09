<template>
	<view class="content-text">
		<view class="name">中山职校基础学校</view>
		<view class="detail-list">			
			<view class="detail">
				<text class="label">获得学历</text>
				<text class="label-info">公办</text>
			</view><view class="detail">
				<text class="label">占地面积</text>
				<text class="label-info">2138.43亩</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
.content-text {
	padding: 26upx 20upx;
	background: linear-gradient(136deg,rgba(121,81,196,1) 0%,rgba(104,101,255,1) 100%);
	border-radius: 8upx;
	.name {
		height: 44upx;
		font-size: 32upx;
		line-height: 44upx;
		font-weight: bold;
		color: #fff;
	}
	.detail-list {
		overflow: hidden;
	}
	.detail {
		float: left;
		margin: 10upx;
		&:nth-child(even) {
			margin-right: 0
		}
		.label {
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
