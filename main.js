import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$msg = function(str, _icon='none') {
	uni.showToast({
		title: str,
		duration: 2000,
		icon: _icon
	});
}
Vue.prototype.$ajax = function(url, _data, fun_suc) {
	uni.request({
		url: 'http://106.14.200.248:8080/' + url,
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		data: _data,
		success(ret) {
			fun_suc(ret);
		}
	});
}
Vue.prototype.$back = function() {
	setTimeout(function() {
		uni.navigateBack({
			delta: 1
		});
	}, 500);
}
Vue.prototype.chosenId=[false, false, false, false]
Vue.prototype.allTests=[
	{
		name: "定向力训练",
		id: 0
	},
	{
		name: "注意力与计算力训练",
		id: 1
	},
	{
		name: "短时记忆训练",
		id: 2
	},
	{
		name: "延时记忆训练",
		id: 3
	}
]
Vue.prototype.selectedNum=0

App.mpType = 'app'

Vue.prototype.allExe=[
	{
		exeId: 8,
		type: 0,
		diff: 1,
		val: 24,
		hasExeDes: false,
		needPV: true,
		aSrc: "../../static/_3.70.jpg",
		selections: ["B->C->A","B->A->C","A->B->C","A->C->B"],
		answer: 0,
	},	
	{
		exeId: 7,
		type: 0,
		diff: 2,
		val: 24,
		hasExeDes: false,
		needPV: true,
		aSrc: "../../static/_5.30.jpg",
		selections: ["A","B","C"],
		answer: 1,
	},	
	{
		exeId: 6,
		type: 0,
		diff: 2,
		val: 24,
		hasExeDes: false,
		needPV: true,
		aSrc: "../../static/_4.70.jpg",
		selections: ["B->C->A","A->C->B","C->A->B","A->C->B"],
		answer: 0,
	},	
	{
		exeId: 5,
		type: 0,
		diff: 2,
		val: 24,
		hasExeDes: false,
		needPV: true,
		aSrc: "../../static/_14.60.jpg",
		selections: ["下午10点08分","上午10点14分","下午9点08分","上午11点04分"],
		answer: 0,
	},	
	{
		exeId: 4,
		type: 0,
		diff: 2,
		val: 24,
		hasExeDes: false,
		needPV: true,
		aSrc: "../../static/_16.60.jpg",
		selections: ["下午6点07分","上午5点07分","下午7点10分","上午6点12分"],
		answer: 0,
	},	
	{
		exeId: 3,
		type: 0,
		diff: 2,
		val: 24,
		needPV: false,
		hasExeDes: false,
		aSrc: "../../static/_11.40.jpg",
		selections: ['A','B','C'],
		answer: 0,
	},	
	{
		exeId: 2,
		type: 0,
		diff: 2,
		val: 24,
		needPV: false,
		hasExeDes: false,
		aSrc: "../../static/_2.10.jpg",
		selections: ['A','B','C'],
		answer: 2,
	},	
	{
		exeId: 1,
		type: 0,
		diff: 2,
		val: 24,
		needPV: false,
		hasExeDes: false,
		aSrc: "../../static/_1.10.jpg",
		selections: ['A','B','C'],
		answer: 1,
	},		
	{
		exeId: 107,
		type: 1,
		diff: 2,
		val: 24,
		hasExeDes: false,
		aSrc: "../../static/19.100.jpg",
		answer: 1,
	},
	{
		exeId: 106,
		type: 1,
		diff: 2,
		val: 24,
		hasExeDes: false,
		aSrc: "../../static/11.70.jpg",
		answer: 1,
	},
	{
		exeId: 105,
		type: 1,
		diff: 2,
		val: 24,
		hasExeDes: false,
		aSrc: "../../static/9.60.jpg",
		answer: 2,
	},
	{
		exeId: 104,
		type: 1,
		diff: 2,
		val: 24,
		hasExeDes: false,
		aSrc: "../../static/9.60.jpg",
		answer: 2,
	},
	{
		exeId: 103,
		type: 1,
		diff: 3,
		val: 24,
		hasExeDes: false,
		aSrc: "../../static/20.95.jpg",
		answer: 2,
	},
	{
		exeId: 102,
		type: 1,
		diff: 1,
		val: 24,
		hasExeDes: false,
		aSrc: "../../static/2.20.jpg",
		answer: 5,
	},
	{
		exeId: 101,
		type: 1,
		diff: 1,
		val: 24,
		hasExeDes: false,
		aSrc: "../../static/1.10.jpg",
		answer: 2,
	},
	{
		exeId: 312,
		type: 3,
		diff: 2,
		val: 24,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '视频中有海吗？',
		selections: ["有","没有"],
		aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4",
		answer: 0
	},
	{
		exeId: 312,
		type: 3,
		diff: 2,
		val: 24,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '视频中有海吗？',
		selections: ["有","没有"],
		aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4",
		answer: 0
	},
	{
		exeId: 3001,
		type: 3,
		diff: 1,
		val: 15,
		hasExeDes: true,
		exeDes: '请根据音频内容回答问题',
		question: '全球绿化面积增加了百分之几？',
		aSrc: "../../static/1.mp3",
		selections: ["3","50","10"],
		answer: 1,
	},
	{
		exeId: 3009,
		type: 3,
		diff: 1,
		val: 12,
		hasExeDes: true,
		exeDes: '请根据音频内容回答问题',
		question: '囚犯抵抗的时候狱警是通过什么武器将其制服？',
		selections: ["电击枪","警棍","手枪","红缨枪"],
		aSrc: "../../static/4.mp3",
		answer: 0,
	},
	{
		exeId: 3008,
		type: 3,
		diff: 1,
		val: 12,
		hasExeDes: true,
		exeDes: '请根据音频内容回答问题',
		question: '囚犯最后掉进了哪个地方？',
		selections: ["厕所","狱警办公室","其他牢房"],
		aSrc: "../../static/4.mp3",
		answer: 1,
	},
	{
		exeId: 3007,
		type: 3,
		diff: 1,
		val: 12,
		hasExeDes: true,
		exeDes: '请根据音频内容回答问题',
		question: '囚犯打算通过哪个地方越狱？',
		selections: ["天花板","下水管道","窗户"],
		aSrc: "../../static/4.mp3",
		answer: 0,
	},
	{
		exeId: 3006,
		type: 3,
		diff: 1,
		val: 12,
		hasExeDes: true,
		exeDes: '请根据音频内容回答问题',
		question: '哪一个月份是福建省的环卫工人关爱月？',
		aSrc: "../../static/3.mp3",
		selections: ["10月","8月","4月"],
		answer: 0,
	},
	{
		exeId: 3005,
		type: 3,
		diff: 1,
		val: 12,
		hasExeDes: true,
		exeDes: '请根据音频内容回答问题',
		question: '谁获得了帮助？',
		selections: ["环卫工人","老师","医生"],
		aSrc: "../../static/3.mp3",
		answer: 0,
	},
	{
		exeId: 3004,
		type: 3,
		diff: 1,
		val: 12,
		hasExeDes: true,
		exeDes: '请根据音频内容回答问题',
		question: '总共对几家企业进行了处罚？',
		aSrc: "../../static/2.mp3",
		selections: ["160","300","261"],
		answer: 2,
	},
	{
		exeId: 3003,
		type: 3,
		diff: 1,
		val: 12,
		hasExeDes: true,
		exeDes: '请根据音频内容回答问题',
		question: '哪个省对环境违法企业进行了处罚？',
		selections: ["青海","上海","北京"],
		aSrc: "../../static/2.mp3",
		answer: 0,
	},
	{
		exeId: 3002,
		type: 3,
		diff: 1,
		val: 12,
		hasExeDes: true,
		exeDes: '请根据音频内容回答问题',
		question: '哪一个国家为地球的绿化做出了最大贡献？',
		selections: ["中国","美国","英国"],
		aSrc: "../../static/1.mp3",
		answer: 0,
	},
	{
		exeId: 305,
		type: 3,
		diff: 1,
		val: 15,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '视频中女孩在做什么？',
		selections: ["散步","骑自行车","开车","骑摩托车"],
		aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4",
		answer: 1,
	},
	{
		exeId: 311,
		type: 3,
		diff: 2,
		val: 21,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '男孩和女孩牵着手吗？',
		selections: ["是","否"],
		aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4",
		answer: 0
	},
	{
		exeId: 313,
		type: 3,
		diff: 2,
		val: 27,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '女孩的上衣是什么颜色？',
		selections: ["红色","绿色","粉色","白色"],
		answer: 0
	},
	{
		exeId: 314,
		type: 3,
		diff: 2,
		val: 30,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '男孩手里拿着的是什么？',
		selections: ["行李箱","折页纸","手提包","手机"],
		aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4",
		answer: 1
	},
	{
		exeId: 315,
		type: 3,
		diff: 2,
		val: 33,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '女孩手里拿着的是什么？',
		selections: ["行李箱","书本","折页纸","手机"],
		aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4",
		answer: 0
	},
	{
		exeId: 316,
		type: 3,
		diff: 2,
		val: 36,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '男孩的裤子是什么颜色？',
		selections: ["绿色","红色","黄色","黑色"],
		aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4",
		answer: 0
	},
	{
		exeId: 301,
		type: 3,
		diff: 1,
		val: 3,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '道路两边有树吗？',
		selections: ["有","没有"],
		aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4",
		answer: 0
	},
	{
		exeId: 302,
		type: 3,
		diff: 1,
		val: 6,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '道路两旁有路灯吗？',
		selections: ["有","没有"],
		aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4",
		answer: 0,
	},
	{
		exeId: 303,
		type: 3,
		diff: 1,
		val: 9,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '路旁有几个垃圾桶？',
		selections: ["1个","2个","3个","4个"],
		aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4",
		answer: 2,
	},
	{
		exeId: 304,
		type: 3,
		diff: 1,
		val: 12,
		hasExeDes: true,
		exeDes: '请视频内容回答问题',
		question: '视频中女孩的头发是什么颜色？',
		selections: ["红色","黑色","黄色","紫色"],
		aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4",
		answer: 0,
	},
	{
		exeId: 306,
		type: 3,
		diff: 1,
		val: 18,
		hasExeDes: true,
		exeDes: '请根据视频内容回答问题',
		question: '视频中女孩穿的是什么？',
		selections: ["短裤","长裙","长裤","短裙"],
		aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4",
		answer: 0,
	},
	{
		exeId: 201,
		type: 2,
		diff: 1,
		val: 21,
		hasExeDes: true,
		exeDes: '现在显示一个2*2的网格，蓝色方块几秒后会变成白色，您需要记住并回答哪些是蓝色方块'
	},
	{
		exeId: 202,
		type: 2,
		diff: 2,
		val: 50,
		hasExeDes: true,
		exeDes: '现在显示一个3*3的网格，蓝色方块几秒后会变成白色，您需要记住并回答哪些是蓝色方块'
	},
	{
		exeId: 203,
		type: 2,
		diff: 3,
		val: 80,
		hasExeDes: true,
		exeDes: '现在显示一个4*4的网格，蓝色方块几秒后会变成白色，您需要记住并回答哪些是蓝色方块'
	},
	{
		exeId: 203,
		
	}
]

const app = new Vue({
	...App
})
app.$mount()
