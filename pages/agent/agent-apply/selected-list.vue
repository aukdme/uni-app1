<template>
	<view class="schools">
		<view class="title">申请代理{{title}}</view>
		<scroll-view 
			scroll-y
			class="list">
			<view 
				v-for="(item,index) of list"
				:key="index"
				class="school"
				:class="delIndex === index?'animation-reverse animation-scale-up':''">
				<block v-if="type === 0">					
					<view class="name">{{item.name}}</view>
					<view class="address">地址：{{item.address}}</view>
				</block>
				<view 
					v-else
					class="area-list">
					<text 
						v-for="(itm,idx) of item.area"
						:key="idx"
						class="area">{{itm}}</text>
				</view>
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
		type: Number,
		title: String,
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
