<template>
	<div style="padding-left:20px">
		<h1>信息中心</h1>
		<el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
			<el-table-column prop="date" label="日期" width="150"> </el-table-column>
			<el-table-column prop="name" label="发件人" width="150"> </el-table-column>
			<el-table-column prop="content" label="内容"> </el-table-column>
			<el-table-column>
				<el-table-column prop="address">
					<el-button type="success" icon="el-icon-check" circle></el-button>
					<el-button type="success" icon="el-icon-message" circle></el-button>
					<el-button type="warning" icon="el-icon-star-off" circle></el-button>
					<el-button type="danger" icon="el-icon-delete" circle></el-button>
				</el-table-column>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	methods: {
		tableRowClassName({ row, rowIndex }) {
			if (rowIndex === 1) {
				return "warning-row";
			} else if (rowIndex === 3) {
				return "success-row";
			}
			return "";
		}
	},
	data() {
		return {
			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					content: "你好，非常欢迎你，欢迎使用veadmin"
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					content: "你好，非常欢迎你，欢迎使用veadmin"
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					content: "你好，非常欢迎你，欢迎使用veadmin"
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					content: "你好，非常欢迎你，欢迎使用veadmin"
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					content: "你好，非常欢迎你，欢迎使用veadmin"
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					content: "你好，非常欢迎你，欢迎使用veadmin"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.el-table .warning-row {
	background: oldlace;
}

.el-table .success-row {
	background: #f0f9eb;
}
</style>
