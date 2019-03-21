<template style="background-color: #FFFFFF;">
	<view style="background-color: #FFFFFF;">
		<view class="my-testing-head">
			<view class="my-testing-bar">
				<view class="my-testing-progress-pd">
					<progress :percent="curNum/totNum*100" stroke-width="4" active="true"
							  active-mode="forwards" 
							  activeColor="white" background-color="#8bc34a"/> 
				</view>
			</view> 
			<view class="my-testing-content-header my-testing-content">
				{{testName}} · 难度{{testDiff}}
			</view>
			<view :animation="animationData" class="has-mgb-0" style="width: 100%">
				<!--<view class="my-testing-content-des">
					请回答以下问题
				</view>-->
				<view v-if="curId>=1&&curId<=199" class="my-image-wrapper">
					<image :src="source" style="width: 100%"></image>
				</view>
				<view v-if="curId>=3001&&curId<=3999" class="my-audio-wrapper">
					<block v-if="hasExeDes==true">
						<audio @ended="type3FadeIO()" :src="source" author="来源网络" name="题目音频" :poster="pSrc" controls></audio>
					</block>
					<view v-if="hasExeDes==false" class="my-testing-audio-question" style="text-align: center; font-size: 50upx;">
						{{myQuestion}}
					</view>
				</view>
				<view v-if="curId>=301&&curId<=399" class="my-video-wrapper">
					<block v-if="hasExeDes==true">
						<video id="myVideo" :src="source" autoplay=true objectFit="cover" @error="videoErrorCallback"
							@ended="type3FadeIO()">
						</video>
					</block>
					<view v-if="hasExeDes==false" class="my-testing-question" style="text-align: center; font-size: 50upx;">
						{{myQuestion}}
					</view>
				</view>
				<view v-if="curId>=201&&curId<=203" class="my-grid-wrapper">
					<view v-if="curId==203" class="uni-grid-16">
						<view v-for="(item,index) in 16" @tap="type2SelectBlock(index)" :key="index" :class="matrix[index]" class="uni-grid-16-item uni-grid-item-hover" style="text-align: center;">
						</view>
					</view>
					<view v-if="curId==202" class="uni-grid-9">
						<view v-for="(item,index1) in 9" @tap="type2SelectBlock(index1)" :key="index1" :class="matrix[index1]" class="uni-grid-9-item uni-grid-item-hover" style="text-align: center;">
						</view>
					</view>
					<view v-if="curId==201" class="uni-grid-4">
						<view v-for="(item,index2) in 4" @tap="type2SelectBlock(index2)" :key="index2" :class="matrix[index2]" class="uni-grid-4-item uni-grid-item-hover" style="text-align: center;">
						</view>
					</view>					
				</view>
			</view>
		</view>
		<view :animation="animationData" class="my-testing-button-area has-mgt-35 uni-padding-wrap" style="background-color: #FFFFFF;">
			<block>
				<view v-if="!(curId>=201&&curId<=203)&&hasExeDes==false" v-for="(item, index3) in mySelections" :key="index3">
					<button v-if="curState==0" type="default" @tap="choseIndex(index3)">{{item}}</button>
					<button v-else-if="curState==1&&correctIdx==index3" type="primary">{{item}}</button>
					<button v-else-if="curState==1&&correctIdx!=index3" disabled="true">{{item}}</button>
					<button v-else-if="curState<0&&correctIdx==index3" type="primary">{{item}}</button>
					<button v-else-if="curState<0&&(-1)*curState+(-1)==index3" type="warn" disabled="true">{{item}}</button>
					<button v-else disabled="true">{{item}}</button>
				</view>
				<view v-if="curId>=201&&curId<=203&&hasExeDes==false" class="my-testing-button-area my-mgt-62">
					<button v-if="curState==0" type="default" @tap="choseIndex(-2)">确定</button>
					<button v-else-if="curState==1" type="primary">确定</button>
					<button v-else-if="curState==-1" type="warn" disabled="true">确定</button>
				</view>
				<view :animation="animationData" class="has-pdlr-20" v-if="hasExeDes==true" style="vertical-align: middle;text-align: center; font-size: 50upx; color: #576B95 !important;">
					{{exeDes}}
				</view>
				<image :animation="animationData" v-if="hasExeDes==true&&((curId>=301&&curId<=399)||(curId>=3001&&curId<=3999))" class="has-mgtb-25" style="margin-left:20upx ;height: 250upx;" src="../../static/this.gif"></image>
			</block>
		</view> 
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				myCurId: 0,
				
				indicatorstyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
				pSrc: require("../../static/videoCover.png"),
				source: '',
				
				myExes: [],
				
				animationData: {},
				timer: '',
				
				value: ["白天",0,0],
				sections: '',
				hours: 0,
				minutes: 0,
				needPV: false,
				testName: '',
				testDiff: 0,
				ansArray: [],
				subArray: [],
				curId: 0,
				matrix: [],
				hasExeDes: false,
				lastState: 0,
				curState: 0,
				correctIdx: 0,
				exeDes: '',
				myQuestion: '',
				
				totScore: 0,
				curPoints: 0,
				totNum: 0,
				curNum: 0,
				mySelections: []
			}
		},
		methods: {
			bindChange: function(e) {
				var val=e.detail.value;
				this.sections=(val[0]==0?"上午":"下午");
				this.hours=val[1];
				this.minutes=val[2]
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				});
			},
			type2SelectBlock(index) {
				if(this.hasExeDes==true||this.curState!=0) return ;
				Vue.set(this.subArray,index,!this.subArray[index]);
				Vue.set(this.matrix,index,(this.matrix[index]=="my-testing-type2-bgBlue"?"my-testing-type2-bgWhite":"my-testing-type2-bgBlue"));
			},
			choseNext() {
				clearInterval(this.timer);
				var animation=uni.createAnimation({
					duration: 500,
					timingFunction: "ease"
				})
				this.animation=animation;
				this.animation.opacity(0+this.curNum*0.000001).step();
				if(this.curNum!=this.totNum) {
					this.animation.opacity(1-this.curNum*0.000001).step();
				}
				this.animationData=this.animation.export();
				this.timer=setInterval(function(){
					clearInterval(this.timer);
					if(this.curNum==this.totNum) {
						this.showScore();
						return ;
					}
					this.curState=0;
					this.nextExe();
				}.bind(this),500)
				
			},
			showScore() {
				uni.redirectTo({
					url: "../show-score/show-score?myScore="+this.totScore,
				})
			},
			choseIndex(index) {
				console.log(index);
				this.curNum++;
				if(index==-2) {
					var flag=true;
					for(var i=0;i<this.subArray.length;i++) {
						if(this.subArray[i]==this.ansArray[i]) continue;
						else {
							flag=false;
							if(this.ansArray[i]==true)
								Vue.set(this.matrix,i,"my-testing-type2-bgnBlue");
							else 
								Vue.set(this.matrix,i,"my-testing-type2-bgRed");
						} 
					}
					if(flag==true) {
						this.playMusic();
						this.curState=1;
						this.totScore+=this.curPoints;
					}
					else this.curState=-1;
					console.log(this.curState);
				}
				else {
					if(index==this.correctIdx) {
						this.curState=1;
						this.totScore+=this.curPoints;
						this.playMusic();
					}
					else {
						this.curState=index*(-1)-1;
					}
				}
				this.timer=setInterval(this.choseNext, 2000);
			},
			playMusic() {
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = '../../static/right.mp3';
			},
			nextExe() {
				var chosen=(this.myCurId++);
				var ins=this.myExes[chosen];
				this.hasExeDes=ins.hasExeDes;
				this.curState=0;
				if(this.hasExeDes) this.exeDes=ins.exeDes;
				this.testName=this.allTests[ins.type].name;
				this.testDiff=ins.diff;
				this.curId=ins.exeId;
				if(ins.type==0) {
					this.source=ins.aSrc;
					var array=new Array(ins.selections.length),rev=new Array(ins.selections.length);
					for(var i=0;i<ins.selections.length;i++) {
						array[i]=Math.floor(Math.random()*1024);
						rev[i]=0;
					}
					this.mySelections=new Array(ins.selections.length);
					for(var i=0;i<ins.selections.length;i++) {
						for(var j=0;j<ins.selections.length;j++) {
							if(i==j) continue;
							if(array[j]<array[i]) {
								rev[i]++;
							}
							else if(array[j]==array[i]) {
								if(j<i) rev[i]++;
							}
						}
						this.mySelections[rev[i]]=ins.selections[i];
					}
					this.correctIdx=rev[ins.answer];
					this.source=ins.aSrc;					
				}
				else if(ins.type==1) {
					this.source=ins.aSrc;
					var tmpSelections=new Array(4);
					tmpSelections[0]=ins.answer;
					for(var i=1;i<4;i++) {
						var tmp=Math.floor(Math.random()*24);
						var flag=true;
						for(var j=0;j<i;j++) {
							if(tmp==tmpSelections[j]) {
								flag=false;
								break;
							}
						}
						if(!flag) i--;
						else tmpSelections[i]=tmp;
					}
					var array=new Array(4),rev=new Array(4);
					for(var i=0;i<4;i++) {
						array[i]=Math.floor(Math.random()*1024);
						rev[i]=0;
					}
					for(var i=0;i<4;i++) {
						for(var j=0;j<4;j++) {
							if(i==j) continue;
							if(array[j]<array[i]) {
								rev[i]++;
							}
							else if(array[j]==array[i]) {
								if(j<i) rev[i]++;
							}
						}
						this.mySelections[rev[i]]=tmpSelections[i];
					}
					this.correctIdx=rev[0];
				}
				else if(ins.type==3) {
					this.myQuestion=ins.question;
					console.log(ins.selections.length);
					var array=new Array(ins.selections.length),rev=new Array(ins.selections.length);
					for(var i=0;i<ins.selections.length;i++) {
						array[i]=Math.floor(Math.random()*1024);
						rev[i]=0;
					}
					this.mySelections=new Array(ins.selections.length);
					for(var i=0;i<ins.selections.length;i++) {
						for(var j=0;j<ins.selections.length;j++) {
							if(i==j) continue;
							if(array[j]<array[i]) {
								rev[i]++;
							}
							else if(array[j]==array[i]) {
								if(j<i) rev[i]++;
							}
						}
						this.mySelections[rev[i]]=ins.selections[i];
					}
					this.correctIdx=rev[ins.answer];
					this.source=ins.aSrc;
				}
				else if(ins.type==2) {
					var sz=(ins.diff+1)*(ins.diff+1),randNum=0;
					if(ins.diff==1) randNum=2;
					else if(ins.diff==2) randNum=4;
					else if(ins.diff==3) randNum=7;
					var array=new Array(sz);
					for(var i=0;i<sz;i++) array[i]=false;
					for(var i=0;i<randNum;i++) {
						array[Math.floor(Math.random()*(sz-1))]=true;
					}
					this.ansArray=array;
					this.matrix=new Array(sz);
					var ans="";
					for(var i=0;i<sz;i++) {
						if(array[i]==true) {
							this.matrix[i]="my-testing-type2-bgBlue";
							ans+=i;
						}
						else { 
							this.matrix[i]="my-testing-type2-bgWhite";
						}
					}
					console.log('ans='+ans);
					var cor=Math.floor(Math.random()*3);
					/*this.mySelections=new Array(4);
					this.mySelections[cor]=ans;
					this.correctIdx=cor;
					for(var i=0;i<4;i++) {
						if(i==cor) continue;
						var txt="";
						for(var j=0;j<randNum;j++) {
							txt+=Math.floor(Math.random()*(sz-1));
						}
						if(txt==ans) i--;
						else this.mySelections[i]=txt;
					}*/
					
					this.subArray=new Array(sz);
					for(var i=0;i<sz;i++) this.subArray[i]=false;
					console.log(this.matrix.length);
					for(var i=0;i<this.matrix.length;i++)
						console.log(this.matrix[i]);
					console.log(cor);
					/*for(var i=0;i<4;i++)
						console.log(this.mySelections[i]);*/
					this.timer=setInterval(this.type2FadeIO, 4000);
				}
			},
			type3FadeIO() {
				console.log("Video ended")
				console.log(this.myQuestion);
				var animation=uni.createAnimation({
					duration: 300,
					timingFunction: "ease"
				})
				this.animation=animation;
				this.animation.opacity(0+this.curNum*0.00000001).step();
				this.animation.opacity(1-this.curNum*0.00000001).step();
				this.animationData=this.animation.export();
				this.timer=setInterval(function(){
					clearInterval(this.timer);
					this.hasExeDes=false;
				}.bind(this),300);
			},
			type2FadeIO() {
				clearInterval(this.timer);
				var animation=uni.createAnimation({
					duration: 250,
					timingFunction: "ease"
				})
				this.animation=animation;
				this.animation.opacity(0+this.curNum*0.0000001).step();
				this.animation.opacity(1-this.curNum*0.0000001).step();
				this.animationData=this.animation.export();
				this.timer=setInterval(function() {
					clearInterval(this.timer);
					for(var i=0;i<this.matrix.length;i++) {
						Vue.set(this.matrix,i,"my-testing-type2-bgWhite");
					}
					this.hasExeDes=false;
				}.bind(this),250)
			}
		},
		onNavigationBarButtonTap(ret) {
			if(ret.index==0) {
				console.log("!");
				uni.showModal({
					title: "确认退出？",
					content: "当前进度将不被保存",
					confirmColor: "#FF3333",
					success: function(res) {
						if(res.confirm) {
							uni.navigateBack({
								delta: 1
							})
						}
						else if(res.cancel) {
							console.log("Cancel")
						}
					}
				});
			}
		},
		onLoad() {
			console.log(this.allExe.length)
			for(var i=0;i<this.chosenId.length;i++)
				console.log(i+""+this.chosenId[i])
			for(var i=0;i<this.allExe.length;i++) {
				if(this.chosenId[this.allExe[i].type]==true) {
					//console.log(i+""+this.chosenId[this.allExe[i].type]);
					this.myExes=this.myExes.concat(this.allExe[i]);
					console.log(this.myExes.length);
				}
			}
			for(var i=0;i<this.myExes.length;i++) {
				this.myExes[i].used=false;
			}
			var array=new Array(this.myExes.length),rev=new Array(this.myExes.length);
			for(var i=0;i<this.myExes.length;i++) {
				array[i]=Math.floor(Math.random()*1024);
				rev[i]=0;
			}
			var tarArr = new Array(this.myExes.length);
			for(var i=0;i<this.myExes.length;i++) {
				for(var j=0;j<this.myExes.length;j++) {
					if(i==j) continue;
					if(array[j]<array[i]) {
						rev[i]++;
					}
					else if(array[j]==array[i]) {
						if(j<i) rev[i]++;
					}
				}
				tarArr[rev[i]]=this.myExes[i];
			}
			this.myExes=tarArr;
			this.totScore=0;
			this.totNum=this.myExes.length;
			this.curPoints=100/this.myExes.length;
			this.myAllTestList=this.allTests;
			this.nextExe();
		},
		onShow() {
			this.testClosed=false;
		},
		onUnload() {
			clearInterval(this.timer);
			this.testClosed=true;
		},
		onReady() {
			this.videoContext=uni.createVideoContext("myVideo")
			console.log(this.curId)
		}
		
	}
