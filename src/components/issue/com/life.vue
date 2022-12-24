<template>
	<div class="life-com">
		<div class="diary">
			<el-input v-model="diary" :rows="3" :autosize="true" type="textarea" placeholder="请输入..." />
		</div>
		<el-upload :auto-upload="false" :file-list="fileList" list-type="picture-card"
			:on-preview="handlePictureCardPreview" :on-remove="handleRemove">
			<el-icon>
				<span class="iconfont up-img">&#xe679;</span>
			</el-icon>
		</el-upload>

		<el-dialog v-model="dialogVisible">
			<img w-full :src="dialogImageUrl" alt="Preview Image" />
		</el-dialog>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const fileList = ref([{
			name: 'food.jpeg',
			url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
		},
		{
			name: 'plant-1.png',
			url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
		},
	])
	const diary = ref(null)
	const dialogImageUrl = ref('')
	const dialogVisible = ref(false)
	const handlePictureCardPreview = (uploadFile, uploadFiles) => {
		// dialogImageUrl.value = uploadFile.url!dialogVisible.value = true
	}
	const handleRemove = () => {

	}
</script>

<style scoped>
	.diary {
		margin: 1rem 0;
	}

	.up-img {
		font-size: 4rem
	}
</style>
