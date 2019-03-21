<template>
	<view>
		<view class="banner">
			<image class="banner-img" :src="banner.cover"></image>
			<view class="banner-title">{{banner.title}}</view>
		</view>
		<view class="article-meta">
			<text class="article-author">{{banner.author}}</text>
			<text class="article-text">发表于</text>
			<text class="article-time">{{banner.published_at}}</text>
		</view>
		<view class="uni-padding-wrap article-content">
			<rich-text :nodes="htmlString[banner.id-1]"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner: {},
				htmlString: [
					`<p>试想一下，当你的记忆慢慢不见了，你的生活会变成什么样子？当拿起电话，却忘记了要打给谁；明明正在和面前的人说话，却想不起他的名字；不断重复地买着几天前已经买好的东西……</p><br>
					<p>阿尔兹海默症就是这样一种慢慢蚕食记忆的疾病。但是它对人的影响并不局限于记忆，它是一种获得性和进行性认知功能障碍，伴有明显的社会功能受损和不同程度精神行为改变。通俗来讲，就是记忆力变差、语言功能下降、对空间关系的辨别能力下降，可能会出现说话磕磕绊绊、迷路、把东西放错位置等等情况。除此之外，还常常伴随有性格和行为改变、情绪更加焦虑抑郁等等。</p><br>
					<img src="https://s2.ax1x.com/2019/03/17/Ae2BIs.png" alt="Ae2BIs.png" border="0" width="100%"><br>
					<p>老年人的阿尔茨海默症发病率很高，65岁到74岁之间大约有1%-2%的人患上阿尔茨海默症，85岁以上的老人，患病的几率高达25%。但是相对更年轻的人也有可能患病，这种情况称作早发性阿尔茨海默症，有数据表明，早发性阿尔茨海默症更多是由遗传导致.</p><br>
					<p>按照病情的发展，可大致分为 3 个阶段：</p><br>
					<p>1. 健忘期。表现为记忆力明显减退，伴有思维、判断、计算能力，空间辨别、视觉能力的降低，但尚可保持过去熟悉的工作或技能。这个阶段往往被人们忽视，其实老人“丢三落四”“说完就忘”“反复提问某个问题”“老犯糊涂，出低级错误”可能就是阿尔兹海默症的早期信号，应该加以重视和诊断。</p><br>
					<p>2. 思维混乱期。除第一阶段的症状加重外，其突出表现是视觉能力、空间辨认障碍的明显加重，容易迷路、穿衣困难、不认识亲友。</p><br>
					<p>3. 极度痴呆期。全面衰退状态，生活不能自理，如吃饭、穿衣、洗澡均需人照顾，大小便失禁。在这个阶段，仿佛是生命的轮回一般，老人变成了需要我们照顾的孩子。</p><br>
					<img src="https://s2.ax1x.com/2019/03/17/Ae2wZQ.png" alt="Ae2wZQ.png" border="0" width="100%"><br>
					<p>对于患上阿尔茨海默症的患者及其家人而言，积极、乐观和爱是对抗此病的良药。在这里我们真诚地希望，能够早日找到医治阿尔兹海默症的方法，让老人不再忘记爱的感觉。</p><br>`,
					
					`<p>阿尔兹海默症并非遥不可及，电焊工人，理发师，银行收银员，机器维修师吸入的金属元素会增加发病可能；吸烟者，酗酒者，文盲者发病率大幅上升；食用高热量高盐分高糖食品、久坐不动、缺乏锻炼、肥胖、自闭、孤独、睡眠质量低，长期抑郁都会提高阿尔兹海默病的发病率。</p><br>
					<img src="https://s2.ax1x.com/2019/03/17/Ae26zV.png" alt="Ae26zV.png" border="0" width="100%"><br>
					<p>阿尔兹海默症离我们不远，离我们心爱的家人不远，最好的治疗就是预防，为了家人的记忆，为了我们自身的明天，我们要警惕记忆小偷登门造访：</p><br>
					<p>运动：运动训练能提高空间学习记忆能力, 对老年痴呆的学习记忆障碍有改善作用, 研究显示运动可能扩张微血管改善微循环, 增加组织器官的血流量及提高机体耐缺氧能力。</p><br>
					<p>训练：多做智力训练；鼓励老人读书看报，查字典；学习新事物，保持好奇心培养自己的兴趣；支持老人多聊天，听新闻联播。</p><br>
					<p>心态：保持老人心情愉快，享受天伦之乐；减少重大不良刺激对老人的影响。</p><br>
					<p>膳食：吃易消化，营养丰富的食物；禁止为老人使用铝制炊具，铝盐易在大脑沉积；细嚼慢咽，增加大脑血流量。</p><br>
					<p>检查：如果有家族遗传史，工作能力减退或者明显的记忆力下降到专科医院就诊。</p><br>`,
					
					`<p>阿尔兹海默症在对患者的认知功能造成影响的同时，也会给患者及其家人带来心理上的负担，患者早期可能会出现抑郁和焦虑的情况，照料者也会面临照顾病人的诸多挑战，比如自己的“预期性悲伤”，患抑郁的风险增高。</p><br>
					<p>有研究显示，老年痴呆症患者照顾者的认知情况对老年痴呆症预防、诊断和治疗有重要影响。如果照顾者缺乏相关知识和照料常识，会使痴呆患者得不到系统、正规的康复训练，从而加速疾病的进展。换而言之，照料者的素质和能力的高低对患者的康复起到决定作用。</p><br>
					<img src="https://s2.ax1x.com/2019/03/17/Ae2rin.png" alt="Ae2rin.png" border="0" width="100%"><br>
					<p>我们如何更好地为老人提供支持呢？</p><br>
					<p>护理大致可以分为以下几个方面。</p><br>
					<p>家庭护理：让老人在熟悉的环境下生活康复，可以使老人更加舒适安心。</p><br>
					<p>住院护理：住院时，老人可能会忘记很多事情，记得提醒并鼓励老人自己完成，而不是包办。</p><br>
					<p>康复护理：在家人的陪伴下和社会接触，会见老友；有意识的让老人回忆，判断生活中的事物。</p><br>
					<p>睡眠护理：安排老人喜欢的活动，尽量让老人保持一定兴奋度，以减少白天睡眠，保证夜间睡眠质量。</p><br>
					<p>环境护理：床边安上护栏，浴室做防滑，墙壁安装扶手，隔离煤气电源。</p><br>
					<p>心理护理：如果老人情绪激动，用温和的语言劝导，分散老人的注意力，切莫言辞激烈，二次刺激。心理层面上，目前普遍提倡“以人为中心”的痴呆症照顾理念和服务模式（PCC），它的概念包含以下几个方面：</p><br>
					<p>①始终将患者视为能够体会生活和社会交往的个体；</p><br>
					<p>②为患者提供选择并尊重患者做出的选择；</p><br>
					<p>③将患者过往的生活和经历融入照料中；</p><br>
					<p>④训练的重点是患者目前能够完成的任务，而不是已经丧失的能力。</p><br>
					<p>具体而言，我们可以通过图片、音乐等，与老人分享过去的经历，回忆早期的生活。承认和肯定老人的看法也是一种有效方法，可以促进提升自信和健康。此外还可以把自己一些生活中的小问题讲给老人听，向她们寻求帮助，不仅对我们自己有所启发，更能满足老人的心理需要。</p><br>
					<img src="https://s2.ax1x.com/2019/03/17/Ae2yR0.png" alt="Ae2yR0.png" border="0" width="100%"><br>
					<p>总的来讲，PCC强调“以人为中心”而不是“以病人为中心”，强调每一个人都是平等的个体。老人在白发苍苍的年纪变回了孩子，羊跪乳，鸦反哺，像老人在我们孩童时期照顾我们一样，现在轮到我们关爱、照顾这些可爱的老小孩了。</p><br>`,
					
					`<p>阿尔茨海默症的常见性和特殊性，使得它常常是电影的主题。走进这些影片，感悟冷暖的人生，不仅能够加深我们对阿尔兹海默症的了解，也能让我们认清自己的内心，以更加强健的心态面对病人。</p><br>
					<p>《依然爱丽丝》：爱丽丝是一名阿尔茨海默症的患者，“那感觉就像有东西从我脑中消失了，整个生活都在离我而去”，得知自己患上了阿尔茨海默症，她绝望且无助。然而，就像爱丽丝为其他阿尔茨海默症患者所做的演讲中说，“我并不痛苦，我在努力挣扎”。影片最后，爱丽丝的小女儿为爱丽丝耐心地重复着故事，尽管爱丽丝无法记得故事的内容，但是这则故事，关于爱。</p><br>
					<img src="https://s2.ax1x.com/2019/03/17/Ae2gMT.png" alt="Ae2gMT.png" border="0" width="100%"><br>
					<p>《世界上最疼我的那个人去了》：事业成功的女作家诃回到北京看望八十多岁高龄的妈，妈和心爱的猫及雇用的小保姆住在一处简陋的家里，诃从妈歪斜的左肩、双脚蹭着地走路、说话颠三倒四、口水不断地往外渗等种种迹象中发现妈突然间衰老了。诃对此感到很震动和意外，妈在年老力衰时最需要照顾，自己却远远地把妈丢下了……</p><br>
					<img src="https://s2.ax1x.com/2019/03/17/Ae20aj.png" alt="Ae20aj.png" border="0" width="100%"><br>
					<p>《明日的记忆》：在广告公司工作的佐伯雅行，今年50岁，生活里充满了平稳的幸福。原本几个月后，他将主持独生女的结婚典礼，完成人生中最大的心愿。可是某天，他因为持续目眩与失眠而前往医院，诊断的结果竟是得到"少年阿兹海默症"。"为什么是我？……为什么偏偏是我？"他对天咆哮，却得不到任何答案。 为了挽留住片刻都在流失的记忆，他拚死命地在所有事物上留下小纸条提醒自己，开始了无奈的抢救记忆大作战......</p><br>
					<p>《脑海中的橡皮擦》：秀真在便利店内与在建筑公司当工人的哲洙相遇。未来的日子里，他们一次又一次相遇，最终彼此相爱了。哲洙知道自己与秀真的身份悬殊，所以不敢轻易表白情谊，秀真向哲洙求婚。 就算秀真父母阻拦，他们爱情的力量还是说服了父母。 婚后生活甜蜜，秀真还帮忙修复了哲洙与母亲的关系。可是好景不长，秀真的记忆力开始一天比一天衰退，得了阿滋海默氏症，大脑在逐渐死亡.....</p><br>
					<img src="https://s2.ax1x.com/2019/03/17/Ae2sGq.png" alt="Ae2sGq.png" border="0" width="100%"><br>`
				]
			}
		},
		/*
<img src="https://s2.ax1x.com/2019/03/17/Ae2wZQ.png" alt="Ae2wZQ.png" border="0" width="100%">
<img src="https://s2.ax1x.com/2019/03/17/Ae2rin.png" alt="Ae2rin.png" border="0" width="100%">
<img src="https://s2.ax1x.com/2019/03/17/Ae20aj.png" alt="Ae20aj.png" border="0" width="100%">
<img src="https://s2.ax1x.com/2019/03/17/Ae2sGq.png" alt="Ae2sGq.png" border="0" width="100%">
<img src="https://s2.ax1x.com/2019/03/17/Ae2BIs.png" alt="Ae2BIs.png" border="0" width="100%">
<img src="https://s2.ax1x.com/2019/03/17/Ae26zV.png" alt="Ae26zV.png" border="0" width="100%">
<img src="https://s2.ax1x.com/2019/03/17/Ae2yR0.png" alt="Ae2yR0.png" border="0" width="100%">
<img src="https://s2.ax1x.com/2019/03/17/Ae2gMT.png" alt="Ae2gMT.png" border="0" width="100%">
		*/
		onLoad(event) {
			try {
				this.banner = JSON.parse(decodeURIComponent(event.value));
			} catch (error) {
				this.banner = JSON.parse(event.value);
			}

			uni.setNavigationBarTitle({
				title: this.banner.title
			});
		}
	}
</script>

<style>
	.banner {
		height: 360upx;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
	}

	.banner-img {
		width: 100%;
	}

	.banner-title {
		max-height: 84upx;
		overflow: hidden;
		position: absolute;
		left: 30upx;
		bottom: 30upx;
		width: 90%;
		font-size: 32upx;
		font-weight: 400;
		line-height: 42upx;
		color: white;
		z-index: 11;
	}

	.article-meta {
		padding: 20upx 40upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: gray;
	}

	.article-text {
		font-size: 26upx;
		line-height: 50upx;
		margin: 0 20upx;
	}

	.article-author,
	.article-time {
		font-size: 30upx;
	}

	.article-content {
		padding: 0 30upx;
		overflow: hidden;
		font-size: 30upx;
		margin-bottom: 30upx;
	}
</style>
