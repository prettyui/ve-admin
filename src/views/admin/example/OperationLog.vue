<template>
	<div>
		<div class="veadmin-iframe-header veadmin-iframe-header-custom-fixed">
			<span>当前位置:</span>
			操作日志
			<button class="veadmin-iframe-button" onclick="location.reload()">
				<i class="el-icon-refresh-right"></i>
			</button>
		</div>

		<div class="veadmin-iframe-content veadmin-iframe-content-custom-fixed">
			<el-collapse v-model="activeName" accordion style="padding-left:20px">
				<el-collapse-item title="[删除操作] 2021-01-10 10:25:32 >> IP:120.12.53.1" name="1">
					<div>日志详情！</div>
					<div>this is log detail</div>
				</el-collapse-item>
				<el-collapse-item title="[更新操作] 2021-01-10 10:25:32 >> IP:120.12.53.1" name="2">
					<div>日志详情！</div>
					<div>this is log detail</div>
				</el-collapse-item>
				<el-collapse-item title="[设置系统] 2021-01-10 10:25:32 >> IP:120.12.53.1" name="3">
					<div>日志详情！</div>
					<div>this is log detail</div>
				</el-collapse-item>
				<el-collapse-item title="[登陆操作] 2021-01-10 10:25:32 >> IP:120.12.53.1" name="4">
					<div>日志详情！</div>
					<div>this is log detail</div>
				</el-collapse-item>
				<el-collapse-item title="[删除操作] 2021-01-10 10:25:32 >> IP:120.12.53.1" name="5">
					<div>日志详情！</div>
					<div>this is log detail</div>
				</el-collapse-item>
				<el-collapse-item title="[更新操作] 2021-01-10 10:25:32 >> IP:120.12.53.1" name="6">
					<div>日志详情！</div>
					<div>this is log detail</div>
				</el-collapse-item>
				<el-collapse-item title="[设置系统] 2021-01-10 10:25:32 >> IP:120.12.53.1" name="7">
					<div>日志详情！</div>
					<div>this is log detail</div>
				</el-collapse-item>
				<el-collapse-item title="[删除操作] 2021-01-10 10:25:32 >> IP:120.12.53.1" name="8">
					<div>日志详情！</div>
					<div>this is log detail</div>
				</el-collapse-item>
				<el-collapse-item title="[登录操作] 2021-01-10 10:25:32 >> IP:120.12.53.1" name="9">
					<div>日志详情！</div>
					<div>this is log detail</div>
				</el-collapse-item>
			</el-collapse>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeName: ""
		};
	}
};
</script>

<style lang="scss" scoped></style>
