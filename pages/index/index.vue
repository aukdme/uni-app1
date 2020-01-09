<template>
	<view class="grid col-3 padding-sm">
		<view class="padding-sm" v-for="(item,index) in pages" :key="index">
			<view 
				@click="go(item.page)"
				class="padding radius text-center shadow-blur" :class="'bg-' + item.name">
				<view class="text-lg">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pages: [
					{
						title: 'page1',
						name: 'blue',
						page: 'page1'
					},
					{
						title: '实名认证',
						name: 'blue',
						page: 'page2'
					},
				]
			};
		},
		methods: {
			go(page) {
				uni.navigateTo({
					url: `/pages/${page}/${page}`
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
