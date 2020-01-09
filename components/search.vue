<template>
	<view class="search-form round">
		<text class="cuIcon-search"></text>
		<input
			:value="searchValue"
			@input="onInput"
			:adjust-position="false"
			type="text" 
			placeholder="搜名词或关键词" 
			confirm-type="search"></input>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: ''
			}
		},
		methods: {
			onInput(e) {
				const {value} = e.detail
				this.searchValue = value
				this.$emit('input',value)
			}
		}
	}
</script>
