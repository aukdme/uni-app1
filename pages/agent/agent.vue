<template>
	<page-container1
		bg-color="bg-f0"
		:is-back="isBack"
		title="申请代理"
		ref="pageContainer1">
		<view class="apply-agent">	
			<button class="cu-btn block">一级代理</button>
			<button class="cu-btn block">二级代理</button>
			<view class="agreement-container">
				<view class="agreement">
					<view class="title">职责说明协议</view>
					<scroll-view 
						scroll-y
						class="content">兹有我司委托代理人申报学生报名事项，现向贵司声明该报名过程与我公司无关。若经父母方发现任何不实, 我方愿承担RMB2000元/单的违约金,且 不免除对我方其他责任的追究.。兹有我司委托代理人申报学生报名事项，现向贵司声明该报名过程与我公司无关。若经父母方发现任何不实, 我方愿承担RMB2000元/单的违约金,且 不免除对我方其他责任的追究。兹有我司委托代理人申报学生报名事项，现向贵司声明该报名过程与我公司无关。若经父母方发现任何不实, 我方愿承担RMB2000元/单的违约金,且 不免除对我方其他责任的追究.。兹有我司委托代理人申报学生报名事项，现向贵司声明该报名过程与我公司无关。若经父母方发现任何不实, 我方愿承担RMB2000元/单的违约金,且 不免除对我方其他责任的追究。</scroll-view>
				</view>
				<button 
					class="cu-btn block agree-btn">同意并继续</button>
			</view>
		</view>
	</page-container1>
</template>

<script>
import PageContainer1 from '../../components/page-container1.vue'
export default {
	components: {
		PageContainer1
	},
	data() {
		return {
			isBack: false
		};
	},
	onReady() {
		uni.hideTabBar()
	},
	onLoad() {
		const cuCustom = this.$refs.pageContainer1.$children.find(item => 'cu-custom' === item.$options.name)
		cuCustom.BackPage = () => {
			uni.switchTab({
				url: '../my/my',
				success: () => {
					uni.showTabBar()
				}
			})
		}
	},
	onTabItemTap() {
		this.isBack = true
		uni.hideTabBar()
	}
}
</script>

<style lang="scss">
.apply-agent {
	margin: 0 38upx;
	button {
		margin-top: 40upx;
		height: 120upx;
		font-size: 32upx;
		font-weight: blod;
		box-shadow: 0px 4upx 8upx 0px rgba(34,51,203,1);
		border-radius: 8upx;
		&:active {
			color: #fff;
			background-color: #FF8A21;
			
		}
	}
	
	.agreement-container {
		height: calc(100vh - 700upx);
		.agreement {
			margin-top: 74upx;
			padding: 34upx 24upx;
			height: 100%;
			background: rgba(248,248,248,1);
			border-radius: 8upx;
			opacity: 0.88;
			border: 2upx solid rgba(211,211,211,1);
			.title {
				font-size: 28upx;
				font-weight: bold;
				color: rgba(40,40,40,1);
				line-height: 40upx;
			}
			.content {
				margin-top: 24upx;
				height: calc(100% - 90upx);
				font-size: 28upx;
				line-height: 44upx;
				color: #666;
			}
		}
		
		.agree-btn {
			margin-top: 36upx;
			height: 98upx;
			font-size: 32upx;
			font-weight: 500;
			color: #fff;
			background-color: #00A3FF;
			border-radius: 12upx;
		}
	}
}
</style>
