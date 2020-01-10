<template>
	<view class="auth-face">
		<image src="../../static/logo.png"></image>
		<text class="text">正面平视手机，保证光线充足</text>
		<text class="text">请勿遮挡面部</text>
		<view class="auth-face-timeline">
			<view class="cu-timeline">
				<view class="cu-item">
					<view class="content">
						牢记验证码，点击开始录制
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						开启前置摄像头，用普通话朗读数字
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						完成录制，等待验证结果
					</view>
				</view>
			</view>
			<button class="cu-btn lg auth-btn">
				获取验证码
			</button>
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

<style lang="scss" scoped>
page {
	background-color: #f1f1f1;
}
.auth-face {
	image {
		display: block;
		margin: 86upx auto 30upx;
		width: 204upx;
		height: 306upx;
		box-shadow:0px 8px 8px 0px rgba(49,49,49,0.1);
	}
	.text {
		display: block;
		text-align: center;
		font-size: 26upx;
		line-height: 36upx;
		color: #9E9E9E;
	}
	.auth-btn {
		margin-top: 140upx;
		width: 626upx;
		height: 98upx;
		font-size: 32upx;
		color: #fff;
		background-color: rgb(5,115,234);
	}
	.auth-face-timeline {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		margin-top: 44upx;
		padding: 98upx 40upx 40upx 80upx;
		background-color: #fff;
	}
	.cu-timeline>.cu-item {
		padding-top: 0;
		padding-left: 100upx;
		&:last-child::after {
			content: none;
		}
		&::before {
			top: 4upx;
			left: 44upx;
			width: 28upx;
			height: 28upx;
			font-size: 24upx;
			line-height: 28upx;
			color: #0573EA;
			border: 2upx solid #0573EA;
			border-radius: 50%;
			box-shadow: 0 0 10upx #fff;
		}
		&::after {
			top: 4upx;
			background-color: #0573EA;
		}
		&:nth-child(1)::before {
			content: '1';
		}
		&:nth-child(2)::before {
			content: '2';
		}
		&:nth-child(3)::before {
			content: '3';
		}
		>.content {
			padding: 0;
			font-size: 28upx;
			background-color: initial;
			color: #2F2626;
		}
	}
}
</style>
