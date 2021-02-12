<template>
	<div>
		<div class="veadmin-iframe-header veadmin-iframe-header-custom-fixed">
			<span>当前位置:</span>
			管理资讯
			<span class="c-gray en">&gt;</span>
			管理文章
			<button class="veadmin-iframe-button" onclick="location.reload()">
				<i class="el-icon-refresh-right"></i>
			</button>
		</div>
		<div class="veadmin-iframe-content veadmin-iframe-content-custom-fixed">
			<el-row style="text-align: center;">
				<el-button class="search-range" type="primary" icon="el-icon-circle-plus-outline" @click="addArticle()" plain>增加文章</el-button>
				<el-input class="search-range" style="width:150px" v-model="condition.title" placeholder="搜索标题"></el-input>
				<el-input class="search-range" style="width:150px" v-model="condition.text" placeholder="搜索内容"></el-input>
				<el-input class="search-range" style="width:100px" v-model="condition.tab" placeholder="搜索标签"></el-input>
				<el-cascader
					class="search-range"
					style="width:180px;margin-top: 8px;"
					v-model="condition.category"
					:options="allCategory"
					placeholder="选择分类"
					:props="{ expandTrigger: 'hover' }"
				></el-cascader>
				<el-date-picker
					class="search-range"
					v-model="condition.timeRange"
					type="datetimerange"
					:picker-options="pickerOptions"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
					align="right"
				>
				</el-date-picker>
				<el-button class="search-range" type="primary" icon="el-icon-search" @click="searchArticle()">搜索</el-button>
			</el-row>
			<div style="padding: 10px;">
				<el-table :data="articleList" border>
					<el-table-column prop="title" label="文章标题"> </el-table-column>
					<el-table-column prop="category.label" label="文章分类" width="180"> </el-table-column>
					<el-table-column label="文章标签">
						<template slot-scope="scope">
							<!-- <el-tag style="margin:2px" v-for="item in scope.row.tab_list" :key="scope.row.id + item.label">{{ item.label }}</el-tag> -->
							<el-tag
								style="margin:2px"
								:key="item.relation_id"
								v-for="item in scope.row.tab_list"
								closable
								:disable-transitions="false"
								@close="deleteTabRelation(scope.$index, item)"
							>
								{{ item.label }}
							</el-tag>
							<input
								:id="'input-' + scope.$index"
								class="input-new-tag"
								placeholder="+ 增加标签"
								@keyup.enter="addTabInputConfirm(scope.$index)"
								@blur="addTabInputConfirm(scope.$index)"
							/>
						</template>
					</el-table-column>
					<el-table-column prop="release_time" label="发布时间" width="210"> </el-table-column>
					<el-table-column label="" width="200">
						<template slot-scope="scope">
							<!-- <el-button @click="handleArticle(scope.$index, scope.row)">打印数据</el-button> -->
							<el-button type="primary" icon="el-icon-search" circle @click="showArticle(scope.row.id)"></el-button>
							<el-button type="primary" icon="el-icon-edit" circle @click="editArticle(scope.row.id)"></el-button>
							<el-button type="danger" icon="el-icon-delete" circle @click="deleteArticle(scope.row.id)"></el-button>
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
				title: "",
				text: "",
				tab: "",
				category: [],
				//timeRange: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
				timeRange: null
			},
			pickerOptions: {
				shortcuts: [
					{
						text: "最近一周",
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit("pick", [start, end]);
						}
					},
					{
						text: "最近一个月",
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit("pick", [start, end]);
						}
					},
					{
						text: "最近三个月",
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit("pick", [start, end]);
						}
					}
				]
			},
			pagination: {
				start: 0,
				limit: 10,
				total: 0
			},
			articleList: [
				{
					id: 1,
					title: "标题1",
					category: { label: "分类1" },
					tab_list: [
						{ relation_id: 11, label: "标签1" },
						{ relation_id: 12, label: "标签2" }
					],
					release_time: "2020-01-01 01:01:01"
				},
				{
					id: 2,
					title: "标题1",
					category: { label: "分类1" },
					tab_list: [
						{ relation_id: 21, label: "标签1" },
						{ relation_id: 22, label: "标签2" }
					],
					release_time: "2020-01-01 01:01:01"
				},
				{
					id: 3,
					title: "标题1",
					category: { label: "分类1" },
					tab_list: [
						{ relation_id: 31, label: "标签1" },
						{ relation_id: 32, label: "标签2" }
					],
					release_time: "2020-01-01 01:01:01"
				}
			],
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
			]
		};
	},
	methods: {
		/* handleArticle(index, row) {
			console.log(index, row);
		}, */
		deleteTabRelation(articleListIndex, tag) {
			console.log(articleListIndex, tag);
			//这里写后台删除tab逻辑
			//然后再从静态页面删除tab
			this.articleList[articleListIndex].tab_list.splice(this.articleList[articleListIndex].tab_list.indexOf(tag), 1);
		},
		addTabInputConfirm(articleListIndex) {
			let label = document.getElementById("input-" + articleListIndex).value;
			//console.log(articleListIndex, label);
			if (label) {
				let article_id = this.articleList[articleListIndex].id;
				//console.log("article_id", article_id);
				//label,relation_id应取后端返回的值，这里为了演示作静态添加处理
				this.articleList[articleListIndex].tab_list.push({
					label: label,
					relation_id: articleListIndex * 10 + this.articleList[articleListIndex].tab_list.length
				});
				//console.log(this.articleList[articleListIndex].tab_list);
			}
			document.getElementById("input-" + articleListIndex).value = "";
		},
		changePage(page) {
			this.pagination.start = (page - 1) * this.pagination.limit;
			//重新获取文章列表
			//this.getArticleList();
		},
		searchArticle() {
			console.log("search article condition:", this.condition);
		},
		addArticle() {
			console.log("add article");
		},
		showArticle(id) {
			console.log("article_id:", id);
		},
		editArticle(id) {
			console.log("article_id:", id);
		},
		deleteArticle(id) {
			console.log("article_id:", id);
		}
	}
};
</script>

<style lang="scss" scoped>
.search-range {
	margin-left: 10px;
	margin-top: 10px;
}
.input-new-tag {
	margin-left: 2px;
	width: 60px;
	border: 1px solid #dcdfe6;
	border-radius: 4px;
	line-height: 30px;
	font-size: 12px;
	padding: 0 10px;
}
</style>
