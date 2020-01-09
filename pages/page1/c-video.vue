<template>
	<view class="video-block">
		<video 
			id="myVideo"
			src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
			controls
			:show-center-play-btn="false"
			class="video">
		</video>
		<view v-show="!playing">
			<view class="outer">
				<view class="title">中山职校宣传视频-校园风景</view>
				<image
					class="play" 
					@click="play" 
					src="../../static/icon_play.png"></image>
			</view>
			<image 
				class="poster" 
				src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			playing: false
		}
	},
	mounted() {
		this.videoCtx = uni.createVideoContext('myVideo')
	},
	methods: {
		play() {
			this.playing = true
			this.videoCtx.play()
		}
	}
}
</script>

<style lang="scss" scoped>
.video-block {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: percentage(9 / 16);
	.outer {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		color: #fff;
		line-height: 1;
		background:linear-gradient(180deg,rgba(0,0,0,0.5) 0%,rgba(216,216,216,0) 100%);
	}
	.title {
		margin: 22upx 0 0 22upx;
		font-size: 32upx;
	}
	.poster {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.play {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		width: 72upx;
		height: 72upx;
		z-index: 9;
	}
	.video {
		position: absolute;
		width:100%;
		height: 100%;
	}
}
</style>
