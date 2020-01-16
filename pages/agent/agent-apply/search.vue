<template>
	<view class="cu-bar search">
		<view class="search-form round">
			<input 
				@focus="onFocus"
				@blur="onBlur"
				:adjust-position="false" 
				type="text" 
				placeholder="请输入申请的学校代理" 
				confirm-type="search"></input>
		</view>
		<view 
			v-show="searchListShow"
			class="search-list-container">
			<scroll-view
				scroll-y
				class="search-list">
				<view 
					v-for="(item,index) of searchList"
					:key="index"
					class="item">
					<text class="name">{{item.name}}</text>
					<text
						@click="onClickAdd"
						class="add">添加</text>
				</view>
			</scroll-view>
			<view class="extra">				
				<text
					@click="onClickClose"
					class="cuIcon-roundclose"></text>
			</view>
		</view>
		
		
		<view 
			@click="onClickAction"
			class="action">
			<text>按学校</text>
			<text 
				:class="[
					'cuIcon-triangledownfill',
					{ 'cuIcon-active': actionStatus }
				]">
				</text>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			actionStatus: false,
			searchListShow: false,
			searchList: [
				{name: '计算机科学与技术职业学院'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院2'}
			]
		};
	},
	methods: {
		onFocus() {
			this.searchListShow = true
			this.$emit('on-focus')
			this.$emit('on-change-mask-status',true)
		},
		onClickAdd(item) {
			this.searchListShow = false
			this.$emit('on-select',item)
		},
		onClickClose() {
			this.searchListShow = false
			this.$emit('on-change-mask-status',false)
		},
		onClickAction() {
			this.actionStatus = !this.actionStatus
		}
	}
}
</script>
