<template>
	<view class="schools">
		<view class="title">申请代理学校</view>
		<scroll-view 
			scroll-y
			class="list">
			<view 
				v-for="(item,index) of list"
				:key="index"
				class="school"
				:class="delIndex === index?'animation-reverse animation-scale-up':''">
				<view class="name">{{item.name}}</view>
				<view class="address">地址：{{item.address}}</view>
				<text 
					@click="onClickDel(index)"
					class="cuIcon-roundclosefill"></text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		list: Array
	},
	data() {
		return {
			delIndex: -1,		
		}
	},
	methods: {
		onClickDel(index) {
			this.delIndex = index
			let timer = setTimeout(() => {
				this.delIndex = -1
				this.$emit('on-del',index)
				timer = null
			},400)
		}
	}
}
</script>
