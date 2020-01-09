<template>
	<view class="page-container">
		<cu-custom 
			bg-color="nav-bg" 
			is-back>
			<search 
				slot="content"
				@input="onInputSearch"/>
		</cu-custom>
		<view class="page-content-header">
			<scroll-view
				scroll-x 
				class="bg-white nav" 
				scroll-with-animation 
				:scroll-left="tab.scrollLeft">
				<view 
					v-for="(item,index) of tab.list" 
					@tap="tabSelect"
					:key="index" 
					:class="['cu-item',{'cu-item-active':index===tab.curIndex}]"
					:data-id="index"
					:data-name="item.name">{{item.label}}</view>
			</scroll-view>
		</view>
		
		<view class="page-content-main">
			<view class="main-block">	
				<swiper 
					class="screen-swiper swiper-block"
					circular
					interval="5000" 
					duration="500"
					@change="onChangeSwiper">
					<swiper-item 
						v-for="(item,index) in swiper.list" 
						:key="index"
						@click="play(e,`video${index}`,item)" >
						<image 
							:src="item.url" 
							mode="aspectFill" 
							v-if="item.type=='image'"></image>
						<view class="video-block" v-if="item.type === 'video'">
							<video 
								:id="`video${index}`"
								:src="item.url"
								controls
								:show-center-play-btn="false"
								class="video">
							</video>
							<view v-show="!item.playing">
								<view class="outer">
									<view class="title">中山职校宣传视频-校园风景</view>
									<image
										class="play" 
										src="../../static/icon_play.png"></image>
								</view>
								<image 
									class="poster" 
									src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"></image>
							</view>
						</view>
						<!-- <video 
							:src="item.url" 
							:autoplay="true"
							loop 
							muted 
							:show-play-btn="false" 
							:controls="false" 
							objectFit="cover" 
							v-if="item.type=='video'"></video> -->
					</swiper-item>
				</swiper>
				<swiper-dot 
					:value="swiper.list.length"
					:current="swiper.current" />
				
				<content-text />
				
			</view>
			<view class="main-block">
				<view class="video-block">
					<video 
						id="desc-video"
						src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
						controls
						:show-center-play-btn="false"
						class="video">
					</video>
					<view v-show="!descVideoPlaying">
						<view class="outer">
							<view class="title">中山职校宣传视频-校园风景</view>
							<image
								class="play" 
								@click="play(e,'desc-video','descVideoPlaying')" 
								src="../../static/icon_play.png"></image>
						</view>
						<image 
							class="poster" 
							src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"></image>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
import Search from '../../components/search.vue'
import ContentText from './content-text.vue'
import SwiperDot from './swiper-dot.vue'
export default {
	components: {
		Search,
		ContentText,
		SwiperDot
	},
	data() {
		return {
			tab: {
				scrollLeft: 0,
				curIndex: 0,
				list: [
					{name: 'name1',label: '推荐视频'},
					{name: 'name2',label: '热门学校'},
					{name: 'name3',label: '趣玩友圈'},
					{name: 'name4',label: '热门段子'},
					{name: 'name5',label: '热门skr'}
				]
			},
			
			swiper: {
				current: 0,
				list: [{
					id: 0,
					type: 'video',
					playing: false,
					url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}]
			},
			
			descVideoPlaying: false
		}
	},
	onLoad() {

	},
	methods: {
		tabSelect(e) {
			const {id,name} = e.currentTarget.dataset
			this.tab.curIndex = id;
			this.tab.scrollLeft = (id - 1) * 60
			console.log(name)
		},
		onInputSearch(value) {
			console.log(value)
		},
		onChangeSwiper(e) {
			const lastIndex = this.swiper.current
			this.swiper.current = e.detail.current
			if (this.swiper.list[lastIndex].type === 'video') {
				uni.createVideoContext(`video${lastIndex}`).pause()
			}
		},
		play(e,id,obj) {
			if (typeof obj === 'object') {
				if (obj.type === 'image') {
					return 
				}
				obj.playing = true
			}else {
				this[obj] = true
			}
			uni.createVideoContext(id).play()
		}
	}
}
</script>

<style lang="scss">
$bg-color: linear-gradient(180deg,rgba(172,40,40,1) 0%,rgba(178,35,35,1) 100%);
%block-style {
	overflow: hidden;
	margin-bottom: 16upx;
	padding: 18upx;
	background: #fff;
	box-shadow: 0 4upx 4upx 0 rgba(0,0,0,0.28);
	border-radius: 8upx;
}
.page {
	&-container {
		.nav-bg {
			background: $bg-color;
		}
	}
	
	&-content-header {
		.nav {
			display: flex;
			background: $bg-color;
		}
		.cu-item {
			height: 76upx;
			font-size: 32upx;
			color: #F5A8A8;
			&-active {
				font-size: 40upx;
				color: #FFB200;
			}
		}
	}
	
	&-content-main {
		padding: 16upx;
		.main-block {
			@extend %block-style;
		}
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
	}
	
	
	
}
</style>
