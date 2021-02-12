<template>
	<div>
		<div class="veadmin-iframe-header veadmin-iframe-header-custom-fixed">
			<span>当前位置:</span>
			管理咨询
			<span class="c-gray en">&gt;</span>
			管理分类
			<button class="veadmin-iframe-button" onclick="location.reload()">
				<i class="el-icon-refresh-right"></i>
			</button>
		</div>
		<div class="veadmin-iframe-content veadmin-iframe-content-custom-fixed">
			<el-row style="text-align: center;">
				<el-button class="search-range" type="primary" icon="el-icon-circle-plus-outline" @click="addCategory()" plain>增加分类</el-button>
				<el-input class="search-range" style="width:150px" v-model="condition.label" placeholder="搜索名称"></el-input>
				<el-cascader
					class="search-range"
					style="width:180px;margin-top: 8px;"
					v-model="condition.category"
					:options="allCategory"
					placeholder="选择父分类"
					:props="{ expandTrigger: 'hover' }"
				></el-cascader>
				<el-button class="search-range" type="primary" icon="el-icon-search" @click="searchCategory()">搜索</el-button>
			</el-row>
			<div style="padding: 10px;">
				<el-table :data="categoryList" border>
					<el-table-column prop="label" label="分类名称"> </el-table-column>
					<el-table-column prop="update_time" label="更新时间" width="210"> </el-table-column>
					<el-table-column prop="create_time" label="创建时间" width="210"> </el-table-column>
					<el-table-column label="操作" width="200">
						<template slot-scope="scope">
							<!-- <el-button @click="handleCategory(scope.$index, scope.row)">打印数据</el-button> -->
							<el-button type="primary" icon="el-icon-edit" circle @click="editCategory(scope.row.id)"></el-button>
							<el-button type="danger" icon="el-icon-delete" circle @click="deleteCategory(scope.row.id)"></el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>

			<el-pagination
				style="margin:10px 0px;"
				background
				layout="prev, pager, next"
				:page-size="pagination.limit"
				:total="pagination.total"
				:pager-count="7"
				@current-change="changePage"
			>
			</el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			condition: {
				label: "",
				category: []
			},
			pagination: {
				start: 0,
				limit: 10,
				total: 0
			},
			allCategory: [
				{
					value: "zhinan",
					label: "指南"
				},
				{
					value: "ziyuan",
					label: "资源",
					children: [
						{
							value: "axure",
							label: "Axure Components"
						},
						{
							value: "sketch",
							label: "Sketch Templates"
						}
					]
				},
				{
					value: "zujian",
					label: "组件",
					children: [
						{
							value: "basic",
							label: "Basic"
						},
						{
							value: "others",
							label: "Others",
							children: [
								{
									value: "dialog",
									label: "Dialog 对话框"
								},
								{
									value: "tooltip",
									label: "Tooltip 文字提示"
								}
							]
						}
					]
				}
			],
			categoryList: [
				{ id: 1, label: "分类1", update_time: "2021-01-01 00:01:01", create_time: "2021-01-01 00:01:01" },
				{ id: 2, label: "分类2", update_time: "2021-01-01 00:01:01", create_time: "2021-01-01 00:01:01" },
				{ id: 3, label: "分类3", update_time: "2021-01-01 00:01:01", create_time: "2021-01-01 00:01:01" }
			]
		};
	},
	methods: {
		/* handleCategory(index, row) {
			console.log(index, row);
		}, */
		changePage(page) {
			this.pagination.start = (page - 1) * this.pagination.limit;
			//重新获取文章列表
			//this.getCategoryList();
		},
		searchCategory() {
			console.log("search category condition:", this.condition);
		},
		addCategory() {
			console.log("add category");
		},
		editCategory(id) {
			console.log("category_id:", id);
		},
		deleteCategory(id) {
			console.log("category_id:", id);
		}
	}
};
</script>

<style lang="scss" scoped>
.search-range {
	margin-left: 10px;
	margin-top: 10px;
}
</style>
