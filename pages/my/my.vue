<template>
	<view class="my">
		<base-info :user-info="userInfo"/>
		<center-text />
		<view class="placeholder"></view>
		<list />
	</view>
</template>

<script>
import BaseInfo from './base-info.vue'
import CenterText from './center-text.vue'
import List from './list.vue'
export default {
	components: {
		BaseInfo,
		CenterText,
		List
	},
	data() {
		return {
			userInfo: {
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=231934604,2906191240&fm=26&gp=0.jpg',
				name: '史蒂夫-赵四',
				org: '成都职业技术学校',
				position: '教师',
				level: '一级代理'
			}
		};
	}
}
</script>

<style lang="scss">
page {
	font-family:PingFang-SC-Medium,PingFang-SC;
	background-color: #fff;
}
.my {
	.placeholder {
		height: 16upx;
		background-color: #eeeeee;
	}
	.base-info {
		overflow: hidden;
		position: relative;
		padding: 46upx 10upx 0 30upx;
		height: 286upx;
		.bg {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
		}
		.avatar {
			flex-shrink: 0;
			margin-right: 34upx;
			width: 198upx;
			height: 198upx;
		}
		.name {
			margin-top: 10upx;
			height: 44upx;
			font-size: 32upx;
			font-weight: bold;
			line-height: 44upx;
			color: #fff;
			letter-spacing: 0.34upx;
		}
		.org,
		.level {
			font-size: 24upx;
			line-height: 34upx;
			color: #DCE6FF;
		}
		.org {
			margin: 28upx 0 14upx;
		}
	}
	.center-text {
		padding: 16upx 30upx 34upx;
		.content {
			overflow: hidden;
			display: flex;
			align-items: center;
			border-radius: 8upx;
		}
		.code-info {
			flex: 542;
			padding: 22upx 0 30upx 38upx;
			background-color: #F4E116;
			.label {
				margin-bottom: 14upx;
				font-size: 24upx;
				line-height: 34upx;
				color: #5A5A5A;
				font-weight:500;
			}
			.code {
				font-size: 56upx;
				line-height: 64upx;
				font-family:Impact;
				letter-spacing:1upx;
				color: #333333;
			}
		}
		.copy {
			flex: 144;
			align-self: stretch;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #0573EA;
			image {
				flex-shrink: 0;
				margin-right: 26upx;
				width: 32upx;
				height: 32upx;
			}
			text {
				width: 28upx;
				font-size: 28upx;
				line-height: 35upx;
				color: #DCE6FF;
			}
		}
		
		.desc {
			margin: 16upx 0 0 16upx;
			font-size: 24upx;
			font-weight:500;
			line-height: 34upx;
			color: #999999;
			.tip {
				color: #333333;
			}
			.more {
				color: $theme-color;
			}
		}
	}
	.cu-list {
		&.menu>.cu-item .content image{
			width: 44upx;
			height: 44upx;
		}
		.label {
			font-size: 32upx;
			line-height: 44upx;
			color: #333333;
			letter-spacing: 1.34upx;
		}
		&.menu>.cu-item:last-child:after {
			border-bottom: 1upx solid #ddd;
		}
	}
}
</style>
