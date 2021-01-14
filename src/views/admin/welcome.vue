<template>
	<div style="padding-left:20px">
		<h1>监控面板</h1>
		<p>你好，欢迎使用ve-admin <span>v1.0</span></p>
		<p>上次登录IP：14.218.128.106 上次登录时间：2021-01-11 09:16:23</p>
		<el-row>
			<el-col :span="12">
				<div class="panel">
					<span>服务器平均</span>
					<el-progress :text-inside="true" :stroke-width="24" :percentage="40" status="success"></el-progress>
					<span>服务器最高</span>
					<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="exception"></el-progress>
					<span>数据库平均</span>
					<el-progress :text-inside="true" :stroke-width="22" :percentage="30" status="success"></el-progress>
					<span>数据库最高</span>
					<el-progress :text-inside="true" :stroke-width="20" :percentage="60" status="warning"></el-progress>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="panel">
					<el-progress style="padding:20px" type="circle" :stroke-width="20" :percentage="30" color="#67C23A"></el-progress>
					<el-progress style="padding:20px" type="circle" :stroke-width="20" :percentage="68" color="#E6A23C"></el-progress>
					<el-progress style="padding:20px" type="circle" :stroke-width="20" :percentage="25" color="#67C23A"></el-progress>
					<el-progress style="padding:20px" type="circle" :stroke-width="20" :percentage="90" color="#F56C6C"></el-progress>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<div style="margin:30px 0px;">
					<el-table :data="tableData" border style="width: 100%;">
						<el-table-column prop="title" label="服务器信息" width="150"> </el-table-column>
						<el-table-column prop="content" label="说明"> </el-table-column>
					</el-table>
				</div>
			</el-col>
			<el-col :span="12">
				<div style="margin:30px 20px;">
					<el-table :data="tableData2" border style="width: 100%;">
						<el-table-column prop="title" label="统计" width="150"> </el-table-column>
						<el-table-column prop="content" label="说明"> </el-table-column>
					</el-table>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [
				{
					title: "计算机名",
					content: "veadmin"
				},
				{
					title: "IP地址",
					content: "127.0.0.1"
				},
				{
					title: "域名",
					content: "localhost/veadmin"
				},
				{
					title: "端口",
					content: "80"
				},
				{
					title: "CPU大小",
					content: "8G"
				}
			],
			tableData2: [
				{
					title: "今日访问量",
					content: "89"
				},
				{
					title: "30天访问量",
					content: "326"
				},
				{
					title: "图片资源",
					content: "28"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
span {
	font-size: smaller;
}
p {
	font-size: small;
}
</style>
