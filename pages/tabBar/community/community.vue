<template>
	<view>
		<view class="uni-padding-wrap">
			<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" styleType="text" activeColor="#8bc34a"></uni-segmented-control>

			<view v-for="(idx,keys) in [0,1,2]" :key="keys" v-show="current === idx">
				<view class="uni-card" style="border-radius: 15upx;" v-for="(value, key) in listData[idx]" :key="key" @click="goDetail(value.id)" @longpress="del_article(keys, value.id)">
					<view class="uni-card-header">
						<text class="uni-ellipsis" style="width: 80%">{{value.title}}</text>
						<view class="tag-view">
							<uni-tag :text="value.type === 'art' ? '文章':'问答'" :type="value.type === 'art' ? 'royal':'warning'" inverted="true" circle="true"></uni-tag>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							{{value.content}}
						</view>
					</view>
					<view class="uni-card-footer">
						<view class="uni-flex uni-row">
							<i class="iconfont">&#xe654;</i>
							<view>赞同 {{value.agrees}}</view>
						</view>
						<view class="uni-flex uni-row">
							<i class="iconfont">&#xe600;</i>
							<view>评论 {{value.cnt}}</view>
						</view>
					</view>
				</view>
				<view v-if="keys !== 0 && blank[keys-1]" class="feedback-title">
					这里还没有文章
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniTag from '@/components/uni-tag.vue';
	import uniSegmentedControl from '@/components/uni-segmented-control.vue';

	export default {
		components: {
			uniTag,
			uniSegmentedControl
		},
		data() {
			return {
				items: [
					'全部',
					'创建',
					'收藏'
				],
				current: 0,
				listData: [
					[],
					[],
					[]
				],
				list_name: ['articleList', 'user/myArticle', 'user/liked'],
				blank: [false, false]
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			del_article: function(type, val) {
				if (type === 1) {
					uni.showActionSheet({
						itemList: ['删除', '取消'],
						success: e => {
							if (e.tapIndex === 0) {
								uni.showModal({
									title: '删除',
									content: '确定要删除吗？',
									success: ret => {
										if (ret.confirm) {
											this.$ajax('user/delete', {
												id: val
											}, ret => {
												this.$msg('删除成功', 'success');
												this.getList(1);
											});
										}
									}
								});
							}
						}
					});
				}
			},
			getList: function(val) {
				this.$set(this.listData, val, []);

				this.$ajax(this.list_name[val], null, ret => {
					if (ret.data[0] !== '<') {
						if (val !== 0) {
							this.$set(this.blank, val-1, ret.data == '');
						}
						const temp_list = this.listData[val].slice(0);
						for (let item in ret.data) {
							temp_list.push(ret.data[item]);
						}
						this.$set(this.listData, val, temp_list);
					} else {
						this.$set(this.blank, 0, true);
						this.$set(this.blank, 1, true);
					}
				});
			},
			goDetail: function(val) {
				this.$ajax('articleDetail', {
					id: val
				}, ret => {
					uni.navigateTo({
						url: '../../article-detail/article-detail?id=' + val
					});
				})
			}
		},
		onShow() {
			for (let i = 0; i < 3; ++i) {
				this.getList(i);
			}
			this.current = 0;
		},
		onPullDownRefresh() {
			for (let i = 0; i < 3; ++i) {
				this.getList(i);
			}
			
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>

<style>
	page {
		height: auto;
	}

	.uni-card {
		margin-top: 50upx;
	}

	.page {
		padding-top: 60upx;
	}

	.image-view {
		height: 480upx;
		overflow: hidden;
	}

	.image {
		width: 100%;
	}
	
	.iconfont {
		color: #8bc34a;
		margin-right: 10upx;
		line-height: 50upx;
	}
</style>
