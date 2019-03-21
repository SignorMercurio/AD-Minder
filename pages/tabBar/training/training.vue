<template>
	<view class="content">
		<view class="uni-common-mt has-space-pd-10 has-pdtb-30
					 has-mglr-20 has-mgtb-20 my-bg-green
					 my-box-shadow-green">
			<text class="my-train-des">ADMinder 前测系列</text>
			<text class="navigat-arrow">&#xe65e;</text>
		</view>
		<br/>
		<view class="my-common-mt uni-padding-wrap　uni-common-mb">
			<view class="my-deco-box"></view>
			<text class="my-deco-box-text">我的自主测试</text>
		</view>
		<view class="my-common-mt uni-padding-wrap">
			<view class="page-section-spacing">
				<view v-for="(item,index) in myTestList" class="uni-card my-common-mb has-mglr-5 has-mgtb-20" :key="index" :class="bgColor[index%4]">
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="my-card-des">
								<text>{{item}}</text>
								<text class="my-card-navigat-arrow">&#xe65e;</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="uni-common-mt">
				<button @tap="addTest()">编辑测试</button>
				<button v-if="mySelectedNum>0" @tap="startTest()" type="warn">开始测试</button>
				<button v-else type="warn" disabled="true">请先添加测试</button>
			</view>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				mySelectedNum: 0,
				myTestList: [],
				myIdList: [],
				bgColor: [
					"my-bg-blue",
					"my-bg-green",
					"my-bg-bg",
					"my-bg-green",
				]
			};
		},
		methods: {
			decideBg(index) {
				console.log(index);
				console.log(this.bgColor[index%2]);
				return this.bgColor[index%2];
			},
			
			addTest() {
				this.$ajax('checkSession', null, ret => {
					if (ret.data === 1) {
						this.$msg('请先登录');
					}
					else {
						uni.navigateTo({
							url: "../../chose-test/chose-test",
						});
					}
				});
			},
			
			startTest() {
				uni.navigateTo({
					url:"../../start-test/start-test"
				})
			}
		},
		onShow() {
			this.myIdList=this.chosenId;
			this.myTestList=[];
			this.mySelectedNum=this.selectedNum;
			var cnt=0;
			for(var i=0;i<this.myIdList.length;i++) {
				if(this.myIdList[i]==true) {
					this.myTestList = this.myTestList.concat(this.allTests[i].name);
				}
			}
		}
	}
</script>

<style>
	@import "../../../common/train-test.css";
	view.uni-common-mt button {
		margin-bottom: 30upx;
	}
</style>
