<template>
	<page-container1
		bg-color="bg-f0"
		title="申请学校代理">
		<view class="agent-apply">
			<view class="cu-bar search">
				<view class="search-form round">
					<input 
						:adjust-position="false" 
						type="text" 
						placeholder="请输入申请的学校代理" 
						confirm-type="search"></input>
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
			
			<view class="desc">
				<view class="title">申请理由/备注</view>
				<textarea
					v-model="desc"
					class="content"
					:maxlength="-1"
					placeholder="请输入申请理由"></textarea>
			</view>
			
			<button
				class="cu-btn block submit-btn">提交审核</button>
		</view>
	</page-container1>
</template>

<script>
import PageContainer1 from 'components/page-container1.vue'
export default {
	components: {
		PageContainer1
	},
	data() {
		return {
			actionStatus: false,
			list: [
				{name: '成都航空港职业学院1',address: '成都市武侯区太平南新街68号'},
				{name: '成都航空港职业学院2',address: '成都市武侯区太平南新街68号'},
				{name: '成都航空港职业学院3',address: '成都市武侯区太平南新街68号'},
				{name: '成都航空港职业学院4',address: '成都市武侯区太平南新街68号'},
				{name: '成都航空港职业学院5',address: '成都市武侯区太平南新街68号'},
				{name: '成都航空港职业学院6',address: '成都市武侯区太平南新街68号'},
				{name: '成都航空港职业学院7',address: '成都市武侯区太平南新街68号'},
				{name: '成都航空港职业学院8',address: '成都市武侯区太平南新街68号'}
			],
			delIndex: -1,
			desc: ''
		};
	},
	onLoad(params) {
		console.log(params)
	},
	methods: {
		onClickAction() {
			this.actionStatus = !this.actionStatus
		},
		onClickDel(index) {
			this.delIndex = index
			let timer = setTimeout(() => {
				this.delIndex = -1
				this.list.splice(index,1)
				timer = null
			},800)
		}
	}
}
</script>

<style lang="scss">
.agent-apply {
	margin: 0 36upx;
	.cu-bar {
		margin-top: 24upx;
		min-height: auto;
		.search-form {
			margin: 0;
			height: 80upx;
			line-height: 80upx;
			border-radius: 8upx 0 0 8upx;
			input {
				padding-left: 30upx;
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
			background-color: #fff;
			border-radius: 8upx;
			box-shadow: 0 0 2upx #d5d5d5;
		}
		
		.school {
			position: relative;
			padding: 35upx 76upx 35upx 32upx;
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
