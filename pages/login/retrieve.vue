<template>
	<view class="s-page-wrapper is-100vh">
		<view class="is-33vh has-mgt-25">
			<view class="is-flex is-column is-justify-center  is-align-center is-height-100">
				<image src="../../static/default_avatar.png" mode="aspectFit" class="logoimg"></image>
			</view>
		</view>
		<view class="registercontent has-mgt-25">
			<view class="has-mglr-10 ">
				<view class=" has-mgtb-10 ">
					<input v-model="reg.mail" type="text" placeholder="请输入注册的邮箱地址" class="is-input1 " />
				</view>
				<view class=" has-mgtb-10 ">
					<input v-model="reg.vcode" type="number" maxlength="6" placeholder="验证码" class="is-input1 " />
					<view class="codeimg" @tap="get_vcode">{{vBtnTxt}}</view>
				</view>
				<view class=" has-radius has-mgtb-10">
					<input v-model="reg.password" placeholder="请输入新密码" :password="true" class="is-input1" />
				</view>
				<view class=" registerbtn has-radius has-mgtb-20">
					<button @tap="retrieve">重 置</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vBtnTxt: '获取验证码',
				reg: {},
			};
		},
		methods: {
			checkNsend(_data) {
				this.$ajax('checkMail', _data, ret => {
					if (ret.data === 1) {
						this.vBtnTxt = '请稍等';
						this.$ajax('XsendMail', _data, ret => {
							if (ret.data === 0) {
								this.$msg('邮件发送成功', 'success');
							} else {
								this.$msg('邮件发送失败');
							}
						});
					} else {
						this.$msg('邮箱地址非法');
					}
				});
			},
			get_vcode() {
				var reg_exp = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
				if (reg_exp.test(this.reg.mail)) {
					this.checkNsend({
						mail: this.reg.mail
					});
				} else {
					this.$msg('请输入合法的邮箱');
				}
			},
			retrieve() {
				this.$ajax('retrievePassword', {
					mail: this.reg.mail,
					verifyCode: this.reg.vcode,
					password: this.reg.password
				}, ret => {
					if (ret.data === 0) {
						this.$msg('重置成功', 'success');
						this.$back();
					}
					else if (ret.data === 1) {
						this.$msg('验证码错误');
					}
					else if (ret.data === 2) {
						this.$msg('重置失败');
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

	.registercontent {
		width: 85%;
		margin: 0 auto;
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

	.iconfont {
		position: absolute;
		font-size: 40rpx;
		right: 12%;
		z-index: 999;
		width: 105rpx;
		text-align: center;
		color: #353535;
		margin-top: -11%;
		background: #fff;
		border-top-right-radius: 44rpx;
		border-bottom-right-radius: 44rpx;
		height: 80rpx;
		line-height: 80rpx;
	}

	.codeimg {
		position: absolute;
		font-size: 28rpx;
		right: 12%;
		z-index: 999;
		width: 200rpx;
		text-align: center;
		color: #353535;
		margin-top: -11%;
		background: #fff;
		border-top-right-radius: 44rpx;
		border-bottom-right-radius: 44rpx;
		height: 80rpx;
		line-height: 80rpx;
	}

	.registerbtn button {
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
</style>
