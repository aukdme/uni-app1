<template>
	<view class="cu-bar search">
		<view class="search-form round">
			<input 
				v-model="keywords"
				@focus="onFocus"
				:adjust-position="false" 
				type="text" 
				:placeholder="`请输入申请的${type.curValue}代理`" 
				confirm-type="search"></input>
		</view>
		<view 
			v-show="maskStatus && searchListShow"
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
			<!-- <view class="extra">				
				<text
					@click="onClickClose"
					class="cuIcon-roundclose"></text>
			</view> -->
		</view>
		
		
		<view 
			@click="onClickAction"
			class="action">
			<text>按{{type.curValue}}</text>
			<text 
				:class="[
					'cuIcon-triangledownfill',
					{ 'cuIcon-active': actionStatus }
				]">
				</text>
		</view>
		<view 
			v-show="actionStatus"
			class="type-list">
			<view 
				v-for="(item,index) of type.list"
				:key="index"
				@click="onClickType(item,index)"
				:class="['type',{'type-active':index === type.curIndex}]">{{item}}</view>
		</view>
		
	</view>
</template>

<script>
export default {
	props: {
		maskStatus: Boolean
	},
	data() {
		return {
			keywords: '',
			actionStatus: false,
			searchListShow: true,
			searchList: [
				{name: '计算机科学与技术职业学院'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院1'},
				{name: '计算机科学与技术职业学院2'}
			],
			
			type: {
				curIndex: 0,
				curValue: '学校',
				list: ['学校','区域']
			}
		};
	},
	watch: {
		maskStatus(newVal) {
			if (!newVal) {
				this.actionStatus = false
			}
		}
	},
	methods: {
		onFocus() {
			this.actionStatus = false
			this.$emit('on-change-mask-status',true)
		},
		onClickAdd(item) {
			this.$emit('on-select',item)
			uni.showToast({
				icon: 'none',
				title: '已添加到申请列表！'
			})
		},
		onClickAction() {
			this.searchListShow = false
			this.actionStatus = !this.actionStatus		
			this.$emit('on-change-mask-status',this.actionStatus)
		},
		onClickType(item,index) {
			this.actionStatus = false
			this.searchListShow = true
			if (this.type.curIndex !== index) {
				this.type.curValue = item
				this.type.curIndex = index
				this.searchList = []
				this.keywords = ''
				this.$emit('on-change-mask-status',false)
				this.$emit('on-change-type',item,index)
			}
		}
	}
}
</script>
