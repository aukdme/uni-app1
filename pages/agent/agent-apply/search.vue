<template>
	<view class="search-wrapper">
		<view
			v-show="maskShow"
			@click="onClickMask"
			class="mask"></view>
		<view class="cu-bar search">
			<view class="search-form round">
				<input 
					v-model="keywords"
					@input="onInput"
					@focus="onFocus"
					:adjust-position="false" 
					type="text" 
					:placeholder="`请输入申请的${type.curValue}代理`" 
					confirm-type="search"></input>
			</view>
			
			<view 
				v-show="search.listShow"
				class="search-list-container">
				<scroll-view
					scroll-y
					class="search-list">
					<view 
						v-for="(item,index) of search.list"
						:key="index"
						class="item">
						<rich-text :nodes="highlightText(item.name)" class="name"></rich-text>
						<text
							@click="onClickAdd(item)"
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
						{ 'cuIcon-active': type.listShow }
					]">
					</text>
			</view>
			
			<view 
				v-show="type.listShow"
				class="type-list">
				<view 
					v-for="(item,index) of type.list"
					:key="index"
					@click="onClickType(item,index)"
					:class="['type',{'type-active':index === type.curIndex}]">{{item}}</view>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			maskShow: false,
			
			keywords: '',
			
			search: {
				listShow: false,
				list: [
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
				]
			},
			
			type: {
				listShow: false,
				curIndex: 0,
				curValue: '学校',
				list: ['学校','区域']
			}
		};
	},
	methods: {
		onClickMask() {
			this.$emit('on-mask-show',false)
			this.maskShow = false
			this.search.listShow = false
			this.type.listShow = false
		},
		onFocus() {
			this.$emit('on-mask-show',true)
			this.maskShow = true
		},
		onInput() {
			this.search.listShow = true
			console.log()
		},
		onClickAdd(item) {
			this.$emit('on-select',item,this.type.curIndex)
			uni.showToast({
				icon: 'none',
				title: '已添加到申请列表！'
			})
		},
		onClickAction() {
			this.type.listShow = !this.type.listShow		
		},
		onClickType(item,index) {
			this.type.listShow = false
			if (this.type.curIndex !== index) {
				this.type.curValue = item
				this.type.curIndex = index
				
				this.search.listShow = false
				this.search.list = []
				this.keywords = ''
				this.$emit('on-change-type',item,index)
			}
		},
		highlightText(value = '') {
			return value.replace(this.keywords,match => {
				return `<span style="color:#F13D4B">${match}</span>`
			})
		}
	}
}
</script>
