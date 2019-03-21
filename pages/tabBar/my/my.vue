<template>
	<view class="center">
		<view class="logo" @click="Login" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="userInfo.avatarUrl" @tap="show_middle"></image>
			<view class="logo-title">
				<text class="user-name">您好，{{userInfo.username}}</text>
				<i class="iconfont" v-if="!login" style="color: #fff">&#xe955;</i>
			</view>
		</view>

		<uni-popup :show="showMiddle" :type="middle" v-on:hidePopup="hide_middle">
			<image class="image" style="width:100upx;height:200upx;" v-for="(value,key) in imgvals" :key="key" :src="'../../../static/' + value + '.jpg'"
			 @tap="change_avatar(value)" />
		</uni-popup>

		<view class="center-list">
			<view class="center-list-item" style="height: 50upx;">
				<text class="list-text">注意力与计算力</text>
			</view>
			<view class="center-list-item" style="height: 70upx;">
				<progress :percent="userInfo.t1" active show-info color="#8bc34a" stroke-width="10" />
			</view>
			<view class="center-list-item" style="height: 50upx;">
				<text class="list-text">定向力</text>
			</view>
			<view class="center-list-item" style="height: 70upx;">
				<progress :percent="userInfo.t2" active show-info color="#8bc34a" stroke-width="10" />
			</view>
			<view class="center-list-item" style="height: 50upx;">
				<text class="list-text">短时记忆</text>
			</view>
			<view class="center-list-item" style="height: 70upx;">
				<progress :percent="userInfo.t3" active show-info color="#8bc34a" stroke-width="10" />
			</view>
			<view class="center-list-item" style="height: 50upx;">
				<text class="list-text">延时记忆</text>
			</view>
			<view class="center-list-item" style="height: 70upx;">
				<progress :percent="userInfo.t4" active show-info color="#8bc34a" stroke-width="10" />
			</view>
		</view>

		<view class="center-list">
			<view class="center-list-item" hover-class="uni-list-cell-hover" @tap="new_msg">
				<i class="iconfont">&#xe639;</i>
				<text class="list-text">新消息通知</text>
				<i class="iconfont">&#xe955;</i>
			</view>
			<view class="center-list-item" hover-class="uni-list-cell-hover" @tap="feedback">
				<i class="iconfont">&#xe69b;</i>
				<text class="list-text">问题反馈</text>
				<i class="iconfont">&#xe955;</i>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item" hover-class="uni-list-cell-hover" @tap="Logout">
				<i class="iconfont">&#xe723;</i>
				<text class="list-text">注销账号</text>
				<i class="iconfont">&#xe955;</i>
			</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from '../../../components/uni-popup.vue';

	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				login: false,
				userInfo: {
					username: '您尚未登录',
					avatarUrl: '../../../static/default_avatar.png',
					t1: 0,
					t2: 0,
					t3: 0,
					t4: 0
				},
				showMiddle: false,
				imgvals: [0, 1, 2, 3]
			}
		},
		methods: {
			hide_middle() {
				this.showMiddle = false;
			},
			show_middle() {
				if (this.login) {
					this.showMiddle = true;
				}
			},
			change_avatar: function(val) {
				this.$ajax('user/setPic_profile', {
					pic_profile: val
				}, ret => {
					if (ret.data === 0) {
						this.$msg('头像更改成功', 'success');
						this.hide_middle();
						this.userInfo.avatarUrl = '../../../static/' + val + '.jpg';
					} else if (ret.data === 1) {
						this.$msg('头像更改失败');
					} else console.log(JSON.stringify(ret));
				});
			},
			Login() {
				if (!this.login) {
					uni.navigateTo({
						url: '../../login/login',
					});
				}
			},
			Logout() {
				if (this.login) {
					uni.showModal({
						title: '注销',
						content: '确定要注销吗？',
						success: ret => {
							if (ret.confirm) {
								this.$ajax('signOut', null, () => {
									this.$msg('注销成功', 'success');
									this.userInfo = {
										username: '您尚未登录',
										avatarUrl: '../../../static/default_avatar.png'
									};
									this.login = false;
									uni.setStorageSync('login_state', false);
								});
							}
						}
					});
				}
			},
			new_msg() {
				uni.navigateTo({
					url: '../../new-msg/new-msg'
				});
			},
			feedback() {
				uni.navigateTo({
					url: '../../feedback/feedback'
				});
			}
		},
		onShow() {
			this.login = uni.getStorageSync('login_state');
			if (this.login) {
				this.$ajax('user/info', null, ret => {
					this.userInfo.username = ret.data.username;
					this.userInfo.avatarUrl = '../../../static/' + ret.data.pic_profile + '.jpg';
					this.userInfo.t1 = ret.data.t1;
					this.userInfo.t2 = ret.data.t2;
					this.userInfo.t3 = ret.data.t3;
					this.userInfo.t4 = ret.data.t4;
				});
			}
		}
	}
</script>

<style>
	page,
	view {
		display: flex;
	}

	page {
		background-color: #f8f8f8;
	}

	.center {
		flex-direction: column;
	}

	.logo {
		width: 750upx;
		height: 240upx;
		padding: 20upx;
		box-sizing: border-box;
		background-color: #8bc34a;
		flex-direction: row;
		align-items: center;
	}

	.logo-hover {
		opacity: 0.8;
	}

	.logo-img {
		width: 150upx;
		height: 150upx;
		border-radius: 150upx;
	}

	.logo-title {
		height: 150upx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20upx;
	}

	.user-name {
		height: 60upx;
		line-height: 60upx;
		font-size: 38upx;
		color: #FFFFFF;
	}

	.go-login.navigat-arrow {
		font-size: 38upx;
		color: #FFFFFF;
	}

	.login-title {
		height: 150upx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20upx;
	}

	.center-list {
		background-color: #FFFFFF;
		margin-top: 20upx;
		width: 750upx;
		flex-direction: column;
	}

	.center-list-item {
		height: 90upx;
		width: 750upx;
		box-sizing: border-box;
		flex-direction: row;
		padding: 0upx 20upx;
	}

	.border-bottom {
		border-bottom-width: 1upx;
		border-color: #c8c7cc;
		border-bottom-style: solid;
	}

	.iconfont {
		width: 40upx;
		height: 90upx;
		line-height: 90upx;
		text-align: center;
		margin-right: 20upx;
		color: #8bc34a;
	}

	.list-text {
		height: 90upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #555;
		flex: 1;
		text-align: left;
	}

	.navigat-arrow {
		height: 90upx;
		width: 40upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #555;
		text-align: right;
		font-family: texticons;
	}
</style>
