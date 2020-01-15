<template>
	<view class="my-task">
		<cu-custom is-back>
			<view 
				slot="content" 
				class="content"
				:style="{
					top: StatusBar+'px'
				}">我的任务</view>
		</cu-custom>
		<image 
			mode="aspectFill"
			src="../../../static/bg_task.png"
			class="bg"></image>
		
		<header-content />
		<task-detail />
	</view>
</template>

<script>
import HeaderContent from './header-content.vue'
import TaskDetail from './task-detail.vue'
export default {
	components: {
		HeaderContent,
		TaskDetail
	},
	data() {
		return {
			StatusBar: this.StatusBar
		};
	}
}
</script>

<style lang="scss">
.impact {
	font-family: Impact;
}
.my-task {
	font-family:PingFang-SC-Medium,PingFang-SC;
	.cuIcon-back {
		color: #fff;
	}
	.cu-custom .cu-bar {
		text-align: center;
		color: #fff;
	}
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
	}
	
	.header {
		overflow: hidden;
		position: relative;
		margin: 12upx 22upx;
		height: 260upx;
		.header-bg {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			height: 100%;
		}
		.content {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 100%;
		}
		.value {
			font-size: 80upx;
			line-height: 96upx;
			color: #F4E116;
		}
		.label {
			font-size: 24upx;
			line-height: 34upx;
			color: #F6F4FF;
		}
		.deadline {
			text-align: center;
		}
		.date {
			font-size: 56upx;
			line-height: 1;
			color: #F4E116;
		}
		.year {
			font-size: 36upx;
			line-height: 44upx;
			letter-spacing: 4.64upx;
			color: #F4E116;
		}
	}
	
	.task-detail {
		margin: 10upx 30upx 0;
		.title {
			font-size: 32upx;
			line-height: 44upx;
			color: #fff;
		}
		.detail-list {
			margin-top: 22upx;
			background-color: #fff;
			border-radius: 8upx;
			box-shadow: 0 0 2upx #D5D5D5;
		}
		.detail {
			position: relative;
			padding: 28upx 28upx 32upx 32upx;
			&:not(:last-child):after {
				@extend %line;
			}
			.look {
				position: absolute;
				right: 28upx;
				font-size: 28upx;
				line-height: 40upx;
				font-weight: 500;
				color: #ED3242;
			}
			.name {
				font-size: 32upx;
				line-height: 44upx;
				font-weight: bold;
				color: #333333;
			}
			.data {
				margin-top: 20upx;
				font-size: 28upx;
				line-height: 40upx;
				color: #999999;
			}
			.number,
			.money {
				margin-right: 30upx;
				color: #ED3242;
			}
		}
	}
}
</style>
