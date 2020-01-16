<script>
import Vue from 'vue'
export default {
	onLaunch: function() {
		uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./colorui/main.css";
	@import "./colorui/icon.css";
	@import "./colorui/animation.css";
	.bg-f0 {
		color: #2F2626;
		background: #f0f0f0;
		.cuIcon-back {
			color: #2F2626;
		}
	}
	.bg-transparent {
		color: #fff;
		background: transparent;
		.cuIcon-back {
			color: #fff;
		}
	}
	.impact {
		font-family: Impact;
	}
	.common-detail {
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
			.extra {
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
			.text1,
			.text2 {
				margin-right: 30upx;
				color: #ED3242;
			}
		}
	}
</style>
