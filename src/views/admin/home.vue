<template>
	<div>
		<div class="vea-header-bar">
			<!-- 标题栏组件 -->
			<home-header :headerData="headerData"></home-header>
		</div>
		<div class="vea-side-bar">
			<!-- 侧边栏组件 -->
			<home-side-bar :sideBarData="sideBarData"></home-side-bar>
		</div>
		<div class="vea-content-box">
			<!-- 内容组件 -->
			<home-content ref="child"></home-content>
		</div>
	</div>
</template>

<script>
import HomeHeader from "./common/header.vue";
import HomeSideBar from "./common/sidebar.vue";
import HomeContent from "./homeContent";

export default {
	//注册组件
	components: {
		HomeHeader,
		HomeSideBar,
		HomeContent
	},
	//声明数据源
	data() {
		return {
			headerData: [
				{
					content: "小明",
					url: "../#/admin/user_management/user_info",
					icon: "user-solid",
					open_in_tab: false
				},
				{
					content: "操作日志",
					url: "../#/admin/user_management/user_log",
					icon: "thumb",
					open_in_tab: true
				}
			],
			sideBarData: [
				{
					content: "图片管理",
					url: "../#/admin/image_management/image_list",
					icon: "s-tools",
					open_in_tab: true,
					children: null
				},
				{
					content: "用户管理",
					url: "",
					icon: "s-shop",
					children: [
						{
							content: "用户列表",
							url: "../#/admin/user_management/user_list",
							icon: "user-solid",
							open_in_tab: true
						},
						{
							content: "黑名单",
							url: "../#/admin/user_management/blacklist",
							icon: "menu",
							open_in_tab: true
						}
					]
				},
				{
					content: "系统管理",
					url: "../#/admin/system_management/system_settings",
					icon: "s-opportunity",
					open_in_tab: true,
					children: null
				}
			]
		};
	},
	methods: {
		openTab(title, url, open_tab) {
			this.$refs.child.openTab(title, url, open_tab);
		}
	}
};
</script>

<style lang="scss" scoped></style>
