<template>
	<view class="auth-form">
		<form>
			<view class="cu-form-group margin-top">
				<view class="title title-fix">姓名</view>
				<input 
					placeholder="填写真实姓名" 
					name="name"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">身份证号</view>
				<input 
					placeholder="请输入身份证号" 
					name="id"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">所属单位</view>
				<input 
					placeholder="请输入单位" 
					name="org"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input 
					placeholder="请输入手机号码" 
					name="phone"></input>
			</view>
		</form>
		<button 
			class="cu-btn lg auth-btn">
			开始人脸识别验证
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
page {
	background-color: #fff;
}
.auth-form {
	padding: 0 36upx;
	.cu-form-group {
		padding-left: 4upx;
		padding-right: 4upx;
		border-top: none;
		border-bottom: 3upx solid #eaeaea;
		
		.title-fix {
			width: 150upx;
		}
		
		.title,
		input {
			font-size: 32upx;
			color: #2F2626;
		}
		
		.input-placeholder {
			margin-top: 2upx;
			font-size: 32upx;
			color: #b3b0b0;
		}
	}
	
	.auth-btn {
		position: absolute;
		bottom: 48upx;
		left: 62upx;
		right: 62upx;
		height: 98upx;
		font-size: 32upx;
		color: #fff;
		background-color: rgb(5,115,234);
	}
}
</style>
