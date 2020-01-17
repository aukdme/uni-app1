<template>
	<view class="login_bg" >
		<image class="background_img" :src="require('static/icon/preRegistration/login_bg.png')" mode="aspectFill"></image>
		<view class="content">
			<view class="login_titlebox">
				<view class="login_title">登录后更精彩</view>
				<view class="login_content">全国各地学校信息都这期待您的加入</view>
			</view>
			<view class="login_box">
				<view class="cu-form-group mobile_box">
					<input class="mobile" placeholder="手机号" v-model="phone"></input>
				</view>
				<view class="cu-form-group verification_code">
					<input class="verification_input" placeholder="验证码" name="input" v-model="verificationCode"></input>
					<button class='cu-btn shadow verification_btn' @tap="getVerificationCode" v-if="show">获取验证码</button>
					<view class="cu-btn shadow verification_btn" v-else>{{count}}秒</view>
				</view>
			</view>
		</view>
		<button class="login_btn" open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo"  @tap="gotoLogin()">
			立即登录
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				verificationCode:'',
				wxOpenId:'',
				show:true,
				timer:null,
				count:'',
				userid:'',
				is_open_socket: false,
				socketTask: null,
				socketMsg:'',
				ScrollList:['1分钟前，无夏购买了会员','2分钟前，无夏购买了会员','3分钟前，无夏购买了会员'],
			}
		},
		methods: {
			// gotonext(){
			// 	uni.navigateTo({
			// 		url:'./role/role'
			// 	})
			// },
			gotoLogin(){
				let that = this;
				let openid = that.$Classification.openid;
				if(!that.phone){
					uni.showModal({
						title:'提示',
						content:'请输入手机号'
					});
					return;
				}else if(!that.verificationCode){
					uni.showModal({
						title:'提示',
						content:'请输入验证码'
					});
					return;
				};
				let params = {
					"phone":that.phone,
					"verificationCode":that.verificationCode,
					"wxOpenId":openid
				};
				let paramsStr = JSON.stringify(params);
				uni.request({
					url: that.$Classification.BASEURL+'/authority/login',
					method:"POST",
					data:paramsStr,
					header:{
						uniqueFlag:that.$Classification.uniqueFlag
					},
					success: function (res) {
						console.log('登陆内容:',res.data); 
						if(res.statusCode == 200){
							if(res.data.code == 201){
								uni.showToast({
									icon:'none',
									title: res.data.msg,
									duration: 2000
								});
							}else if(res.data.code == 200){
								// that.$Classification.userToken = res.data.object.token;
								uni.setStorageSync('userToken',res.data.object.token );
								that.wxGetUserInfo();
								uni.showToast({
									icon:'success',
									title: res.data.msg,
									duration: 2000
								});
							}else{
								uni.showToast({
									icon:'none',
									title: res.data.msg,
									duration: 2000
								});
							}
							if(res.data.object.flag == true){
								that.$Classification.userid = res.data.object.userid;
								// that.userid = res.data.object.userid;
								let useridStr = JSON.stringify(res.data.object.userid);
								uni.setStorageSync('userid',useridStr);
								// let useridStr = JSON.stringify({userid:123,type:1});
								// that.$Classification.connectSocketInit(useridStr);
								if(that.$Classification.loginUrl == 'test'){
									uni.navigateTo({
										url:'../test/test/test?categoryId='+that.$Classification.categoryId
									})
								}else{
									let useridStr = JSON.stringify(res.data.object.userid);
									uni.setStorageSync('userid',useridStr);
									that.userid = res.data.object.userid;
									if(that.$Classification.commonUrl){
										that.$Classification.loginToUrl(that.$Classification.commonUrl);
									}else{
										uni.navigateBack({
											delta:1
										});
									}
								}
							}else{
								that.$Classification.userid = res.data.object.userid;
								// that.userid = res.data.object.userid;
								let useridStr = JSON.stringify(res.data.object.userid);
								uni.setStorageSync('userid',useridStr);
								that.$Classification.connectSocketInit(useridStr);
								uni.navigateTo({
									url:'./role/role'
								})
							}
						}else{
							uni.showModal({
								title: '提示',
								content: '登陆失败，请重新登陆'
							});
						};
					}
				});
			},
			gotoPrev(){
				if(this.$Classification.loginUrl == 'detail'){
					uni.navigateBack({
						delta:1
					})
				}else if(this.$Classification.loginUrl == 'preRegister'){
					uni.navigateBack({
						delta:1
					})
				}else if(this.$Classification.loginUrl == 'home'){
					uni.reLaunch({
						url:'../home/main'
					})
				}else if(this.$Classification.loginUrl == 'test'){
					uni.reLaunch({
						url:'../test/main'
					})
				}else if(this.$Classification.loginUrl == 'analysis'){
					uni.reLaunch({
						url:'../home/main'
					})
				}else if(this.$Classification.loginUrl == 'testMain'){
					uni.reLaunch({
						url:'../home/main'
					})
				}else if(this.$Classification.loginUrl == 'selectMain'){
					uni.reLaunch({
						url:'../home/main'
					})
				}else if(this.$Classification.loginUrl == 'quick'){
					uni.reLaunch({
						url:'../home/main'
					})
				}else if(this.$Classification.loginUrl == 'search'){
					uni.reLaunch({
						url:'../home/main'
					})
				}else if(this.$Classification.loginUrl == 'parents'){
					uni.reLaunch({
						url:'../home/main'
					})
				}else if(this.$Classification.loginUrl == 'video'){
					uni.reLaunch({
						url:'../home/main'
					})
				}else if(this.$Classification.loginUrl == 'classification'){
					uni.reLaunch({
						url:'../home/main'
					})
				}else{
					uni.navigateBack({
						delta:1
					})
				}
			},
			getVerificationCode(){
				let that = this;
				if(!that.phone){
					uni.showModal({
						title:'提示',
						content:'请输入手机号'
					});
					return;
				};
				that.show = false;
				that.getCode();
				let phone = that.phone;
				
				let params = {
					phone:phone
				};
				
				uni.request({
				   url: that.$Classification.BASEURL+'/authority/verification-code',
				   method:"GET",
				   data:params,
				   header:{
					   uniqueFlag:that.$Classification.uniqueFlag
				   },
				   success: function (res) {
				    console.log('当前内容:',res);
					if(res.statusCode == 200){
						// uni.showModal({
						//     title: '提示',
						//     content: '验证码发送成功'
						// });
						uni.showToast({
							icon:'success',
							title:'验证码发送成功',
							duration: 2000
						})
					}else{
						uni.showLoading({
							title: '系统异常',
							mask:true
						})
					};
				   }
				});
			},
			getCode(){
				// this.show = false;
				const TIME_COUNT = 60;   
				if (!this.timer) {    
					this.count = TIME_COUNT;    
					// this.show = false;    
					this.timer = setInterval(() => {    
						if (this.count > 0 && this.count <= TIME_COUNT) {     
							this.count--;     
						} else {     
							this.show = true;     
							clearInterval(this.timer);     
							this.timer = null;     
						}    
					}, 1000)    
				}  
			},
		wxGetUserInfo() {
			let _this = this;
			uni.login({
				scopes: 'auth_base',
				success: (res) => {
					const {code} = res
				}
			})
			uni.getUserInfo({
				lang:'zh_CN',
				provider: 'weixin',
				success: function(infoRes) {
					console.log('当前内容:',infoRes);
					let nickName = infoRes.userInfo.nickName; //昵称
					let avatarUrl = infoRes.userInfo.avatarUrl; //头像
					uni.setStorageSync('nickName', nickName);
					uni.setStorageSync('avatarUrl', avatarUrl);
			// 		_this.$Classification.iv = infoRes.iv;
					// _this.$Classification.encryptedData = infoRes.encryptedData;
			// 		console.log('当前内容：',infoRes.encryptedData);
					// _this.getMoreInfo();
					try {
						uni.setStorageSync('isCanUse', false);//记录是否第一次授权  false:表示不是第一次授权
						// _this.updateUserInfo();
					} catch (e) {}
				},
				fail(res) {
				}
			});
		  },
			
		  // 进入这个页面的时候创建websocket连接【整个页面随时使用】
		  /*connectSocketInit(userid) {
		  	// 创建一个this.socketTask对象【发送、接收、关闭socket都由这个对象操作】
		  	this.socketTask = uni.connectSocket({
		  		// 【非常重要】必须确保你的服务器是成功的,如果是手机测试千万别使用ws://127.0.0.1:9099【特别容易犯的错误】
		  		url:this.$Classification.BASEWS,
		  		success(data) {
		  			console.log("websocket连接情况:",data);
		  		},
				complete: ()=> {}
		  	});
		  
		  	// 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】
		  	this.socketTask.onOpen((res) => {
		  		console.log("WebSocket连接正常打开中...！");
		  		this.is_open_socket = true;
		  		// 注：只有连接正常打开中 ，才能正常成功发送消息
		  		this.socketTask.send({
		  			data: userid,
		  			async success() {
		  				console.log("消息发送成功");
		  			},
		  		});
		  		// 注：只有连接正常打开中 ，才能正常收到消息
		  		this.socketTask.onMessage((res) => {
					if(res){
						this.socketMsg = res;
						console.log("收到服务器内容成功：" + res);
					}else{
						console.log("收到服务器内容失败：" + res);
					}
					
		  		});
		  	})
		  	// 这里仅是事件监听【如果socket关闭了会执行】
		  	this.socketTask.onClose(() => {
		  		console.log("已经被关闭了")
		  	})
		  },
		  //检测连接
		  checkWs(){
			  //心跳重连
				if([2,3].includes(socket.readyState)){//closing 或 closed
					socket.close();
					socket = null;
					openWs();		
				}
		  },*/
		  
		}
	}
