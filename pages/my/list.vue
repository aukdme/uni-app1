<template>
	<view class="cu-list menu">
		<view
			v-for="(item,index) of list"
			:key="index"
			class="cu-item arrow">
			<navigator 
				class="content" 
				hover-class="none" 
				:url="item.path">
				<image :src="`../../static/${item.icon}.png`"></image>
				<text class="label">{{item.label}}</text>
			</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{label: '我的任务',icon:'icon_task',path: './task/index'},
				{label: '我的成员',icon: 'icon_number',path: './number/index'},
				{label: '修改个人信息',icon: 'icon_setting'}
			]
		}
	}
}
</script>
