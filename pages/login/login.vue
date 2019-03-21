<template>
	<view class="s-page-wrapper is-100vh">
		<view class="is-33vh has-mgt-25">
			<view class="is-flex is-column is-justify-center is-align-center is-height-100">
				<image src="../../static/default_avatar.png" mode="aspectFit" class="logoimg"></image>
			</view>
		</view>
		<view class="content has-mgt-25">
			<view class="has-mglr-10 ">
				<view class=" has-mgtb-10 ">
					<input type="text" v-model="login.username" placeholder="请输入用户名" class="is-input1 " />
				</view>
				<view class=" has-radius has-mgtb-10">
					<input type="text" v-model="login.password" placeholder="请输入登录密码" :password="true" class="is-input1" />
				</view>

				<view class=" loginbtn has-radius has-mgtb-20">
					<button :loading="login.loading" @tap="sign_in"> {{ login.loading ? "登 录 中 . . .":"登     录"}} </button>
				</view>
			</view>
		</view>
		<view class="is-20vh has-mgt-80 content">
			<navigator url="./register" class=" has-radius is-center is-white has-mgb-10" hover-class="">
				<text>没有账户？</text>
				<text class="is-blue">点击注册</text>
			</navigator>
			<navigator url="./retrieve" class=" has-radius is-center is-white" hover-class="">
				<text>忘记密码？</text>
				<text class="is-blue">点击找回</text>
			</navigator>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				login: {},
			};
		},
		methods: {
			sign_in() {
				this.login.loading = true;
				setTimeout((e => {
					this.login.loading = false;
				}), 2000);
				
				this.$ajax('signIn', {
					username: this.login.username,
					password: this.login.password
				}, ret => {
					if (ret.data === 0) {
						this.$msg('登录成功', 'success');
						uni.setStorageSync('login_state', true);
						setTimeout(function() {
							uni.switchTab({
								url:'../tabBar/my/my'
							});
						}, 500);
						
					}
					else if (ret.data === 1) {
						this.$msg('用户名或密码错误');
					}
				});
			}
		}
	}
</script>

<style>
	@import "../../static/css/simplepro.css";
	
	page {
		min-height: 100%;
		background-color: #8bc34a;
	}

	.content {
		width: 85%;
		margin: 0 auto;
	}

	.loginbtn button {
		margin-top: 20rpx;
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		color: #333;
		font-size: 32rpx;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		margin: 0;
		font-family: inherit;
		background: #fff;
		opacity: 0.8;
	}

	button:after {
		border: 2rpx solid #f2f2f2;
	}

	.logoimg {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
	}

	.is-input1 {
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		padding: 12rpx;
		color: #353535;
		font-size: 32rpx;
		box-sizing: border-box;
		appearance: none;
		border: 2rpx solid #e5e5e5;
		box-shadow: none;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		padding-left: 30rpx;
		margin: 0;
		font-family: inherit;
		background: #fff;
		resize: none;
	}
</style>
