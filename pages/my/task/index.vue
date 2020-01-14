<template>
	<view class="my-task">
		<cu-custom is-back>
			<view 
				slot="content" 
				class="content"
				:style="{
					top: StatusBar+'px'
				}">我的任务</view>
		</cu-custom>
		<image 
			mode="aspectFill"
			src="../../../static/bg_task.png"
			class="bg"></image>
		
		<header-content />
		<task-detail />
	</view>
</template>

<script>
import HeaderContent from './header-content.vue'
import TaskDetail from './task-detail.vue'
export default {
	components: {
		HeaderContent,
		TaskDetail
	},
	data() {
		return {
			StatusBar: this.StatusBar
		};
	}
}
</script>

<style lang="scss">
.my-task {
	.cuIcon-back {
		color: #fff;
	}
	.cu-custom .cu-bar {
		text-align: center;
		color: #fff;
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
