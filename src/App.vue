<template>
	<div class="app">
		<Bar @issue="issueDrawer=true" />
		<router-view />
		<el-drawer v-model="issueDrawer" size="80%" :with-header="false">
			<!-- 	<template #header>
				<div class="header">
					开始你的表演...
				</div>
			</template> -->
			<!-- direction="btt" -->
			<div class="content">
				<Issue />
			</div>
		</el-drawer>
	</div>
</template>
<script setup>
	import Bar from '/src/components/bar/bar.vue'
	import Issue from '/src/components/issue/issue.vue'
	import {
		ref,
	} from 'vue'
	const issueDrawer = ref(false)

	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>
<style>
	/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
	@font-face {
		font-family: 'iconfont';
		/* Project id 3835181 */
		src: url('//at.alicdn.com/t/c/font_3835181_l4slv5fas5g.woff2?t=1671708638009') format('woff2'),
			url('//at.alicdn.com/t/c/font_3835181_l4slv5fas5g.woff?t=1671708638009') format('woff'),
			url('//at.alicdn.com/t/c/font_3835181_l4slv5fas5g.ttf?t=1671708638009') format('truetype');
	}



	/* @media screen and (max-width:1360px) { */
	@media screen and (orientation: portrait) {

		/* 竖屏 */
		.page {
			margin: 1rem;
		}
	}

	/* @media screen and (min-width: 1360px) { */

	@media screen and (orientation: landscape) {

		/* 横屏 */
		.page {
			margin: 7.333333rem 6rem;
		}

	}

	/*每个页面公共css */
	html {


		/* 不能设定xy轴向滚动,否则onPageScroll失效 */
		/* overflow-x: hidden; */
		/* overflow-y: auto; */
		font-size: 12px;
		/*页面平滑滚动*/
		-webkit-scroll-behavior: smooth;
		-moz-scroll-behavior: smooth;
		-o-scroll-behavior: smooth;

	}

	body,
	dl,
	dt,
	dd,
	ul,
	ol,
	li,
	pre,
	form,

	input,
	p,

	th,
	td {

		font-weight: 400;
		margin: 0;
		padding: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h4,
	h5 {
		margin: 0;
		padding: 0;
	}

	body {
		background-color: #F2f2f2;
		color: rgba(0, 0, 0, 0.4);
		font-family: Helvetica, Arial, sans-serif;
		font-size: 12px;
		text-align: left;
		/*字体抗锯齿*/
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.el-image,
	image {
		display: block;
		border: 0 none;
	}
</style>
