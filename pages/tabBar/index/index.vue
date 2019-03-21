<template>
	<view class="content">
		<view class="header">
			<view class="input-view">
				<uni-icon type="search" size="22" color="#666666"></uni-icon>
				<input confirm-type="search" @confirm="search_confirm" class="input" type="text" placeholder="搜索感兴趣的内容..." />
			</view>
		</view>

		<view class="uni-common-mt uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
						<swiper-item>
							<view class="swiper-item">
								<image src="../../../static/ad1.png"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../../static/ad2.png"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../../static/ad3.png"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<view class="uni-common-mt uni-padding-wrap">
			<view class="uni-flex uni-row">
				<view class="flex-item uni-bg-red" @tap="switch_train">
					<view class="uni-flex uni-column">
						<i class="iconfont">&#xe69c;</i>
						<text>参加训练</text>
					</view>
				</view>

				<view class="flex-item uni-bg-green" @tap="post_article">
					<view class="uni-flex uni-column">
						<i class="iconfont">&#xe7e1;</i>
						<text>发布文章</text>
					</view>
				</view>
				<view class="flex-item uni-bg-blue" @tap="post_question">
					<view class="uni-flex uni-column">
						<i class="iconfont">&#xe680;</i>
						<text>发布问题</text>
					</view>
				</view>
			</view>
		</view>

		<view class="uni-list uni-common-mt">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.cover"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{value.title}}</view>
						<view class="uni-media-list-text-bottom">
							<text>{{value.author}}</text>
							<text>{{value.published_at}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import uniIcon from '../../../components/uni-icon.vue';

	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				listData: [{
					id: 1,
					title: '什么是阿尔茨海默症？',
					author: '周周复始',
					published_at: '5小时前',
					cover: '../../../static/ad1.png'
				}, {
					id: 2,
					title: '怎样预防阿尔茨海默症？',
					author: '周周复始',
					published_at: '3小时前',
					cover: '../../../static/ad2.png'
				}, {
					id: 3,
					title: '如何看护阿尔茨海默症患者？',
					author: '周周复始',
					published_at: '1小时前',
					cover: '../../../static/ad3.png'
				}, {
					id: 4,
					title: '阿尔茨海默症的相关影视作品推荐',
					author: '周周复始',
					published_at: '刚刚',
					cover: '../../../static/ad4.png'
				}]
			}
		},
		methods: {
			search_confirm() {
				this.$msg('搜索功能还在开发中^_^');
			},
			switch_train() {
				uni.switchTab({
					url: '../training/training'
				});
			},
			post_article() {
				uni.navigateTo({
					url: '../../post-article/post-article?type=article'
				});
			},
			post_question() {
				uni.navigateTo({
					url: '../../post-article/post-article?type=question'
				});
			},
			goDetail: function(val) {
				uni.navigateTo({
					url: "../../list-detail/list-detail?value=" + encodeURIComponent(JSON.stringify(val))
				});
			}
		},
		onLoad() {
			this.$ajax('checkSession', null, ret => {
				uni.setStorageSync('login_state', ret.data === 0);
			});
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>

<style>
	.header {
		display: flex;
		flex-direction: row;
		padding: 10px 15px;
		align-items: center;
	}

	.input-view {
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 10px;
		flex: 1;
	}

	.input {
		flex: 1;
		padding: 0 5px;
		height: 24px;
		line-height: 24px;
		font-size: 16px;
	}

	.icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-right: 10px;
	}

	.swiper {
		height: 300upx;
	}

	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}

	.flex-item {
		margin: 15upx;
		width: 30%;
		height: 180upx;
		text-align: center;
		border-radius: 15upx;
	}

	.uni-media-list-logo {
		width: 180upx;
		height: 140upx;
	}

	.uni-media-list-body {
		height: auto;
		justify-content: space-around;
	}

	.uni-media-list-text-top {
		height: 74upx;
		font-size: 28upx;
		overflow: hidden;
	}

	.uni-media-list-text-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.iconfont {
		font-size: 34px;
	}
</style>
