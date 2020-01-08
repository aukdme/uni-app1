<template>
	<view class="page-container">
		<cu-custom 
			bg-color="bg-gradual-blue" 
			is-back>
			<block slot="content">
				<search />
			</block>
		</cu-custom>
	</view>
</template>

<script>
import Search from '../../components/search.vue'
export default {
	components: {
		Search
	},
	data() {
		return {
			title: 'Hello'
		}
	},
	onLoad() {

	},
	methods: {

	}
}
</script>

<style lang="scss">
.page-container {
	.custom-nav {
		
	}
}
</style>
