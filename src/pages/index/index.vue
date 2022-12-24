<template>
	<div class="page">
		<el-timeline>
			<el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
				:type="activity.type" :color="activity.color" :size="activity.size" :hollow="activity.hollow"
				:timestamp="activity.timestamp">
				{{ activity.content }}
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<script setup>
	// "/Api/web/test.php"
	import {
		ref,
		reactive,
		onMounted,
		getCurrentInstance,
	} from "vue"
	const {
		proxy
	} = getCurrentInstance()
	const $Axios = proxy.$Axios
	onMounted(() => {
		console.log("请求测试")
		$Axios({
			method: 'post',
			url: '/Api/web/test/test.php',
			data: {
				id: 1
			}
		}).then(res => {
			console.log(res.data)
		}).catch(err => {
			console.log(err)
		})
	})
	const activities = reactive([{
			content: 'Custom icon',
			timestamp: '2018-04-12 20:46',
			size: 'large',
			type: 'primary',
			icon: 'MoreFilled',
		},
		{
			content: 'Custom color',
			timestamp: '2018-04-03 20:46',
			color: '#0bbd87',
		},
		{
			content: 'Custom size',
			timestamp: '2018-04-03 20:46',
			size: 'large',
		},
		{
			content: 'Custom hollow',
			timestamp: '2018-04-03 20:46',
			type: 'primary',
			hollow: true,
		},
		{
			content: 'Default node',
			timestamp: '2018-04-03 20:46',
		},
	])
</script>

<style scoped>
</style>
