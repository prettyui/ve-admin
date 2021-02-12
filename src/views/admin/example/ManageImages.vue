<template>
	<div>
		<div class="veadmin-iframe-header veadmin-iframe-header-custom-fixed">
			<span>当前位置:</span>
			图片管理
			<button class="veadmin-iframe-button" onclick="location.reload()">
				<i class="el-icon-refresh-right"></i>
			</button>
		</div>
		<div class="veadmin-iframe-content veadmin-iframe-content-custom-fixed">
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
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
