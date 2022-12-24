<template>
	<div class="issue-com">
		<!-- 	<div class="hear">
			开始你的创作...
		</div> -->
		<div class="classify-part">
			<el-radio-group v-model="classify" size="small">
				<el-radio-button :label="item.code" v-for="item,idx in classifyArr" :key="idx">{{item.label}}
				</el-radio-button>
			</el-radio-group>

		</div>
		<div class="content">
			<div v-if="classify=='life'">
				<Life />
			</div>
			<div v-else-if="classify=='knowledge'">
				<Knowledge />
			</div>
			<div v-else-if="classify=='free'">
				<Free />
			</div>
		</div>
	</div>
</template>

<script setup>
	import Life from "./com/life.vue"
	import Free from './com/free.vue'
	import Knowledge from './com/knowledge.vue'
	import {
		reactive,
		ref
	} from 'vue';
	const classify = ref('life')
	const classifyArr = reactive([{
		code: 'life',
		label: '生活日常',
	}, {
		code: 'knowledge',
		label: '知识笔记',
	}, {
		code: 'free',
		label: '免费资源',
	}])
</script>

<style scoped>
	.classify-part {
		margin: 0 0 1rem 0;
	}
</style>
