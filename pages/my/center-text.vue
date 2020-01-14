<template>
	<view class="center-text">
		<view class="content">
			<view class="code-info">
				<view class="label">代理专有码</view>
				<view class="code">{{code}}</view>
			</view>
			<view
				@click="onClickCopy"
				class="copy">
				<image src="../../static/pic_copy.png"></image>
				<text>复制码号</text>
			</view>
		</view>
		<view class="desc">
			<text class="tip">[说明]</text>
			兹有我司委托代理人申报学生报名事项，现向贵司声明该报名过程与我公司无关。若经父母方发现任何
			<text class="more">查看更多>></text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			code: 'AED5219'
		}
	},
	methods: {
		onClickCopy() {
			uni.setClipboardData({
			    data: this.code,
			    success: function () {
			      uni.showToast({
			          title: '复制成功',
			          duration: 2000
			      });
			    }
			})
		}
	}
}
</script>
