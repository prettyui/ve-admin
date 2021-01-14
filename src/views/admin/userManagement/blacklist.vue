<template>
	<div style="padding-left:20px">
		<h1>黑名单</h1>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="date" label="日期" width="180"> </el-table-column>
			<el-table-column prop="name" label="姓名" width="180"> </el-table-column>
			<el-table-column prop="address" label="地址"> </el-table-column>
			<el-table-column>
				<el-button type="primary" icon="el-icon-edit" circle></el-button>
				<el-button type="info" icon="el-icon-message" circle></el-button>
				<el-button type="danger" icon="el-icon-delete" circle></el-button>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄"
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1517 弄"
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄"
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1516 弄"
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄"
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1517 弄"
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄"
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1516 弄"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped></style>