</script>

<style scoped>
	.login_bg{
		width: 100%;
		height: 100vh;
		background-color: #70c7da;
		position: relative;
	}
	.background_img{
		height : 100%;
		position: absolute;
		width: 100%;
		left: 0px;
		top: 0px;
	}
	.login_back{
		position: relative;
		top: 5%;
		left: 5%;
		font-size: 38upx;
		z-index: 999;
	}
	.content{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
	}
	.login_titlebox{
		position: absolute;
		left:10%;
		top:12%;
	}
	.login_title{
		color: #3C3435;
		font-size: 60upx;
		font-weight:600;
	}
	.login_content{
		color: #827D7D;
		font-size: 28upx;
		font-weight: 400;
		margin-top: 20upx;
	}
	.login_box{
		position: absolute;
		left:10%;
		top:32%;
		width: 80%;

	}
	.mobile_box{
		background-color: #F3F3F3;
		color: #827D7D;
		border-radius:56upx;
		width: 90%;
		margin-left: 35upx;
	}
	.verification_code{
		border:0;
		background-color:transparent ;
		margin-top: 32upx;
	}
	.verification_input{
		width:384upx;
		height:112upx;
		background-color: #F3F3F3;
		color: #827D7D;
		border-radius:56upx;
		padding-left: 40upx;
		/* margin-left: -33upx; */
		/* text-indent: 33rpx; */
	}
	.verification_btn{
		background-color: #3C3435;
		color: #fff;
		width:232upx;
		height:108upx;
		font-size: 28upx;
		border-radius:56upx;
		margin-left: 12upx;
	}
	.login_btn{
		position: absolute;
		left:8%;
		top:53%;
		width:626upx;
		height:112upx;
		background:rgba(206,49,61,1);
		border-radius:56upx;
		color:#fff;
		font-size: 32upx;
		text-align: center;
		line-height: 112upx;
		margin: 32upx auto;
		z-index: 999;
	}
</style>
