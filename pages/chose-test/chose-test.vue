<template>
		<view class="content">
		<view class="my-common-my uni-padding-wrap">
			<view class="page-section-spacing">
				<view v-for="(test,index) in myAllTestList"
				 class="uni-card my-common-mb my-card-select-tap" :key="index" :class="[bgColor[index%4], {'my-card-selected':myIdList[index]==true}]"
				 @tap="changeSelect(index)">
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="my-card-des">
								<text>{{test.name}}</text>
								<text v-if="myIdList[index]==false" class="my-card-navigat-add">+</text>
								<text v-else class="my-card-navigat-add my-card-selected-text" style="margin-left: 520upx">✓</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="mySelectedNum==0" class="my-footer has-bg-red" @tap="confirmTest()">
			确认
		</view>
		<view v-else class="my-footer has-bg-red" @tap="confirmTest()">
			确认{{'('+mySelectedNum+')'}}
		</view>
		</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				mySelectedNum: 0,
				myAllTestList: [],
				myIdList: [],
				bgColor: [
					"my-bg-blue",
					"my-bg-green",
					"my-bg-bg",
					"my-bg-green"
				]
			};
		},
		methods: {
			changeSelect(index) {
				Vue.set(this.myIdList,index,!this.myIdList[index]);
				if(this.myIdList[index]==true) this.mySelectedNum++;
				else this.mySelectedNum--;
			},
			confirmTest() {
				Vue.prototype.chosenId=this.myIdList;
				Vue.prototype.selectedNum=this.mySelectedNum;
				console.log(this.selectedNum)
				uni.navigateBack({
					delta: 1
				})
			}
		},
		onLoad() {
			this.myAllTestList=this.allTests;
			this.myIdList=this.chosenId;
			this.mySelectedNum=this.selectedNum;
			console.log(this.selectedNum)
		},
		onUnload() {
			Vue.prototype.chosenId = this.myIdList;
			Vue.prototype.selectedNum = this.mySelectedNum;
		}
	}
</script>

<style>
	@import "../../common/train-test.css";
	.my-footer {
		margin-top: 10upx;
		line-height: 125upx;
		text-align: center;
		font-size: 50upx;
		width: 100%;
		height: 100%;
		top: 90%;
		background-color: red;
	}
</style>
