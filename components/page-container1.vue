<template>
	<view class="page-container1">
		<cu-custom 
			:bg-color="bgColor"
			:is-back="isBack">
			<view 
				slot="content" 
				class="content"
				:style="{
					top: StatusBar+'px'
				}">{{title}}</view>
		</cu-custom>
		<image 
			mode="aspectFill"
			src="../static/bg_task.png"
			class="bg"></image>
		<slot></slot>
	</view>
</template>

<script>
export default {
	props: {
		title: String,
		isBack: {
			type: Boolean,
			default: true
		},
		bgColor: String
	},
	data() {
		return {
			StatusBar: this.StatusBar
		};
	}
}
</script>

<style lang="scss">
.impact {
	font-family: Impact;
}
.page-container1 {
	font-family: PingFang-SC-Medium,PingFang-SC;
	.cu-custom .cu-bar {
		text-align: center;
	}
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
	}	
}
</style>
