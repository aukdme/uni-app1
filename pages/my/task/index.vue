<template>
	<page-container1 
		class="my-task"
		bg-color="bg-transparent"
		title="我的任务">
		<header-content />
		<task-detail :list="list"/>
	</page-container1>
</template>

<script>
import PageContainer1 from '../../../components/page-container1.vue'
import HeaderContent from './header-content.vue'
import TaskDetail from './task-detail.vue'
export default {
	components: {
		PageContainer1,
		HeaderContent,
		TaskDetail
	},
	data() {
		return {
			StatusBar: this.StatusBar,
			list: [
				{name: '中山职业学校',number: 120,money: 1100},
				{name: '中山职业学校1',number: 220,money: 2100}
			]
		};
	}
}
</script>

<style lang="scss">
.my-task {
	.header {
		overflow: hidden;
		position: relative;
		margin: 12upx 22upx;
		height: 260upx;
		.header-bg {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			height: 100%;
		}
		.content {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 100%;
		}
		.value {
			font-size: 80upx;
			line-height: 96upx;
			color: #F4E116;
		}
		.label {
			font-size: 24upx;
			line-height: 34upx;
			color: #F6F4FF;
		}
		.deadline {
			text-align: center;
		}
		.date {
			font-size: 56upx;
			line-height: 1;
			color: #F4E116;
		}
		.year {
			font-size: 36upx;
			line-height: 44upx;
			letter-spacing: 4.64upx;
			color: #F4E116;
		}
	}
}
</style>
