<template>
	<view class="has-mgt-50">
		<view class="has-mgt-61" style="font-size: 128upx;color: #576B95">
			您的得分为
		</view>
		<view style="font-size: 200upx; color: #576B95">
			{{myScore}}
		</view>
		<view style="font-size: 128upx; color: #576B95">
			加油
		</view>
		<view class="my-mgt-infty uni-padding-wrap">
			<button @tap="reloadPrev()" type="default" style="margin-right: 5%;">重新训练</button>
			<button @tap="goBack2()" type="primary" style="margin-left: 5%;">返回</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timer: '',
				myScore: 0
			}
		},
		methods: {
			reloadPrev() {
				uni.showLoading({
					title: "准备中"
				})
				this.timer = setInterval(function() {
					clearInterval(this.timer);
					uni.hideLoading();
				}, 1000)
				uni.redirectTo({
					url: "../start-test/start-test"
				})
			},
			goBack2() {
				uni.navigateBack({
					delta: 2
				})
			}
		},
		onLoad(option) {
			console.log(option.myScore)
			this.myScore = Math.floor(option.myScore);
		},
		onShow() {}
	}
</script>

<style>
	view {
		text-align: center !important;

	}

	view.has-mgt-61 {
		margin-top: 80upx !important;
	}

	view.my-mgt-infty {
		margin-top: 200upx !important;
	}

	view.my-mgt-infty button {
		display: inline-block;
		width: 42%;
		margin-left: 3%;
		/*  margin-right: 0%*/
	}
</style>
