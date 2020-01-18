<template>
	<view class="agent-apply">
		<image
			mode="aspectFill"
			src="/static/bg_task.png"
			class="bg"></image>
		<search 
			@on-mask-show="onMaskShow"
			@on-select="onSelect"
			@on-change-type="onChangeType"/>
		
		<selected-list 
			ref="selectedList"
			:type="selected.type"
			:title="selected.title"
			:list="selected.list"
			@on-del="onSelectedListDel"/>
		
		
		<view class="desc">
			<view class="title">申请理由/备注</view>
			<textarea
				v-model="desc"
				:disabled="descDiabled"
				class="content"
				:maxlength="-1"
				placeholder="请输入申请理由"></textarea>
		</view>
		
		<button
			@click="onClickSubmit"
			class="cu-btn block submit-btn">提交审核</button>
	</view>
</template>

<script>
import Search from './search.vue'
import SelectedList from './selected-list.vue'

export default {
	components: {
		Search,
		SelectedList
	},
	data() {
		return {
			selected: {
				type: 0,
				title: '学校',
				list: [],
				type0List: [
					{name: '成都航空港职业学院1',address: '成都市武侯区太平南新街68号'},
					{name: '成都航空港职业学院2',address: '成都市武侯区太平南新街68号'},
					{name: '成都航空港职业学院3',address: '成都市武侯区太平南新街68号'},
					{name: '成都航空港职业学院4',address: '成都市武侯区太平南新街68号'},
					{name: '成都航空港职业学院5',address: '成都市武侯区太平南新街68号'},
					{name: '成都航空港职业学院6',address: '成都市武侯区太平南新街68号'},
					{name: '成都航空港职业学院7',address: '成都市武侯区太平南新街68号'},
					{name: '成都航空港职业学院8',address: '成都市武侯区太平南新街68号'}
				],
				type1List: [
					{area: ['四川省','成都市','武侯区1']},
					{area: ['四川省','成都市','武侯区2']},
					{area: ['四川省','成都市','武侯区3']},
					{area: ['四川省','成都市','武侯区4']},
					{area: ['四川省','成都市','武侯区5']},
					{area: ['四川省','成都市','武侯区6']},
					{area: ['四川省','成都市','武侯区7']},
					{area: ['四川省','成都市','武侯区8']}
				]
			},
			
			desc: '',
			descDiabled: false
		};
	},
	onLoad(params) {
		console.log(params)
		this.selected.list = this.selected.type0List
	},
	methods: {
		onSelectedListDel(index) {
			this.selected.list.splice(index,1)
		},
		onMaskShow(status) {
			this.descDiabled = status
		},
		onSelect(item,typeIndex) {
			this.selected[`type${typeIndex}List`].unshift(item)
			this.$refs.selectedList.goTop()
		},
		onChangeType(item,typeIndex) {
			this.desc = ''
			Object.assign(this.selected, {
				type: typeIndex,
				title: item,
				list: this.selected[`type${typeIndex}List`]
			})				
		},
		onClickSubmit() {
			const {title,list} = this.selected
			if (!list.length) {
				uni.showToast({
					icon: 'none',
					title: `请添加申请代理${title}`
				})
			}
		}
	}
}
</script>

<style lang="scss">
.agent-apply {
	position: relative;
	padding: 24upx 36upx 0;
	height: 100vh;
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
	}	
	.mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 2;
		background-color: rgba(0,0,0, 0.44);
	}
	.cu-bar {
		min-height: auto;
		.search-form {
			margin: 0;
			height: 80upx;
			line-height: 80upx;
			border-radius: 8upx 0 0 8upx;
			input {
				padding-left: 22upx;
				padding-right: 22upx;
				font-size: 28upx;
			}
		}
	}
	.input-placeholder {
		font-size: 28upx;
	}
	.action {
		margin-right: 0 !important;
		width: 168upx;
		height: 80upx;
		font-size: 28upx;
		color: #2F2626;
		background-color: #F4E115;
		border-radius: 0 8upx 8upx 0;
		.cuIcon-triangledownfill {
			color: inherit;
			transition: all 200ms linear;
		}
		.cuIcon-active {
			transform: translateY(4upx) rotate(180deg);
		}
	}
	.search {
		position: relative;
		z-index: 3;
		&-list-container {
			position: absolute;
			top: 82upx;
			left: 0;
			z-index: 9;
			width: 100%;
			.extra {
				text-align: center;
				font-size: 56upx;
				color: #fff;
			}
		}
		&-list {
			max-height: 600upx;
			font-size: 24upx;
			background-color: #fff;
			border-radius: 8upx;
			box-shadow: 0 0 2upx #d5d5d5;
			.item {
				position: relative;
				display: flex;
				padding: 25upx 90upx 25upx 22upx;
				&:not(:last-child):after {
					@extend %line;
				}
				.highlight {
					color: #F13D4B;
				}
				.name {
					font-size: 24upx;
					line-height: 34upx;
				}
				.add {
					position: absolute;
					top: 14upx;
					right: 10upx;
					width: 80upx;
					font-size: 24upx;
					line-height: 56upx;
					text-align: center;
					@extend .highlight;
					&:active {
						text-shadow: 0 0 4upx rgba(241, 61, 75, .5);
					}
				}
				
			}
		}
	
		.type-list {
			position: absolute;
			top: 82upx;
			right: 0;
			z-index: 10;
			background-color: #fff;
			border-radius: 8upx;
			border: 1upx solid #eee;
			.type {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 166upx;
				height: 60upx;
				font-size: 28upx;
				color: #827D7D;
				&:not(:last-child):after {
					@extend %line;
				}
				&-active {
					color: #2F2626;
				}
			}
		}
	}
	

	.schools {
		.title {
			margin: 20upx 0;
			font-size: 32upx;
			font-weight: 500;
			line-height: 44upx;
			color: #fff;
		}
		
		.list {
			max-height: calc(100vh - 760upx);
			border-radius: 8upx;
			box-shadow: 0 0 2upx #d5d5d5;
		}
		
		.school {
			position: relative;
			padding: 35upx 76upx 35upx 32upx;
			background-color: #fff;
			&:not(:last-child):after {
				@extend %line;
			}
		}
		.name {
			font-size: 32upx;
			line-height: 44upx;
			font-weight: bold;
			color: #2F2626;
		}
		.address {
			margin-top: 12upx;
			font-size: 28upx;
			line-height: 40upx;
			font-weight: 500;
			color: #827D7D;
		}
		.cuIcon-roundclosefill {
			position: absolute;
			top: 32upx;
			right: 35upx;
			font-size: 48upx;
			color: #FF0202;
		}
		
		.area-list {		
			.area {
				font-size: 28upx;
				line-height: 40upx;
				color: #2F2626;
				&:not(:last-child):after {
					content: '|';
					margin: 0 15upx;
					font-weight: lighter;
					font-size: 40upx;
					line-height: 1;
					color: #d5d5d5;
				}
			}
		}
	}

	.desc {
		.title {
			margin: 18upx 0;
			font-size: 32upx;
			font-weight: 500;
			line-height: 44upx;
			color: #fff;
		}
		.content {
			padding: 20upx;
			width: 100%;
			height: 200upx;
			background-color: #fff;
			border-radius: 8upx;
		}
		.placeholder-style {
			font-size: 32upx;
		}
	}
	
	.submit-btn {
		margin-top: 36upx;
		height: 98upx;
		font-size: 32upx;
		font-weight: 500;
		color: #fff;
		background-color: #00A3FF;
		border-radius: 12upx;
	}
	
}

</style>
