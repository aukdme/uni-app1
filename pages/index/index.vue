<template>
	<view class="page-container">
		<cu-custom 
			bg-color="nav-bg" 
			is-back>
			<search 
				slot="content"
				@input="onInputSearch"/>
		</cu-custom>
		
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
		
		<swiper 
			class="screen-swiper" 
			:class="dotStyle?'square-dot':'round-dot'" 
			indicator-dots 
			circular
			autoplay 
			interval="5000" 
			duration="500">
			<swiper-item 
				v-for="(item,index) in swiperList" 
				:key="index">
				<image 
					:src="item.url" 
					mode="aspectFill" 
					v-if="item.type=='image'"></image>
				<video 
					:src="item.url" 
					autoplay 
					loop 
					muted 
					:show-play-btn="false" 
					:controls="false" 
					objectFit="cover" 
					v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import Search from '../../components/search.vue'
export default {
	components: {
		Search
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
			
			cardCur: 0,
			swiperList: [{
				id: 0,
				type: 'image',
				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
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
			}],
			dotStyle: false,
			towerStart: 0,
			direction: ''
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
		}
	}
}
</script>

<style lang="scss">
$bg-color: linear-gradient(180deg,rgba(172,40,40,1) 0%,rgba(178,35,35,1) 100%);
.page-container {
	.nav-bg {
		background: $bg-color;
	}
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
</style>
