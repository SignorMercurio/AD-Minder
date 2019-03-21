<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError: function(err) {
			console.log(err);
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';

	@font-face {
		font-family: 'iconfont';
		/* project id 1053986 */
		src: url('https://at.alicdn.com/t/font_1053986_k9mps7gm2j.eot');
		src: url('https://at.alicdn.com/t/font_1053986_k9mps7gm2j.eot?#iefix') format('embedded-opentype'),
			url('https://at.alicdn.com/t/font_1053986_k9mps7gm2j.woff2') format('woff2'),
			url('https://at.alicdn.com/t/font_1053986_k9mps7gm2j.woff') format('woff'),
			url('https://at.alicdn.com/t/font_1053986_k9mps7gm2j.ttf') format('truetype'),
			url('https://at.alicdn.com/t/font_1053986_k9mps7gm2j.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
