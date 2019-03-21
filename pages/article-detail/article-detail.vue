<template>
	<view>
		<view class="uni-card">
			<view class="uni-card-header">
				<text style="width: 70%">{{(detail.type !== 'ans' ? '' : 'Re') + detail.title}}</text>
				<view>
					<button v-if="detail.type !== 'ans'" type="primary" plain="true" size="mini" @tap="com_ans(detail.id)">添加回复</button>
				</view>
			</view>
			<view class="uni-card-footer">{{detail.author}} 发表于 {{detail.date}}</view>
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
					{{detail.content}}
				</view>
			</view>
			<view class="uni-card-footer">
				<view class="uni-flex uni-row" @tap="set_agree">
					<i v-if="agreed" class="iconfont">&#xe654;</i>
					<i v-if="!agreed" class="iconfont" style="color: #999">&#xe654;</i>
					<view>{{agreed ? '已':''}}赞同 {{detail.agrees}}</view>
				</view>
				<view class="uni-flex uni-row" @tap="set_like">
					<i v-if="liked" class="iconfont" style="color: #f0ad4e; font-size: 20px;">&#xe86a;</i>
					<i v-if="!liked" class="iconfont" style="color: #f0ad4e; font-size: 20px;">&#xe7df;</i>
					<view>{{liked ? '已':''}}收藏</view>
				</view>
			</view>
		</view>

		<view class="uni-card" v-for="(value,key) in listData" :key="key">
			<view class="uni-card-header" @tap="check_comment(value.id)">
				<view class="uni-comment-list">
					<view class="uni-comment-face">
						<image :src="imgsrc[key]" mode="widthFix"></image>
					</view>
					<view class="uni-comment-body">
						<view class="uni-comment-top"><text>{{value.author}}</text></view>
						<view class="uni-comment-content">{{value.content}}</view>
						<view class="uni-comment-date">
							<view>{{value.date}}</view>
							<view class="uni-flex uni-row">
								<uni-icon type="arrowup" size="16"></uni-icon>
								<view>赞同 {{value.agrees}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon.vue';

	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				detail: {},
				listData: [],
				agreed: 0,
				liked: 0,
				imgsrc: []
			};
		},
		methods: {
			com_ans: function(val) {
				uni.navigateTo({
					url: '../post-article/post-article?type=' +
						(this.detail.type === 'art' ? 'comment' : 'answer') + '&id=' + val
				});
			},
			get_list() {
				this.imgsrc = [];
				this.$ajax('get' + (this.detail.type === 'art' ? 'Comment' : 'Answer'), {
					id: this.detail.id
				}, ret => {
					for (let item in ret.data) {
						this.listData.push(ret.data[item]);
						this.$ajax('getPic', {
							username: ret.data[item].author
						}, res => {
							this.$set(this.imgsrc, item, '../../static/' + res.data + '.jpg');
						});
					}
				});
			},
			get_agreed() {
				this.$ajax('user/hasAgreedIt', {
					id: this.detail.id
				}, ret => {
					this.agreed = (ret.data === 1);
				});
			},
			get_liked() {
				this.$ajax('user/hasLikedIt', {
					id: this.detail.id
				}, ret => {
					this.liked = (ret.data === 1);
				});
			},
			set_agree() {
				this.$ajax('user/setAgree', {
					id: this.detail.id,
					new_val: 1 - this.agreed
				}, ret => {
					if (ret.data[0] !== '<') {
						this.agreed = 1 - this.agreed;
						this.detail.agrees += (this.agreed === 1 ? 1 : -1);
					} else {
						this.$msg('请先登录');
					}
				});
			},
			set_like() {
				this.$ajax('user/setLike', {
					id: this.detail.id,
					new_val: 1 - this.liked
				}, ret => {
					if (ret.data[0] !== '<') {
						this.liked = 1 - this.liked;
					} else {
						this.$msg('请先登录');
					}
				});
			},
			check_comment: function(val) {
				uni.navigateTo({
					url: './article-detail?id=' + val
				});
			}
		},
		onLoad(event) {
			this.$ajax('articleDetail', {
				id: event.id
			}, ret => {
				this.detail = ret.data;
				this.get_agreed();
				this.get_liked();
				this.get_list();
			});
		},
		onPullDownRefresh() {
			this.listData = [];
			this.get_list();

			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>

<style>
	.iconfont {
		color: #8bc34a;
		margin-right: 10upx;
		line-height: 50upx;
	}
</style>
