<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="title_part" v-if="has_title">
				<view class="feedback-title">
					<text>{{(type === 'article' ? '文章':'问题') + '标题'}}</text>
				</view>
				<input class="uni-input" focus :placeholder="'请输入' + (type === 'article' ? '文章':'问题') + '标题'" v-model="art.title" />
			</view>

			<view class="feedback-title">
				<text>{{type_cn}}</text>
			</view>
			<view class="feedback-body">
				<textarea :placeholder="'请输入'+type_cn" v-model="art.content" class="feedback-textare" />
			</view>
			
			<view class="uni-common-mt">
				<button type="primary" plain="true" @tap="submit">发&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;布</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: '',
				id: 0,
				type_cn: '',
				has_title: true,
				art: {
					title: '',
					content: ''
				},
				items: [{
					value: 'AnArticle',
					name: '文章',
					check: 'true'
				}, {
					value: 'AQuestion',
					name: '提问'
				}],
				current: 0
			}
		},
		methods: {
			submit() {
				var url = this.type;
				var _data = {
					id: this.id,
					content: this.art.content
				};
				
				if (this.has_title) {
					url = (this.type === 'article' ? 'postAnArticle':'postAQuestion');
					_data = {
						title: this.art.title,
						content: this.art.content
					};
				}
				
				this.$ajax('user/' + url, _data, ret => {
					if (ret.data === 0) {
						this.$msg('发布成功', 'success');
						this.$back();
					} else if (ret.data === 1) {
						this.$msg('发布失败');
					}
					else {
						this.$msg('请先登录');
					}
				});
			}
		},
		onLoad(event) {
			this.type = event.type;
			this.id = event.id;
			if (this.type === 'article') {
				this.type_cn = '文章内容';
			}
			else if (this.type === 'question') {
				this.type_cn = '问题描述';
			}
			else {
				this.has_title = false;
				if (this.type === 'comment') {
					this.type_cn = '评论内容';
				}
				else {
					this.type_cn = '回答内容';
				}
			}
			uni.setNavigationBarTitle({
				title: '发布' + this.type_cn[0] + this.type_cn[1]
			})
		}
	}
</script>

<style>
	.uni-list-cell {
		justify-content: flex-start
	}
</style>