</script>

<style>
	 @import "../../common/train-test.css";
	 page {
		 background-color: #FFFFFF;
	 }
	 .my-testing-fixed-btn {
		 position: fixed;
		 z-index: 999999;
		 box-radius: 20upx;
		 width: 40upx;
		 height: 40upx;
		 left: 50%;
		 top: 50%;
	 }
	 .my-testing-question {
		 text-align: center; font-size: 50upx;
		 padding-left: 0;
		 padding-right: 0;
		 margin-left: 0;
		 margin-right: 0;
		 width: 650upx;
		 margin-top: 220upx;
		 padding-bottom: 220upx;
	 }
	 .my-testing-audio-question {
		 text-align: center; font-size: 50upx;
		 padding-left: 0;
		 padding-right: 0;
		 margin-left: 0;
		 margin-right: 0;
		 width: 650upx;
		 margin-top: 0upx !important;
		 padding-bottom: 0upx !important;
	 }
	 .my-image-wrapper {
		 margin-top: 55upx;
		 padding-bottom: 55upx !important;
	 }
	 .my-image-wrapper image {
		
	 }
	 .my-audio-wrapper{
	 	padding: 0;
	 	margin-left: 70upx;
	 	margin-top: 240upx;
	 	padding-bottom: 230upx !important;
		/*box-shadow: -4upx 4upx 4upx darkgreen;*/
	 }
	 .my-audio-wrapper audio{
		box-shadow: -8upx 8upx 10upx darkgreen;
	 }
	 .my-video-wrapper{
		 padding: 0;
		 margin-left: 72upx;
		 margin-top: 77.5upx;
		 padding-bottom: 77.5upx !important;
	 }
	 .my-video-wrapper video{
		 box-shadow: -8upx 6upx 8upx darkgreen;
	 }
	 view.my-testing-button-area button {
		 margin-bottom: 30upx;
		 padding: 0;
		 text-align:center;
		 vertical-align: middle;
	 }
	 
	 .my-testing-head {
		 background-color: #8bc34a;
		 color: white;
	 }
	 .my-testing-bar-ldes {
		 margin-left: 50upx;
		 margin-top: 160upx;
		 margin-bottom: 60upx;
		 font-size: 40upx;
	 }
	 
	 .my-testing-progress-pd {
		 padding-left: 0upx !important;
		 padding-right: 25upx !important;
	 }
	 
	 .my-testing-content {
		 margin-top: 20upx;
		 margin-bottom: 0upx;
		 color: rgba(255,255,255,0.6);
	 }
	 
	 .my-testing-content-header {
		 margin-left: 40upx;
	 }
	 
	 .my-testing-content-inner image {
		 width: 100%;
	 }
	 
	 .my-testing-content-des {
		 margin-left:45upx;
		 color: white;
		 margin-top: 30upx;
	 }
	 
	 .my-grid-wrapper {
		 padding-bottom: 5upx;
	 }
	 
	 .my-testing-type2-bgRed {
		 background-color: rgba(206,60,57,0.6);
	 }
	 .my-testing-type2-bgWhite {
	 		 
	 }
	 .my-testing-type2-bgBlue {
		 background-color: cornflowerblue;
	 }
	 .my-testing-type2-bgnBlue {
		 background-color: rgba(100,149,237,0.6);
	 }
	 .my-mgt-62 {
		 margin-top: 270upx;
	 }
</style>
