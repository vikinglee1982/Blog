<template>
	<div class="bar-com">
		<div class="web-bar">
			<div class="logo">
				<el-image src="/src/assets/logo.png"></el-image>
			</div>
			<div class="menu">
				<div class="index">
					<span class="iconfont">&#xe818;</span>
					<div>
						首页
					</div>
				</div>
				<div class="free">
					<span class="iconfont">&#xe653;</span>
					免费资源
				</div>

				<div class="note">
					<span class="iconfont">&#xe605;</span>
					知识笔记
				</div>
				<div class="me">
					<span class="iconfont">&#xe603;</span>
					关于咸鱼
				</div>
				<div class="issue" @click="goto('issue')">
					<span class="iconfont">&#xe604;</span>
					写点什么
				</div>
			</div>


		</div>
		<div class="app-bar">
			<div class="index">
				<span class="iconfont">&#xe818;</span>
				首页
			</div>
			<div class="free">
				<span class="iconfont">&#xe653;</span>
				免费资源
			</div>
			<div class="issue">
				<span class="iconfont">&#xe604;</span>
				写点什么
			</div>
			<div class="note">
				<span class="iconfont">&#xe605;</span>
				知识笔记
			</div>
			<div class="me">
				<span class="iconfont">&#xe603;</span>
				关于咸鱼
			</div>
		</div>
		<!-- 生活点滴=》{日记，图片}
		共享免费-》{收藏的网站，免费的资源}
		知识笔记-》
		我 -->
	</div>
</template>

<script setup>
	import {
		ref,
	} from 'vue'
	const emit = defineEmits(['issue']);
	const goto = (e) => {
		if (e == 'issue') {
			console.log("打开写作")
			emit('issue', true);
		}
	}
</script>

<style scoped>
	/* @media screen and (max-width:1360px) { */
	@media screen and (orientation: portrait) {

		/* 竖屏 */
		.web-bar {
			display: none;
		}

		.app-bar {
			position: fixed;
			left: 0;
			bottom: 0;
			right: 0;
			height: 49px;
			/* border: 1px solid darkblue; */
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-shadow: -0.5rem -0.5rem 2rem #FFFFFF, 0.5rem 0.5rem 2rem #61636a;
			transition: all 0.2s ease-in-out;
			background-color: #ebecf0;
			text-shadow: 0.1rem 0.1rem 0.1rem #FFFFFF;
			/* border: 1px solid darkblue; */
		}

		.iconfont {
			margin: 0 1rem;
			width: 2rem;
			height: 2rem;
			font-size: 2rem;
			/* png实体部分添加投影 */
			filter: drop-shadow(0.8px 0.8px 0.8px #a7a7a7);
		}

		.index,
		.free,
		.note,
		.me,
		.issue {
			height: 100%;
			width: 20%;
			color: #9f9f9f;
			transition: all 0.2s ease-in-out;
			cursor: pointer;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

	}

	/* @media screen and (min-width: 1360px) { */

	@media screen and (orientation: landscape) {

		/* 横屏 */
		.app-bar {
			display: none;
		}

		.web-bar {
			position: fixed;
			top: 0;
			left: 1rem;
			right: 1rem;
			/* border: 1px solid darkblue; */
			display: flex;
			height: 5.333333rem;
			justify-content: space-between;

		}

		.iconfont {
			margin: 0 0.5rem;
			width: 2rem;
			height: 2rem;
			font-size: 1.6rem;
			line-height: 2rem;
			/* png实体部分添加投影 */
			filter: drop-shadow(0.8px 0.8px 0.8px #a7a7a7);
		}

		.logo {
			display: flex;
			align-items: center;

		}

		.logo .el-image {
			margin: 0 2rem;
			height: 3rem;
			/* png实体部分添加投影 */
			filter: drop-shadow(8px 8px 8px #a7a7a7);
		}

		.menu {
			display: flex;
		}

		.index,
		.free,
		.note,
		.me,
		.issue {
			color: #9f9f9f;
			box-shadow: -0.5rem -0.5rem 2rem #FFFFFF, 0.5rem 0.5rem 2rem #61636a;
			transition: all 0.2s ease-in-out;
			background-color: #ebecf0;
			text-shadow: 0.1rem 0.1rem 0.1rem #FFFFFF;
			/* border: 1px solid darkblue; */
			border-radius: 0.4rem;
			box-sizing: border-box;
			padding: 1rem;
			cursor: pointer;
			display: flex;
			font-size: 1.2rem;
			justify-content: center;
			align-items: center;
			margin: 1rem 0.5rem;
		}

		.index:hover,
		.free:hover,
		.note:hover,
		.me:hover,
		.issue:hover {
			color: #00A0F1;
			/* color: #ae1100; */
			box-shadow: -0.1rem -0.1rem 0.5rem #FFFFFF, 0.1rem 0.1rem 0.5rem #acb0bc;
		}
	}
</style>
