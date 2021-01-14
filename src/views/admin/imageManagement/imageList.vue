<template>
	<div style="padding-left:20px">
		<h1>图片列表</h1>
		<div style="width:250px;float:left;margin: 4px;" v-for="item in 10" :key="item">
			<el-card :body-style="{ padding: '6px' }">
				<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
				<div style="padding: 14px;">
					<span>好吃的汉堡</span>
					<div class="bottom clearfix">
						<el-button type="text" class="button">操作按钮</el-button>
					</div>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
